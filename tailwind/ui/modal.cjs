'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-modal__container': parseTwdApply([
    'fixed',
    'top-0 left-0',
    'w-full min-h-screen h-screen',
    'z-50',
  ]),
  '.msph-modal__background': parseTwdApply([
    'absolute',
    'w-full h-full',
    'bg-msph-black bg-opacity-75',
  ]),
  '.msph-modal__window-container': parseTwdApply([
    'absolute',
    'w-full h-full',
    'flex justify-center',
    'pt-3 md:pt-0 md:mt-28 px-3',
    'shadow-md',
  ]),
  '.msph-modal__window-wrapper': parseTwdApply([
    'relative',
    'w-full h-fit',
    'rounded-xl',
    'pt-8 pb-6 px-6 sm:px-8',
    'border border-msph-tint-500 dark:border-msph-dark-800',
    'bg-msph-light-300 dark:bg-msph-dark-900',
    'text-msph-dark-900 dark:text-msph-light-100',
  ]),
  '.msph-modal__window-wrapper--devastate': parseTwdApply([
    'border-msph-orange-100 dark:border-msph-orange-100',
  ]),
  '.msph-modal__window-notch': parseTwdApply([
    'absolute',
    'top-0 left-[50%] -translate-x-[50%]',
    'rounded-b-md',
    'h-[10px] w-[80px]',
    'bg-msph-tint-500',
  ]),
  '.msph-modal__window-notch--devastate': parseTwdApply(['bg-msph-orange-100']),
  '.msph-modal__window-x-button': parseTwdApply([
    'absolute',
    'top-[14px] right-[14px]',
    'p-1',
    'flex',
  ]),
  '.msph-modal__window-header': parseTwdApply([
    'text-3xl text-center',
    'font-bold',
    'mb-4',
  ]),
  '.msph-modal__window-paragraph': parseTwdApply([
    'leading-5',
    'sm:max-w-[80%]',
    'text-center',
    'mx-auto',
    'text-msph-tint-400 dark:text-msph-tint-300',
  ]),
  '.msph-modal__window-buttons-container': parseTwdApply([
    'flex justify-center',
  ]),
  '.msph-modal__close-button': parseTwdApply([
    'msph-button msph-button--small',
    'min-h-[34px] min-w-[72px]',
    'flex justify-center items-center',
    'bg-msph-transparent',
    'shadow-none',
    'border border-msph-tint-400 dark:border-msph-tint-200',
    'text-msph-tint-400 dark:text-msph-tint-200',
  ]),
  '.msph-modal__devastate-button': parseTwdApply([
    'msph-button msph-button--small',
    'min-h-[34px] min-w-[72px]',
    'flex justify-center items-center',
    'bg-msph-transparent',
    'shadow-none',
    'bg-msph-orange-100',
    'text-msph-light-100',
  ]),
  '.msph-captcha-modal__skeleton-loader': parseTwdApply([
    'absolute',
    'w-full h-full',
    'bg-msph-tint-100 dark:bg-msph-dark-800',
    'animate-pulse',
    'rounded-md',
  ]),
};
