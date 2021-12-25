/**
 * 通过管道符'|'分隔，表示几个子模式中的一种
 * 比如/p1|p2|p3/,p1、p2、p3是子模式
 * 注意一点：有冲突时，会先匹配位于前面的子模式，简化记忆 if(p1){}else if(p2){}else{}, 匹配到p1就不再去匹配p2、p3了
 */

// 示例1：
const reg = /good|nice/g;
const str = 'good idea, try nice.';
console.log(str.match(reg));

// 示例2：
const reg1 = /good|goodBye/g;
const reg2 = /goodBye|good/g;
const str1 = 'good goodBye';
console.log(str1.match(reg1));
console.log(str1.match(reg2));

