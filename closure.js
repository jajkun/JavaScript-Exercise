//1.
function outter(){
  function inner(){
    console.log("this is a nested function");
  }//inner
  return inner;
}
var nes = outter();
nes();// equals to outter()()

//2.
function sum(a){
  function inner(b){
    return a+b;
  }//inner
  return inner;
}
var result=sum(3)(4);
var result1 = sum(3);//[Function: inner]
console.log(result);

//3. example difference between closure and constructor
//closure ver.
function user(name){
  this.say = function(words){
    console.log(name+" says "+words );
  }//say
  return say;
}
user("j&j")("do well");
//constructor ver.
function user(name){
  this.say = function(words){ //if using var say = function(w.. will get TypeError: (u.say is not a function)
    console.log(name+" says "+words );
  }//say
}
var u = new user("j&j");
u.say("do well");
