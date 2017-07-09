//1.
var person1={
  name:"emma",
  sayHello:function(){
    console.log(console.log("hello"+" "+this.name));
  }
}

var person2={
  name:"elsa",  
  sayBye:function(){
    console.log(console.log("bye"+" "+this.name));
  }
}
person1.sayHello.call(person2);
person2.sayBye.apply(person1);
