/*
需要显示指定类型
*/
interface IdFunc<T>{
  id: (val: T) => T
  ids: ()=>T[]
}
const obj: IdFunc<number> = {
  id: function(val){
    return val;
  },
  ids: function(){
    return [1, 2, 3];
  }
}

/*
数组就是一个泛型接口
*/