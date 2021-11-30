import {onLoadEvent, addApparanceAnimationToLoader} from './animate-loader';
import {addDinoAnimation} from './animate-dino-container';
import {viewportMd} from '../const/const';

const loader = document.querySelector('.loader');
const containerDino = document.querySelector('.wrapper-content__dino');

export const addListeners = () => {
  addApparanceAnimationToLoader();
  if (window.matchMedia(viewportMd).matches) {
    loader.addEventListener('click', onLoadEvent);
    containerDino.addEventListener('click', addDinoAnimation);
  } else {
    document.addEventListener('keydown', onLoadEvent);
  }
};
