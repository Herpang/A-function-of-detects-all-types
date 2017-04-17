//想着写一个可以检测所有数据类型的函数
// by Herpang
var a = 123,
	b = 'test',
	c = true,
	d = null,
	e,  // undefind
	f = {},
	g = [],
	h = /\d/,  //正则
	i = function(){};

function testData (option) { //完美准确的识别我们能见到的数据类型
	var xx = Object.prototype.toString.call(option);
	console.log(xx);
}
testData (a);
testData (b);
testData (c);
testData (d);
testData (e);
testData (f);
testData (g);
testData (h);
testData (i);
