/*
  Import css
*/
require('typeface-montserrat');
require('./main.scss');

/*
  popup
*/
const HIDE_CSS_CLASS = 'd-none';
const hideEl = (el) => el.classList.add(HIDE_CSS_CLASS);
const showEl = (el) => el.classList.remove(HIDE_CSS_CLASS);

const popupFunc = (btn, form, mask) => {
  hideEl(form);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showEl(form);
  });
  mask.addEventListener('click', (e) => {
    e.preventDefault();
    hideEl(form);
  })
};

const init = () => {
  document.body.classList.add('js');
  const FORM_BTN_SELECTOR = '.js-book-form';
  const FORM_SELECTOR = '.js-form';
  const MASK_SELECTOR = '.mask';
  popupFunc(
    document.querySelector(FORM_BTN_SELECTOR),
    document.querySelector(FORM_SELECTOR),
    document.querySelector(MASK_SELECTOR)
  );
}

(() => {
  // init();
})();
