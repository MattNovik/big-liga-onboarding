import {addTextAnimation} from './animate-content-blocks';

const containerDino = document.querySelector('.wrapper-content__dino');

export const addDinoAnimation = () => {
  containerDino.classList.remove('wrapper-container__in');
  addTextAnimation();
};
