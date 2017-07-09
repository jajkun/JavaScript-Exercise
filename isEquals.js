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

//2.
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
