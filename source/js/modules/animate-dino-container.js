import {addTextAnimation} from './animate-content-blocks';
const containerDino = document.querySelector('.wrapper-content__dino');

export const addDinoAnimation = (evt) => {
  if ((evt.target.tagName !== 'svg' && evt.target.tagName !== 'path') || ((evt.target.closest('svg') && (evt.target.closest('svg').classList.length !== 0)))) {
    containerDino.classList.remove('wrapper-container__in');
    addTextAnimation();
  }
};
