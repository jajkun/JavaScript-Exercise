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

//4. closure in different ways
//(a)
var product = function(price){
  var price = price;
  return{
    isGood:true,
    getPrice:function(){
      return price;
    }//getPrice
  };//return
};
var pro = product(1000);
console.log(pro.isGood);
console.log(pro.getPrice());

//(b)
var product = function(price){
  var price = price;
  var isGood=true;
  var getPriceInner=function(){
      return price;
  };//getPrice
  return{
    isGood:true,
    getPrice:getPriceInner
  };//return
};
var pro = product(1000);
console.log(pro.isGood);
console.log(pro.getPrice());

//(c)
var product = function(price){
  var price = price;
  var isGood={
    height:100,
    width:100
  }
  var getPriceInner=function(){
      return price;
    };//getPrice
  var getWidth=function(){
      return isGood.width;
    };//getPrice
  var getHeight=function(){
      return isGood.height;
    };//getPrice
  return{
    isGood:isGood,
    getWidth:getWidth,
    getHeight:getHeight,
    getPrice:getPriceInner
  };//return
};
var pro = product(1000);
console.log(pro.isGood);
pro.isGood.width = 800;
pro.isGood.height = 800;
console.log(pro.isGood);
console.log(pro.getHeight()+pro.getWidth());
console.log(pro.getPrice());

//(d)
var product = function(price){
  var price = price;
  var isGood={
    height:100,
    width:100
  };
  var getPriceInner=function(){
      return price;
    };//getPrice
  var getGood = function(){
      var newGood={
      height:isGood.height,
      width:isGood.width,
      };    
    //var newGood = Object.create(isGood);
    return newGood;
  };
  return{
    getGood:getGood,
    getPrice:getPriceInner
  };//return
};
var pro = product(1000);
pro.getGood().height = 400; //not work anymore
pro.getGood().width = 400;
console.log(pro.getGood());
//pro.isGood.width = 800;
//pro.isGood.height = 800;
console.log(pro.isGood); //undefined

