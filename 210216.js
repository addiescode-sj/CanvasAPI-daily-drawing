/**
 * @description 곡선그리기 : moveTo로 anchor point 찍고, lineTo로 직선을 그린다.
 * 
 * ctx.quadraticCurveTo(cpx, cpy, x, y);
 */

const drawDialogueShape = () => {
  const canvas = document.querySelector('#dialogue');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    ctx.strokeStyle = 'rgb(240, 52, 52)';

    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
  } else {
    return;
  }
}
window.addEventListener('load', drawDialogueShape);
