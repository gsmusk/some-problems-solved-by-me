/**
	- 31 - 12 - 2018
	- Asked by Lyft
	- Solution by George s. Musk
	

	- Given a list of integers and a number K,
	 return which contiguous elements of the list sum to K And the following integers must be following to each other.
	 For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [4, 5] NOT [ [2,3,4], [4,5] ].


**/


//********* Start of solution **********//

let list = [1,2,3,4,5];
let k = 9;
let attemps = [];
let result = [];
list.forEach(function (cur, i) {
	var current = cur;
	var used = [cur];
	list.forEach(function(cur2, i2) {
		if (i2 != i && i < i2) {
			used.push(cur2);
			current = current + cur2;
			if (current == k) {
				result.push(used);
			}
			used = [];
			current = 0;
		}
	});

});
console.log(result);

//********* End of solution ***********//