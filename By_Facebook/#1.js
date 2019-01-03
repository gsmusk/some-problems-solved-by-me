/*
- 3 / 1 / 2019
- asked by facebook
- solutions by George S. Musk

Given a string and a set of delimiters,
reverse the words in the string while maintaining the relative order of the delimiters.
For example, given "hello/world:here", return "here/world:hello"

*/




/******* Solution *********/



var separator = ['/', ':']
var s = 'hello/world:here';
var result = [];
var current = '';
var splitedSperator = [];
var finalString = '';
for (var i = 0; i < s.length; i++) {
	
	if (separator.includes(s[i])) {
		result.push(current);
		current = '';
		splitedSperator.push(s[i]);
	} else {
		current = current + s[i];
		if (i + 1 == s.length) {
			result.push(current);
		}	
	}
}

var last = [];
var x = 0;
for (var i = result.length - 1; i >= 0; i--) {
	if (splitedSperator[x] == undefined) {
		finalString = finalString + result[i];
	} else {
		finalString = finalString +result[i] + splitedSperator[x];
	}
	x++;
}
console.log(finalString);

/******* End of Solution *********/