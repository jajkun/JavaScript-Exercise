//recursive
function factorialWithRecursive(number){
	if( number==1 ){
		return 1;
	}
	return number*factorialWithRecursive(number-1);
}

//loop
function factorialWithLoop(number){
	var result=1;
	if( number==0 || number==1 ){
		return 1;
	}else{
		for( var i=1;i<number;i++ ){
			result *= i; //result * i = result;
		}//for
		return result;
	}//else
	
}

var result = factorialWithRecursive(10);
//var result = factorialWithLoop(10);
console.log(result);
