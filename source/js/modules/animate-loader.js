import {addSvgAnimation, addEnterClickAnimation} from './animate-content-blocks';
import {isEnterEvent} from '../utils/utils';
import {viewportMd} from '../const/const';

const loader = document.querySelector('.loader');
const containerDino = document.querySelector('.wrapper-content__dino');

const addApparanceAnimationToLoader = () => {
  loader.classList.add('loader--active');
  setTimeout(addSvgAnimation, 1);
  setTimeout(addEnterClickAnimation, 1500);
};

const onLoadEvent = (evt) => {
  if (window.matchMedia(viewportMd).matches && (evt.target.tagName !== 'svg' && evt.target.tagName !== 'path')) {
    loader.classList.add('loader--out');
    loader.removeEventListener('click', onLoadEvent);
    containerDino.classList.add('wrapper-container__in');
  } else {
    if (isEnterEvent(evt)) {
      loader.classList.add('loader--out');
      document.removeEventListener('keydown', onLoadEvent);
    }
  }
};

export {onLoadEvent, addApparanceAnimationToLoader};
