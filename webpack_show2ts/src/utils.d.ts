/*
为utils.js提供类型声明
*/
declare let count: number;
declare let songName: string;
interface Point {
  x: number
  y: number
}
declare let position: Point;
declare function add(x: number, y: number): number;
declare function changeDirection(direction: 'up' | 'down' | 'left' | 'right'): void;
type FormatPoint = (point: Point) => void;
declare const formatPoint: FormatPoint;

// 目前还不需要导出接口和类型别名
export { count, songName, position, add, changeDirection, formatPoint };