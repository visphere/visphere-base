'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-modal__container': parseTwdApply([
    'absolute',
    'top-0 left-0',
    'w-full h-screen',
    'overflow-y-auto',
    'bg-vsph-modal-background',
    'z-50',
  ]),
  '.vsph-modal__window-container': parseTwdApply([
    'flex justify-center',
    'pt-3 md:pt-0 md:mt-28 md:mb-28 px-3',
  ]),
  '.vsph-modal__window-wrapper': parseTwdApply([
    'relative',
    'w-full h-fit',
    'shadow-md',
    'rounded-xl',
    'pt-8 pb-6 px-6 sm:px-8',
    'border border-vsph-tint-500 dark:border-vsph-dark-800',
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-modal__window-wrapper--devastate': parseTwdApply([
    'border-vsph-orange-100 dark:border-vsph-orange-100',
  ]),
  '.vsph-modal__window-wrapper--devastate-higher-precedence': parseTwdApply([
    'border-vsph-red-200 dark:border-vsph-red-200',
  ]),
  '.vsph-modal__window-notch': parseTwdApply([
    'absolute',
    'top-0 left-[50%] -translate-x-[50%]',
    'rounded-b-md',
    'h-[10px] w-[80px]',
    'bg-vsph-tint-500',
  ]),
  '.vsph-modal__window-notch--devastate': parseTwdApply(['bg-vsph-orange-100']),
  '.vsph-modal__window-notch--devastate-higher-precedence': parseTwdApply([
    'bg-vsph-red-200',
  ]),
  '.vsph-modal__window-x-button': parseTwdApply([
    'absolute',
    'top-[14px] right-[14px]',
    'p-1',
    'flex',
  ]),
  '.vsph-modal__window-header': parseTwdApply([
    'text-3xl text-center',
    'font-bold',
    'mb-4',
  ]),
  '.vsph-modal__window-paragraph': parseTwdApply([
    'leading-5',
    'text-center',
    'mx-auto',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
  '.vsph-modal__window-paragraph--large': parseTwdApply(['sm:max-w-[80%]']),
  '.vsph-modal__window-buttons-container': parseTwdApply([
    'flex justify-center',
  ]),
  '.vsph-modal__close-button': parseTwdApply([
    'vsph-button vsph-button--small',
    'min-h-[34px] min-w-[72px]',
    'flex justify-center items-center',
    'bg-vsph-transparent',
    'shadow-none',
    'border border-vsph-tint-400 dark:border-vsph-tint-200',
    'text-vsph-tint-400 dark:text-vsph-tint-200',
  ]),
  '.vsph-modal__button': parseTwdApply([
    'vsph-button vsph-button--small',
    'min-h-[34px] min-w-[72px]',
    'flex justify-center items-center',
    'bg-vsph-transparent',
    'shadow-none',
    'text-vsph-light-100',
  ]),
  '.vsph-modal__devastate-button--precedence-normal': parseTwdApply([
    'bg-vsph-orange-100',
  ]),
  '.vsph-modal__devastate-button--precedence-higher': parseTwdApply([
    'bg-vsph-red-200',
  ]),
  '.vsph-captcha-modal__skeleton-loader': parseTwdApply([
    'absolute',
    'w-full h-full',
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
    'animate-pulse',
    'rounded-md',
  ]),
};
