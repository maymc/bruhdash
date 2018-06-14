var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    var firstElem = arr.shift();
    return firstElem;
      
  },

  // returns the last element of an array
  last: function (arr) {
    var lastElem = arr.pop();
    return lastElem;

  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, elem) {
    for(var i=0; i<arr.length; i++){
      if(elem === arr[i]){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, elem) {
    for(var i=(arr.length-1); i>=0; i--){
      if(elem === arr[i]){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var allButLast = [];
    for(var i=0; i<(arr.length-1); i++){
      allButLast.push(arr[i]);
    }
    return allButLast;

  },
  
  // returns an array with all falsey values removed
  //The values false, null, 0, "", undefined, and NaN are falsey.
  compact: function(arr) {
    var nonFalseArray = [];

    for(var i=0; i<arr.length; i++){
      var elem = arr[i];

      if(elem !== false && elem !== null && elem !== 0 && elem !== "" && elem!== undefined && !isNaN(elem)){
        nonFalseArray.push(elem);
      }
    }
    return nonFalseArray;

  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var slicedArray = [];
    for(var i=start; i<end; i++){
      slicedArray.push(arr[i]);
    }
    return slicedArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    if(num === undefined){
      arr.shift();
      return arr;
    }
    else if(num === 0){
      return arr;
    }
    else{
      while(num>0){
        arr.shift();
        num--;
      }
      return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    if(num === undefined){
      arr.pop();
      return arr;
    }
    else if(num === 0){
      return arr;
    }
    else{
      while(num>0){
        arr.pop();
        num--;
      }
      return arr;
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var arr2 = [];
    var begElem;

    if(num === undefined){
      begElem = arr.shift();
      arr2.push(begElem);
      return arr2;
    }
    else if(num>arr.length){
      return arr;
    }
    else{
      while(num>0){
        var begElem = arr.shift();
        arr2.push(begElem);
        num--;
      }
      return arr2;
    }


  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    var arr2 = [];
    
    if(num === 0){
      return arr2;
    }
    else if(num > arr.length){
      return arr;
    }
    else if(num === undefined){
      var elem = arr.pop();
      arr2.push(elem);
      return arr2;
    }
    else{
      while(num > 0){
        var elem = arr.pop();
        arr2.push(elem);
        num--;
      }
      arr2.reverse();
      return arr2;
    }

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    var arr2 = [];
    if(start === undefined && end === undefined){
      for(var i=0; i<arr.length; i++){
        arr2.push(value);
      }
      return arr2;
    }
    else{
      for(var i=0; i<arr.length; i++){
        if(i >= start && i < end){
          arr2.push(value);
        }
        else{
          arr2.push(arr[i]);
        }
      }
      return arr2;
    }
  },

  // removes all given values from an array
  pull: function (arr, value1, value2) {
    for(var i=0; i<arr.length; i++){
      if(arr[i] === value1){
        arr.splice(i, 1);
		    //console.log(arr);
		    //console.log("i:" + i);
		    i = i-1;
		    //console.log("new i: " + i);
      }
      else if(arr[i] === value2){
        arr.splice(i, 1);
		    //console.log(arr);
        //console.log("i:" + i);
        i=i-1;
        //console.log("new i: " + i);
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indexArr) {
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
      for(var j=0; j<indexArr.length; j++){
        if(i === indexArr[j]){
          arr2.push(arr[i]);
        }
      }
    }
    return arr2;
  },

  // creates an array excluding all the specified values
  without: function(arr, value1, value2) {
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        arr2.push(arr[i]);
      }
    }
    return arr2;
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i] !== values[i]){
        arr2.push(arr[i]);
      }
    }
    return arr2;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var grouped = [];

    for(var i=0; i<arr1.length; i++){
      var grpElem = [];
      grpElem.push(arr1[i]);
      grpElem.push(arr2[i]);
      grouped.push(grpElem);
    }
    return grouped;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var ungroup = [];

    for(var i=0; i<arr[i].length; i++){
      var unzipElem = [];
      
      for(var j=0; j<arr.length; j++){   
        //console.log(arr[j][i]);
        unzipElem.push(arr[j][i]);
        //console.log(unzipElem);
      }
      ungroup.push(unzipElem);
      //console.log(ungroup);
    }
    return ungroup;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
