const str = '345678';

const res = str.replace(/(?!^)(?=(\d{3})+$)/g, ',');

console.log('res: ', res);