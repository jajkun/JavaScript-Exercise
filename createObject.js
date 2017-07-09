//1. Object Initializer
var person = { firstName:"j&j",
               lastName:"Sun",
               get fullName(){
                 return this.firstName + " " + this.lastName;
               },
               set fullName(name){
                 var words = name.toString().split(" ");
                 this.firstName = words[0]||" ";
                 this.lastName = words[1]||" ";
               }
}//person
console.log(person);
console.log(person["firstName"]+person.lastName);
person.fullName="WveiWang";
console.log(person);
console.log(person["firstName"]+person.lastName);

//2. new objecter
var car = new Object();
car.year ="2020";
console.log(car);

//3. constructor
function cat(color,age){
  this.color = color;
  this.age = age;
  this.getColor=function(){
    return this.color;
  }
  this.getAge=function(){
    return this.age;
  }
}//cat
var myCat = new cat("white",4);
var myCat2 = new cat("grey",3,123,"123");
console.log(myCat.getColor()+" , "+myCat.getAge());
for(var c2 in myCat2){
  console.log(c2+" : "+myCat2[c2]);
}
console.log( Object.keys(myCat2) );
console.log( Object.getOwnPropertyNames(myCat2) );

//Object.create
var Animal ={
  type:"bone",
  displayType:function(){
    console.log(this.type);
  }
}//Animal
var fish = Object.create(Animal);
fish.displayType();
console.log("fish");
