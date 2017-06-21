
function indexOf(a,number){
	for(var i in a){
		if(number==a[i]){
			console.log(number+"is in index: "+i);
		}
	}
}//indexOf


indexOf([1,2,3,4],3);
console.log();
