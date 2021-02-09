/**
 * @description Gradient 적용하는 법
 * 
 * let gradient = createLinearGradient(${x시작점}, ${y시작점}, ${x끝값}, ${y끝값});
 * 
 * gradient.addColorStop(${0~1까지의 숫자}, ${컬러코드});
 * 
 */

const drawGradientCanvas = () => {
  const canvas = document.querySelector('#gradient');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    let gradient = ctx.createLinearGradient(20,0,150,0); 

    // Add three color stops

    gradient.addColorStop(0, 'rgb(241, 169, 160)');
    gradient.addColorStop(1, 'rgb(214, 69, 65)');

    // fill the style and draw
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 150, 100);
  }
}
window.addEventListener('load', drawGradientCanvas);
