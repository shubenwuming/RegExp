/**
 * ^ 脱字符  匹配开头，在多行匹配中匹配行开头
 * $ 美元符  匹配结尾，在多行匹配中匹配行结尾
 */

// 我们把字符串的开头和结尾用'#'替换（位置可以替换成字符串的）
const res = 'hello'.replace(/^|$/g, '#');
console.log(res); // '#hello#'

// 多行匹配时，二者是行的概念,修饰符m多行匹配
const res1 = 'I\nlove\njs'.replace(/^|$/gm, '#');
console.log(res1);