/**
 * @description path 그리는 법
 * 
 * path시작
 * ctx.beginPath();
 * 
 * 첫번째 시작 지점(anchor point)을 고른다.
 * ctx.moveTo(x,y 좌표); 
 * 
 * 직선을 그린다.
 * ctx.lineTo(x,y 좌표);
 * 
 * 해당 도형을 채운다.
 * ctx.fill();
 * 
 * 도형의 path를 골라 lineTo로 위치를 잡았으면, 스타일링을 시작해도 된다.
 * 
 * ctx.strokeStyle(`${컬러코드}`);
 * 
 * ctx.lineWidth = 5;
 * 
 * ctx.stroke();
 */

const drawStrokeTri = () => {
  const canvas = document.querySelector('#stroke-tri');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(30,30);
    ctx.lineTo(90,30);
    ctx.lineTo(60,60);
    ctx.lineTo(30,30);


    // context styling

    ctx.fillStyle = 'rgb(241, 169, 160)';
    ctx.strokeStyle = 'rgb(240, 52, 52)';

    ctx.lineWidth = 2;

    // fill and stroke

    ctx.fill();
    ctx.stroke();
  }
}
window.addEventListener('load', drawStrokeTri);
