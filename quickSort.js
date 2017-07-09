function swap(first,second,item){
	var temp = item[first];
	item[first] = item[second];
	item[second] = temp;
}

//Quick sort
function partition(item,il,ir){
	var index=Math.floor((il+ir)/2);
	var pivot = item[index];
  	//console.log("pivot is"+pivot);

  	while( il<ir ){
    //console.log("il "+il+" < "+"ir "+ir);
    //console.log("now il,pivot,ir is:"+item[il]+pivot+item[ir]);
		while( item[il]<pivot ){
      		//console.log("while "+item[il]+" < "+pivot);
			il++;
      		//console.log("now il is "+il);
		}
		while( item[ir]>pivot ){
      		//console.log("while "+item[ir]+" > "+pivot);
			ir--;
      		//console.log("now ir is"+ir);
		}
		if( il<ir ){
			//console.log("now change left pos "+il+" th item "+item[il]+" with right pos"+ir+" th item "+item[ir]);
			swap(il,ir,item);
			if( il===index ){
				index = ir;
			}else if( ir===index ){
				index = il;
			}
      		//console.log("now il,pivot,ir is:"+il+"th "+item[il]+" "+pivot+" "+item[ir]+"| "+item);
		}//inner if
		return index;
	}//outter while
	return il;
}

function quickSort(item,right){
	var il=0;
	var index;
	if( item.length>1 ){

		index = partition(item,il,right);

		if( il<index-1 ){
			quickSort(item,il,index-1);
		}
		if( index+1<right ){
			quickSort(item,index,right);
		}
		return item;
	}//if
}
a=[2,6,5,3,9];
console.log("orignial array is "+a);
quickSort(a,a.length-1);
console.log("now array is "+a);
