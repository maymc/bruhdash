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
    // var firstElem = arr.shift();
    // return firstElem;
    return arr[0];
      
  },

  // returns the last element of an array
  last: function (arr) {
    // var lastElem = arr.pop();
    // return lastElem;
    return arr[arr.length-1];

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
      // allButLast.push(arr[i]);
      allButLast[i] = arr[i];
    }
    return allButLast;

  },
  
  // returns an array with all falsey values removed
  //The values false, null, 0, "", undefined, and NaN are falsey.
  compact: function(arr) {
    var nonFalseArray = [];
    var index = 0;

    for(var i=0; i<arr.length; i++){
      var elem = arr[i];

      if(elem !== false && elem !== null && elem !== 0 && elem !== "" && elem!== undefined && !isNaN(elem)){
        // nonFalseArray.push(elem);
        nonFalseArray[index] = arr[i];
        index++;
      }
    }
    return nonFalseArray;

  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var slicedArray = [];
    var index = 0;

    for(var i=start; i<end; i++){
      // slicedArray.push(arr[i]);
      slicedArray[index] = arr[i];
      index++;
    }
    return slicedArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    var arr2 = [];
    if(num === undefined){
      //arr.shift();
      for(var i=1; i<arr.length; i++){
        arr2[i-1] = arr[i];
      }
      return arr2;
    }
    else if(num === 0){
      return arr;
    }
    else{
      // while(num>0){
      //   arr.shift();
      //   num--;
      // }
      var index = 0;
      for(var i=num; i<arr.length; i++){
        arr2[index] = arr[i];
        index++;
      }
      return arr2;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    var arr2 = [];
    if(num === undefined){
      for(var i=0; i<arr.length-1; i++){
        arr2[i] = arr[i];
      }
      // arr.pop();
      return arr2;
    }
    else if(num === 0){
      return arr;
    }
    else{
      // while(num>0){
      //   arr.pop();
      //   num--;
      // }
      for(var i=0; i<arr.length-num; i++){
        arr2[i] = arr[i];
      }
      return arr2;
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var arr2 = [];
    var begElem;

    if(num === undefined){
      // begElem = arr.shift();
      // arr2.push(begElem);
      arr2[0] = arr[0];

      return arr2;
    }
    else if(num>arr.length){
      return arr;
    }
    else{
      // while(num>0){
      //   var begElem = arr.shift();
      //   arr2.push(begElem);
      //   num--;
      // }
      for(var i=0; i<num; i++){
        arr2[i] = arr[i];
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
      // var elem = arr.pop();
      // arr2.push(elem);
      arr2[0] = arr[arr.length-1];
      return arr2;
    }
    else{
      // while(num > 0){
      //   var elem = arr.pop();
      //   arr2.push(elem);
      //   num--;
      // }
      // arr2.reverse();
      var index = 0;
      for(var i=arr.length-num; i<arr.length; i++){
        arr2[index] = arr[i];
        index++;
      }
      return arr2;
    }

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    var arr2 = [];
    if(start === undefined && end === undefined){
      for(var i=0; i<arr.length; i++){
        //arr2.push(value);
        arr2[i] = value;
      }
      return arr2;
    }
    else{
      for(var i=0; i<arr.length; i++){
        if(i >= start && i < end){
          //arr2.push(value);
          arr2[i] = value;
        }
        else{
          //arr2.push(arr[i]);
          arr2[i] = arr[i];
        }
      }
      return arr2;
    }
  },

  // removes all given values from an array
  pull: function (arr, value1, value2) {
    var index = 0;
    var arr2 = [];

    for(var i=0; i<arr.length; i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        arr2[index] = arr[i];
        index++;
        //arr.splice(i, 1);
		    //console.log(arr);
		    //console.log("i:" + i);
		    //i = i-1;
		    //console.log("new i: " + i);
      }
      // else if(arr[i] === value2){
      //   arr.splice(i, 1);
		  //   console.log(arr);
      //   console.log("i:" + i);
      //   i=i-1;
      //   console.log("new i: " + i);
      // }
    }
    return arr2;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indexArr) {
    var arr2 = [];
    var index = 0;
    for(var i=0; i<arr.length; i++){
      for(var j=0; j<indexArr.length; j++){
        if(i === indexArr[j]){
          // arr2.push(arr[i]);
          arr2[index] = arr[i];
          index++;
        }
      }
    }
    return arr2;
  },

  // creates an array excluding all the specified values
  without: function(arr, value1, value2) {
    var arr2 = [];
    var index = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        //arr2.push(arr[i]);
        arr2[index] = arr[i];
        index++;
      }
    }
    return arr2;
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    var arr2 = [];
    var index = 0;

    for(var i=0; i<arr.length; i++){
      if(arr[i] !== values[i]){
        //arr2.push(arr[i]);
        arr2[index] = arr[i];
        index++;
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
    var index = 0;

    for(var i=0; i<arr1.length; i++){
      var grpElem = [];
      grpElem[0] = arr1[i];
      //console.log("arr1: "+arr1[i]);
      //console.log(grpElem);
      
      grpElem[1] = arr2[i];
     //console.log("arr2: "+arr2[i]);
      //console.log(grpElem);
      
      grouped[index] = grpElem;
      //console.log(grouped);
      
      index++;
    }
    return grouped;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function unzip(arr) {
    var ungroup = [];
    var index = 0;
    var index2 = 0;

    for(var i=0; i<arr[i].length; i++){
      var unzipElem = [];
      
      for(var j=0; j<arr.length; j++){   
        //console.log(arr[j][i]);
        //unzipElem.push(arr[j][i]);
        //console.log(unzipElem);
        //console.log("arr[j][i]: " + arr[j][i]);
        unzipElem[index] = arr[j][i];
        //console.log(unzipElem)
        index++;
      }
      //ungroup.push(unzipElem);
      ungroup[index2] = unzipElem; //add the first group to the new array
      index2++; //Increase index for the next group
      index = 0; //After pushing in the first group, reset index count
      //console.log(ungroup);
    }
    return ungroup;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    var group = [];
    var arr2 = [];
    var count = 0;
    var grpCount = 0;

    if(arr.length === 0){
      return arr;
    }
    else if(size === 0){
      return arr2;
    }
    else if(size >=arr.length){
      arr2 = [arr];
      return arr2;
    }
    else{
      for(var i=0; i<arr.length; i++){
        //arr2.push(arr[i]);
        arr2[count] = arr[i];
        count++;
        if(count === size){
          //group.push(arr2);
          group[grpCount] = arr2;
          grpCount++;
          arr2 = [];
          count = 0;
        }
        else if(i === arr.length-1){
          //group.push(arr2);
          group[grpCount] = arr2;
        }
      }
      return group;

    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, iterateeFunc) {

    //If collection is an array
    if(Array.isArray(collection)){
      for(var i=0; i<collection.length; i++){
        iterateeFunc(collection[i]);
      }
      return collection;
    }
    //Else collection is an object
    else{
      for(var key in collection){
        iterateeFunc(collection[key],key);
      }
      return collection;
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, iterateeFunc) {
    var arr2 = [];
    var index = 0; //this is to increment through the new array's indexes
    //If collection is an array
    if(Array.isArray(collection)){
      for(var i=0; i<collection.length; i++){
        arr2[i] = iterateeFunc(collection[i]);
      }
      return arr2;
    }
    //Else collection is an object
    else{
      for(var key in collection){
        arr2[index] = iterateeFunc(collection[key],key);
        index++;
      }
      return arr2;
    }
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
