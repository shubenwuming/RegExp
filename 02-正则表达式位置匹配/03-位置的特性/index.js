/**
 * 对于位置的理解，我们可以理解成空字符串'' 
 * 比如'hello'的字符串等价于如下的形式：'hello' == '' + h + '' + e + '' + l + '' + l + '' + o + '';
 * 也等价于'hello' == '' + '' + 'hello'
 */

//  因此可以把 /^hello$/ 写成 /^^hello$/
const res1 = /^^hello$/.test('hello');
console.log(res1);

// 字符间的位置可以写成多个
const res2 = /(?=he)^^he(?=\w)llo$\b\b$/.test("hello");
console.log(res2)