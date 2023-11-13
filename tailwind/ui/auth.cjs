'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-auth__container': parseTwdApply([
    'w-full',
    'md:rounded-xl',
    'md:shadow-md',
    'md:mx-5',
    'md:border border-vsph-tint-200 dark:border-vsph-dark-800',
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-auth__header': parseTwdApply([
    'my-4',
    'font-bold',
    'text-center text-3xl',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-auth__paragraph': parseTwdApply([
    'leading-[21px]',
    'text-center text-lg',
    'mb-6',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
  '.vsph-auth__oauth-button': parseTwdApply([
    'w-full min-h-[42px]',
    'relative',
    'border border-vsph-tint-200 dark:border-vsph-dark-800',
  ]),
  '.vsph-auth__google-oauth-button': parseTwdApply([
    'font-semibold',
    'bg-vsph-google-bg',
    'text-vsph-google-fg',
  ]),
  '.vsph-auth__facebook-oauth-button': parseTwdApply([
    'bg-vsph-facebook-bg',
    'text-vsph-facebook-fg',
  ]),
  '.vsph-auth__x-oauth-button': parseTwdApply([
    'bg-vsph-x-bg',
    'text-vsph-x-fg',
  ]),
  '.vsph-auth__separator': parseTwdApply([
    'border-vsph-tint-200 dark:border-vsph-dark-800',
  ]),
  '.vsph-auth__separator-text': parseTwdApply([
    'mx-5',
    'uppercase',
    'text-sm text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
  '.vsph-auth__link': parseTwdApply([
    'cursor-pointer',
    'text-vsph-tint-500',
    'font-medium',
    'hover:underline',
  ]),
  '.vsph-auth__input-label': parseTwdApply([
    'mb-1',
    'text-sm',
    'flex',
    'text-vsph-tint-400 dark:text-vsph-tint-400',
  ]),
  '.vsph-auth__input': parseTwdApply([
    'rounded-lg',
    'p-2.5 py-2',
    'shadow-sm',
    'border border-vsph-tint-100 dark:border-vsph-dark-700',
    'text-vsph-dark-800 dark:text-vsph-tint-300',
    'bg-vsph-light-100 dark:bg-vsph-dark-800',
    'focus:outline-none focus:ring-1 focus:ring-vsph-dark-900 dark:focus:ring-vsph-light-100',
    'placeholder:text-vsph-tint-300 dark:placeholder:text-vsph-tint-400',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-auth__input--invalid': parseTwdApply([
    'border',
    'text-vsph-red-200 dark:text-vsph-red-100',
    'focus:outline-none focus:ring-0',
    'placeholder:text-vsph-red-200 dark:placeholder:text-vsph-red-100',
    'border-vsph-red-200 dark:border-vsph-red-100',
  ]),
  '.vsph-auth__text--invalid': parseTwdApply([
    'text-vsph-red-200 dark:text-vsph-red-100',
  ]),
  '.vsph-auth__input-icon-container': parseTwdApply([
    'absolute top-1/2 -translate-y-1/2 right-1',
    'py-2.5 px-3',
    'flex items-center',
    'text-vsph-dark-800 dark:text-vsph-tint-300',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-auth__info-card-container': parseTwdApply([
    'rounded-md',
    'text-sm',
    'p-3',
    'leading-[18px]',
    'font-medium',
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
    'text-vsph-dark-700 dark:text-vsph-tint-300',
  ]),
  '.vsph-auth__form-out-text': parseTwdApply([
    'text-sm',
    'mt-1',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-auth__password-strenght-meter__colors': parseTwdApply([
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
  ]),
  '.vsph-auth__password-strenght-meter__bg': parseTwdApply([
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
  ]),
  '.vsph-auth__checkbox': parseTwdApply([
    'form-checkbox',
    'rounded',
    'w-[18px] h-[18px]',
    'bg-vsph-light-100 dark:bg-vsph-dark-800',
    'cursor-pointer',
    'border border-vsph-tint-100 dark:border-vsph-dark-700',
    'focus:outline-none focus:ring-1 focus:ring-vsph-dark-900 dark:focus:ring-vsph-light-100',
    'focus:ring-offset-vsph-light-100 dark:focus:ring-offset-vsph-dark-800',
    'focus:checked:bg-vsph-tint-500 checked:bg-vsph-tint-500 hover:checked:bg-vsph-tint-500',
    'checked:dark:bg-vsph-tint-500 checked:border-none',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-auth__single-select-spinner-list__container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-full max-h-[200px]',
    'mb-1 p-1.5',
    'rounded-md',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
    'border dark:border-vsph-dark-700',
    'overflow-y-auto',
    'scrollbar-rounded scrollbar-thumb:bg-vsph-tint-400',
  ]),
  '.vsph-auth__single-select-spinner-list__element': parseTwdApply([
    'rounded-md',
    'px-2 py-1 pb-1.5',
    'leading-5',
    'w-full',
    'text-start',
  ]),
  '.vsph-auth__top-nav-button': parseTwdApply([
    'text-sm',
    'font-medium',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
    'hover:bg-vsph-tint-100 dark:hover:bg-vsph-dark-800',
    'px-1.5 py-1',
    'rounded-md',
  ]),
  '.vsph-auth__stepper-container': parseTwdApply([
    'flex items-center',
    'space-x-2.5',
  ]),
  '.vsph-auth__stepper-number': parseTwdApply([
    'flex items-center justify-center shrink-0',
    'w-8 h-8',
    'border border-vsph-tint-500',
    'rounded-full',
    'text-vsph-tint-500 font-bold',
  ]),
  '.vsph-auth__stepper-header': parseTwdApply(['font-bold', 'mb-1']),
  '.vsph-auth__stepper-paragraph': parseTwdApply([
    'text-sm leading-[17px]',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
};
