// var 会变量提升，就是全局声明的意思，如果没有在使用前赋值，类型/值就是undefined
// let 不存在变量提升
console.log(x)  //undefined
var x = 'apple'

console.log(y)  //ReferenceError: y is not defined
let y = 'banana'