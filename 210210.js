/**
 * @description Pattern 적용하는 법
 *
 * const pattern = ctx.createPattern(imgSource, 'repeat');
 * ctx.fillStyle = pattern;

 */

const drawImagePattern = () => {
  const canvas = document.querySelector('#pattern');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    let imgSource = new Image(20,20);
    imgSource.src = 'https://gradium.co.kr/wp-content/uploads/grapefruit-2.jpg';

    imgSource.onload = () => {
      const pattern = ctx.createPattern(imgSource, 'repeat-x');
      ctx.fillStyle = pattern;
      ctx.fillRect(0,0,100,100);
    };
  }
}
window.addEventListener('load', drawImagePattern);
