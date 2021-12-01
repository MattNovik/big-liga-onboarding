const loader = document.querySelector('.loader');
const textContent = document.querySelector('h1');
const wrapperContent = document.querySelector('.wrapper-content');

export const addContentAnimation = () => {
  wrapperContent.classList.add('wrapper-content--active');
};

export const addSvgAnimation = () => {
  loader.querySelector('svg').classList.add('active');
};

export const addEnterClickAnimation = () => {
  loader.querySelectorAll('.loader__enter').forEach((element) => element.classList.remove('loader__enter--inactive'));
};

export const addTextAnimation = () => {
  textContent.classList.add('wrapper-content__text');
};
