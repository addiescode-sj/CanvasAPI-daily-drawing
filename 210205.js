/**
 * @description bezierCurveTo로 베지어 곡선 그리는 법
 * 
 * path시작
 * 
 * ctx.beginPath();
 * 
 * 첫번째 시작 지점(anchor point)을 고른다.
 * 
 * ctx.moveTo(x,y 좌표); 
 * 
 * 베지어 곡선을 그린다.
 * 
 * c.bezierCurveTo(`${첫번째 control point x}, ${첫번째 control point y},  ${두번째 control point x}`,${두번째 control point y}, ${end point x}, ${end point y});
 * 
 * 해당 도형을 채운다.
 * 
 * ctx.fill();
 */

const drawFreeLineShape = () => {
  const canvas = document.querySelector('#free-line');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(10,30);
    ctx.bezierCurveTo(50,90,159,-30,200,30);
    ctx.lineTo(200,90);
    ctx.lineTo(10,90);
    ctx.closePath();

    // context styling

    ctx.fillStyle = 'rgb(241, 169, 160)';

    // fill

    ctx.fill();
  }
}
window.addEventListener('load', drawFreeLineShape);
