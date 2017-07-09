function Animal(type){
  this.type = type;
}
function cat(name){
  this.name = name;
}
function chicken(name){
  this.name = name;
}
Animal.prototype.setStatus=function(status){
  this.status = status;
}

cat.prototype = new Animal("mammal");
cat.prototype.constructor = cat;
chicken.prototype = new Animal("bird");
chicken.prototype.constructor = chicken;
//test
var catObj = new cat('catSample1');
var chickObj = new chicken('chickenSample1');
console.log("cat is a "+catObj.type);
console.log("chicken is a "+chickObj.type);

catObj.setStatus("eating food");
console.log("cat is "+catObj.status);
chickObj.setStatus("laying egg");
console.log("cat is "+chickObj.status);
