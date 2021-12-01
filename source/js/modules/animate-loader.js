import {addSvgAnimation, addEnterClickAnimation, addContentAnimation} from './animate-content-blocks';
import {isEnterEvent} from '../utils/utils';
import {viewportLg} from '../const/const';
import {addDinoAnimation} from './animate-dino-container';

const loader = document.querySelector('.loader');
const containerDino = document.querySelector('.wrapper-content__dino');
const header = document.querySelector('.header');

const addApparanceAnimationToLoader = () => {
  loader.classList.add('loader--active');
  setTimeout(addSvgAnimation, 0);
  setTimeout(addEnterClickAnimation, 1500);
};

const onLoadEvent = (evt) => {
  if (window.matchMedia(viewportLg).matches && (evt.target.tagName !== 'svg' && evt.target.tagName !== 'path')) {
    loader.classList.add('loader--out');
    containerDino.classList.add('wrapper-container__in');
    containerDino.addEventListener('click', addDinoAnimation);
    header.addEventListener('click', addDinoAnimation);
    loader.removeEventListener('click', onLoadEvent);
  } else {
    if (isEnterEvent(evt)) {
      loader.classList.add('loader--out');
      addContentAnimation();
      document.removeEventListener('keydown', onLoadEvent);
    }
  }
};

export {onLoadEvent, addApparanceAnimationToLoader};
