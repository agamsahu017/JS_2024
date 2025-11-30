var map = function(arr, fn) {
    const result=[]
	for(let i in arr){
		result.push(fn(arr[i], Number(i)))
	}
	return result
};

----------------------------------

var map = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

----------------------------------

var filter = function(arr, fn) {
    const result = [];
	for(let i in arr){
		if(fn(arr[i], Number(i))){
			result.push(arr[i])
		}
	}
	return result
};
-----------------------------------

var filter = function(arr, fn) {
    const result = [];
	for(let i=0; i< arr.length; i++){
		if(fn(arr[i], Number(i))){
			result.push(arr[i])
		}
	}
	return result
};

-------------------------------------

const nums=[1,3,5,7]

function fn(acc, n){
	return acc+n
}

console.log(nums.reduce(fn,0))

----------------------------------------


var reduce = function(nums, fn, init) {
	let res=init
    for(let n of nums){
	res=fn(res, n)
	}
	return res
};
---------------------------------------------

var reduce = function(nums, fn, init) {
	let res=init
	nums.forEach((n)=>{
		res=fn(res, n)
	})
	
	return res
};

-----------------------------------------
