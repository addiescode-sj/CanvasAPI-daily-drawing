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
 */

const drawTri = () => {
  const canvas = document.querySelector('#beginner-tri');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);

    ctx.fillStyle = 'rgb(241, 169, 160)';
    ctx.fill();
  }
}
window.addEventListener('load', drawTri);
