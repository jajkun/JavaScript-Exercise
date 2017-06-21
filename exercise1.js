//------- [4,3,3,6,3,1,6] to print 3 and 6 out? --------------
function print(array){
	//first to filter array
	var filterArray=[];
	var countAppears;
	var printArray=[];
	for( var i in array ){
		if( filterArray.indexOf(array[i])==-1 ){
			filterArray.push(array[i]);
		}//if
	}
	//calculate each numbers count
	for( var j in filterArray ){
		countAppears = calcCount(array,filterArray[j]);
		if( countAppears>1 ){
			printArray.push(filterArray[j]);
		}//if
	}//for
	console.log(printArray);
}//print

function calcCount(original,filters){
	var count=0;
	original.map(function(a){
		if( a==filters ){
			count++;
		}//if
	});
	return count;
}//calcCount

//another way to find out count by using filter method
function calcCountWithFilterMethod(original,filters){
	var count = original.filter(function(a){
		return a===filters;
	});
	return count.length;
}

var a=[4,3,3,6,3,1,6];
print(a); //3,6
