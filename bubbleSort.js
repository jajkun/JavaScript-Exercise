//bubble sort
function swap(first,second,item){
	var temp = item[first];
	item[first] = item[second];
	item[second] = temp;
}

function bubbleSort(item){
	var i,j;
	for( i=0;i<item.length;i++ ){
		//console.log("now the "+i+"th i ="+i);
		for(j=0;j<item.length;j++){
		//	console.log("now the "+j+"th j ="+j);
			if( item[i]<item[j]){
			//	console.log(item[i]+"<"+item[j]+";swap!");
				swap(j,i,item);
			}//if
		//	console.log(item[i]+"not <"+item[j]+"; do not swap!");
		}//j
	}//i
	return item;
}

a=[30,4,9,18];
bubbleSort(a);
console.log(a);
