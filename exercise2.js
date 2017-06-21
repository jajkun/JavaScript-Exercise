//找出元素 item 在给定数组 arr 中的位置 例: input:indexOf([ 1, 2, 3, 4 ], 3) output:2
function indexOf(a,number){
	for(var i in a){
		if(number==a[i]){
			console.log(number+"is in index: "+i);
		}
	}
}//indexOf
indexOf([1,2,3,4],3);

//计算给定数组 arr 中所有元素的总和 例：input: sum([ 1, 2, 3, 4 ]) output:10
function sum(array){
	var sum = 0;
	for(var i in array){
		sum+=array[i];
	}//for
	return sum;
}
console.log(sum([1,2,3]));
