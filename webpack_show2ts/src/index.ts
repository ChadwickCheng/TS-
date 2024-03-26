import {count, songName, add} from './utils'

type Person = {
  name: string
  age: number
}

let p: Partial<Person> = {
  name: 'John'
}
// console.log('项目启动');
console.log('来自js的count: ', count);
console.log('来自js的songName: ', songName);
console.log('来自js的add: ', add(1, 2));