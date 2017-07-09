//1.
var isEqualsArr = function (arr1, arr2) {
  if (arr1.length != arr2.length) 
      return false;

  for(var i=0;i<arr1.length;i++){
      if (arr1[i] === arr2[i]) {
          continue;
      }
      else{
          return false;
          break;
      }
  }//for
  return true;
}//isEqualsArr
var a = ['a','d','c'];
var b = ['a','d','c'];
console.log( isEqualsArr(a,b) );

//2
var isEqualsToString = function(arr1,arr2){
  var string1 = a.sort().toString();
  var string2 = b.sort().toString();
  if( string1===string2 ){
      return true;
  }else{
      return false;
  }
}//isEqualsToString
var a = ['a','d','c'];
var b = ['a','d','c'];
console.log( isEqualsToString(a,b) );

//3.
isEqual = function (x, y) {
  // If both x and y are null or undefined and exactly the same 
  if (x === y) {
    return true;
  }
  // If they are not strictly equal, they both need to be Objects 
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }
  //They must have the exact same prototype chain,the closest we can do is
  //test the constructor. 
  if (x.constructor !== y.constructor) {
    return false;
  }
  for (var p in x) {
    //Inherited properties were tested using x.constructor === y.constructor
    if (x.hasOwnProperty(p)) {
      // Allows comparing x[ p ] and y[ p ] when set to undefined 
      if (!y.hasOwnProperty(p)) {
        return false;
      }
      // If they have the same strict value or identity then they are equal 
      if (x[p] === y[p]) {
        continue;
      }
      // Numbers, Strings, Functions, Booleans must be strictly equal 
      if (typeof (x[p]) !== 'object') {
        return false;
      }
      // Objects and Arrays must be tested recursively 
      if (!Object.equals(x[p], y[p])) {
        return false;
      }
    }
  }
  for (p in y) {
    // allows x[ p ] to be set to undefined 
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false;
    }
  }
  return true;
};
//test
var a1 = ['a','d','c'];
var a2 = ['a','d','c'];

objA={ 
 a:'123', 
 b:'456'
}; 
objB={ 
 a:'123', 
 b:'456'
}; 
var obj= isEqual(objA, objB); 
console.log("Object: "+obj); 
console.log("+++++华丽分割线+++++++");
var obj1= isEqual(9, 9); 
console.log("number: "+obj1);
console.log("+++++华丽分割线+++++++");
var obj2= isEqual(a1, a2);
console.log("array: "+obj2);
