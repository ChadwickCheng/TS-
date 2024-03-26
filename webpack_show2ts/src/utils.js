let count = 10;
let songName = '云雀';
let position = {
  x: 0,
  y: 0,
};

function add(x, y){
  return x+y;
}

function changeDirection(direction){
  console.log('changeDirection: ', direction);
}

const formatPoint = point => {
  console.log('current point: ', point);
}

export {
  count,
  songName,
  position,
  add,
  changeDirection,
  formatPoint,
}