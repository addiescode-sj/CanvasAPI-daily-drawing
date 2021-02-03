/**
 * @description 사각형 그리는 법
 * ctx.fillRect(x, y, width, height);
 * 
 * @description fillStyle로 컬러,그라디언트,패턴 채우는 법
 * 
 * 참고링크: https://developer.mozilla.org/en-us/docs/Web/API/CanvasRenderingContext2D/fillStyle
 * color: color코드 
 * 
 * gradient: 
 * 
 * let gradient = context.createLinearGradient(x0, y0, x1, y1);
 * gradient.addColorStop(offset, color);
 * 
 * pattern: 
 * 
 *  let pattern = context.createPattern();
 * 
 *  pattern.setTransform( SVGMatrix or DOMMatrix object)
 * 
 */

const drawRect = () => {
  const canvas = document.querySelector('#beginner-rect');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(241, 169, 160)';
    ctx.fillRect(20, 20, 50, 50);

    ctx.fillStyle = 'rgba(246, 71, 71, 0.3)';
    ctx.fillRect(20, 30, 50, 50);
  }
}

window.addEventListener('load', drawRect);