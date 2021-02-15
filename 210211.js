/**
 * @description Smile Face 만들기
 *
 * arc는 x,y에 center되어있고 radius 값의 너비를 가지는 원을 만든다.
 *
 * ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
 */

const drawSmileFace = () => {
  const canvas = document.querySelector('#smiley-face');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    //Outer circle

    ctx.beginPath();
    ctx.arc(75,75, 50, 0, Math.PI * 2);

    // mouth

    ctx.moveTo(110, 75);
    ctx.arc(75,75,35,0,Math.PI,false);

    // eyes

    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI * 2);

    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI * 2);

    //style

    ctx.strokeStyle = 'rgb(240, 52, 52)';
    ctx.stroke();
    };
  }
window.addEventListener('load', drawSmileFace);
