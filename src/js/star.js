const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function getRandomValue(max){
  return Math.floor(Math.random() * max);
}

const style = ['style1', 'style2', 'style3'];
const opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity3'];
const twinkle = [
  'twinkle1',
  'twinkle1',
  'twinkle1',
  'twinkle2',
  'twinkle2',
  'twinkle3',
  'twinkle4',
];

const _s = getRandomValue(3);
const _o = getRandomValue(5);
const _t = getRandomValue(7);
const x = getRandomValue(windowWidth);
const y = getRandomValue(windowHeight);

const className = 'star ' + style[_s] + ' ' + opacity[_o] + ' ' + twinkle[_t];
const width = 'left: ' + x + 'px';
const height = 'top: ' + y + 'px';

export {className,height,width};