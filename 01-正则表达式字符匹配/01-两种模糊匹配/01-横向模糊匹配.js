/**
 * 横向模糊匹配指的是，一个正则可匹配的字符串长度不是固定的的
 * 其实现方式是使用量词。比如{m,n},表示连续出现至最少m次，最多n次。
 */

//  /ab{2, 5}c/此正则表示匹配一个这样的字符串：第一个字符是a,接下来可以是2-5个b,最后是字符c
const reg = /ab{2,5}c/g;
const str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
console.log(str.match(reg));

