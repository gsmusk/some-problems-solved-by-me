let w = 'ab';
let w2 = [w[0], w[1]];
let rf = [];
let s = 'abxaba';
let s2 = [];
let r1 = [];
let r2 = [];

for (var i = 0; i < s.length; i++) {
	s2.push(s[i]);
}
var finishedFromS = 0;
s2.forEach((cur_s, i_s) => {
	var current = cur_s;

	for (var i = i_s + 1; i < s.length; i++) {
		if (current.length < w2.length) {
			current = current + s[i];
		}
	}
	if (current.length == w.length) {
		if (current == w) {
			r1.push(i_s);
		}
	}
	
});
s2.forEach((cur_s, i_s) => {
	w2.forEach(function (cur_w, i_w) {
		if (cur_w == cur_s) {
			if(!r1.includes(i_s)) {
				if (i_s != 0) {
					if (!r1.includes(i_s - w.length + 1)) {
						r2.push(i_s);
					}
				}
			};
		}
	});
});
r1.forEach(cur => {
	rf.push(cur)
});
r2.forEach(cur => {
	rf.push(cur)
});
console.log(rf);