/*
  Import css
*/
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

/*
  faqs
*/
const faqToggle = (btn, content, btnActiveClass) => {
  let hidden = true;
  hideEl(content);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (hidden) {
      showEl(content);
      btn.classList.add(btnActiveClass);
      hidden = false;
    } else {
      hideEl(content);
      btn.classList.remove(btnActiveClass);
      hidden = true;
    }
  })
}


const init = () => {
  // document.body.classList.add('js');
  // const FORM_BTN_SELECTOR = '.js-book-form';
  // const FORM_SELECTOR = '.js-form';
  // const MASK_SELECTOR = '.mask';
  // popupFunc(
  //   document.querySelector(FORM_BTN_SELECTOR),
  //   document.querySelector(FORM_SELECTOR),
  //   document.querySelector(MASK_SELECTOR)
  // );
  const FAQ_BUTTON_SELECTOR = '.faq-link';
  const FAQ_CONTENT_SELECTOR = '.faq-content';
  const FAQ_ACTIVE_CLASS = 'faq-link--active';
  faqToggle(
    document.querySelector(FAQ_BUTTON_SELECTOR),
    document.querySelector(FAQ_CONTENT_SELECTOR),
    FAQ_ACTIVE_CLASS
  )
}



(() => {
  init();
})();
