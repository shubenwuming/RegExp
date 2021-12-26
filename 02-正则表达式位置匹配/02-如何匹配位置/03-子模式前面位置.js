/**
 * (?=p) 其中p是一个子模式， 即p前面的位置
 * (?!p) 是(?=p)的反面，即扣除(?=p)的位置
 */


const res1 = 'hello'.replace(/(?=l)/g, '#');
console.log('res1: ', res1); // he#l#lo

const res2 = 'hello'.replace(/(?!l)/g, '#');
console.log('res2: ', res2); // #h#ell#o#


