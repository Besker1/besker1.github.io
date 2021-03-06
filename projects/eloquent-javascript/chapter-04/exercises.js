////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) {
    // input: start, end, steps
    // output: array of numbers
    // constraint: should be from start to end
    // make a newArray for collection
    // make a for loop 
    // make an if statement
  let array = [];
  let newArray = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) newArray.push(i);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
// input: array
// outPut: return sum of array indexes

// make a new array
// make a loop
// add index to the total value of array
// return new array

let total = 0;
for(let i = 0; i < array.length; i++){
        total += array[i];
}
return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
    // make a loop
    // make an if statement
    // use the unshift method to add at the beginning
    // resturn new array
    let newArray = [];
    for(let i = 0; i < array.length; i++ ){
        newArray.unshift(array[i]);
    }
return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
 for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var path = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = path;
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
 var newList = null;
  for (var i = array.length - 1; i >= 0; i--) {
    newList = {value: array[i], rest: newList};
  }
  return newList;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function listToArray(array) {
var newArray = [];
  for (var i = array; i; i = i.rest) {
    newArray.push(i.value);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function prepend(value,list) {
  return {value, rest: list};

}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list,n) {
if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a,b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  var keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (var key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;

}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
