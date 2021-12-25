/**
 * 分析：
 * 首先表示一个16进制的字符组可以是[0-9a-fA-F]
 * 其中字符可以出现3次或6次，故需要量词和分支
 */

const reg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
const str = '#ffaabb #333 #ggg';
console.log(str.match(reg));