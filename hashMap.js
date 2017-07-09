function HashMap(){
    var mapSize=0;
    var hashMap = new Object();

    this.add = function(key,value){
      if( !key ){
        return false;
      }
      if( !this.containsKey(key) ){ 
           hashMap[key] = value;
           mapSize++;
      }
    }//add

    this.size = function(){
      return mapSize;
    }//size

    this.containsKey = function(key){
      return ( key in hashMap );
    }//containsKey

    this.containsValue = function(value){
      for( var v in hashMap ){
        if( hashMap[v] == value ){
          return true;
        }//if
      }//for
      return false;
    }//containsValue

    this.clear = function(){
      mapSize = 0;
      hashMap = new Object();
    }//clear

    this.keys = function(){
      var kArray=[];
      for( var k in hashMap){
          kArray.push( k );
      }//for
      return kArray;
    }//keys

    this.values = function(){
      var vArray =[];
      for( var v in hashMap ){
        vArray.push(hashMap[v]);
      }
      return vArray;
    }//values

    this.search = function(value){
      for( var i=0; i<this.size();i++){
          if( this.containsValue(value) ){
            console.log("found "+value);
          }
          else
            console.log(" could not found "+value);
      }//for
    }//search

    this.get = function(key){
      if( this.containsKey(key) ){
        return ( hashMap[key] );
      }
      else{
        return null;
      }
    }//get

    this.remove = function(key){
      if( this.containsKey(key) ){
        if( delete hashMap[key] ){
          mapSize--;
        }//if
        else{
          console.log( "cannot remove this element" );
        }
      }
      else{
        console.log( "this index not found" );
      }
    }//remove
}//HashMap

var hashMapObj = new HashMap();
hashMapObj.add(1,30);
hashMapObj.add(2,4);
hashMapObj.add(2,5);
console.log( "HashMap Size:  "+hashMapObj.size() );
console.log( "HashMap: "+hashMapObj.values()+"\n");
console.log("+++++华丽分割线 search+++++++");
hashMapObj.search(30);  
hashMapObj.search(47); 
console.log("\n+++++华丽分割线 get index+++++++");
hashMapObj.get(2); 
hashMapObj.get(3); 
console.log("\n+++++华丽分割线 remove+++++++");
hashMapObj.remove(1);
console.log( "new HashMap: "+ "\n"+hashMapObj.keys() + "\n"+ hashMapObj.values() );
console.log( "new HashMap Size:  "+hashMapObj.size() );
console.log("\n+++++华丽分割线 clean hashmap+++++++");
hashMapObj.clear();
console.log( "now HashMap Size is  "+hashMapObj.size() );

