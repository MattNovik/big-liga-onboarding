import {onLoadEvent, addApparanceAnimationToLoader} from './animate-loader';
import {viewportLg} from '../const/const';

const loader = document.querySelector('.loader');

export const addListeners = () => {
  addApparanceAnimationToLoader();
  if (window.matchMedia(viewportLg).matches) {
    loader.addEventListener('click', onLoadEvent);
  } else {
    document.addEventListener('keydown', onLoadEvent);
  }
};
