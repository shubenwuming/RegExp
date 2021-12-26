/**
 * \b 是单词边界，具体就是\w和\W之间的位置、\w与^之间的位置、\w与$之间的位置
 * \B 是非单词边界，扣除单词边界的位置，剩下的都是/b的
 */

// 文件名为'[JS] Lesson_01.mp4'中的\b 与 \B
const res1 = '[JS] Lesson_01.mp4'.replace(/\b/g, '#')
console.log(res1)  // [#JS#] #Lesson_01#.#mp4#

const res2 = '[JS] Lesson_01.mp4'.replace(/\B/g, '#')
console.log(res2)  // #[J#S]# L#e#s#s#o#n#_#0#1.m#p#4




