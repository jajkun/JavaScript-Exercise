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

//移除数组 arr 中的所有值与 item 相等的元素 例: input: remove([3,4,5],3); output: [4,5]
function remove(array,item){
	var newArr=[];
	array.forEach(function(e){
		if(e!=item){
			newArr.push(e);
		}
	});
	return newArr;
}

function removeFromArray(array,item){
	for(var i in array){
		if(array[i]==item){
			array.splice(i,1);
		}
	}
	return array;
}

var newArray = removeFromArray([3,4,5],3);
console.log(newArray);
