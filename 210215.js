/**
 * @description 직선그리기 : moveTo로 anchor point 찍고, lineTo로 직선을 그린다.
 * 
 */

const drawStraightLine = () => {
  const canvas = document.querySelector('#straight');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'rgb(240, 52, 52)';

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.moveTo(10,10);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.moveTo(30,30);
    ctx.lineTo(200, 100);
    ctx.stroke();

  }
}
window.addEventListener('load', drawStraightLine);
