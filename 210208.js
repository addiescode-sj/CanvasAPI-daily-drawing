/**
 * @description text를 그리는 법
 * 
 * fillText(${텍스트}, ${x시작점}, ${y끝값});
 * 
 * storkeText(${텍스트}, ${x시작점}, ${y끝값});
 * 
 */

const drawText = () => {
  const canvas = document.querySelector('#text');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.font = '48px serif';

    ctx.fillStyle = 'rgb(241, 169, 160)';

    // stroke text

    ctx.strokeText('Hello', 0, 120);

    // fill text
    const timeOutFillText = setTimeout(()=>{
      ctx.fillText('Hello', 0, 120);
    }, 2000);

    timeOutFillText();
    clearTimeout(timeOutFillText);
  }
}
window.addEventListener('load', drawText);
