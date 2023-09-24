'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-auth__container': parseTwdApply([
    'w-full',
    'md:rounded-xl',
    'md:shadow-md',
    'md:mx-5',
    'border border-msph-tint-200 dark:border-msph-dark-800',
    'bg-msph-light-300 dark:bg-msph-dark-900',
    'text-msph-dark-900 dark:text-msph-light-100',
  ]),
  '.msph-auth__header': parseTwdApply([
    'my-4',
    'font-bold',
    'text-center text-3xl',
    'text-msph-dark-900 dark:text-msph-light-100',
  ]),
  '.msph-auth__paragraph': parseTwdApply([
    'leading-[21px]',
    'text-center text-lg',
    'mb-6',
    'text-msph-tint-400 dark:text-msph-tint-300',
  ]),
  '.msph-auth__google-oauth-button': parseTwdApply([
    'msph-button',
    'justify-start',
    'border border-msph-tint-200 dark:border-msph-dark-800',
    'font-medium',
    'bg-msph-google-bg',
    'text-msph-google-fg',
  ]),
  '.msph-auth__facebook-oauth-button': parseTwdApply([
    'msph-button',
    'justify-start',
    'border border-msph-tint-200 dark:border-msph-dark-800',
    'bg-msph-facebook-bg',
    'text-msph-facebook-fg',
  ]),
  '.msph-auth__x-oauth-button': parseTwdApply([
    'msph-button',
    'justify-start',
    'border border-msph-tint-200 dark:border-msph-dark-800',
    'bg-msph-x-bg',
    'text-msph-x-fg',
  ]),
  '.msph-auth__separator': parseTwdApply([
    'border-msph-tint-200 dark:border-msph-dark-800',
  ]),
  '.msph-auth__separator-text': parseTwdApply([
    'mx-5',
    'uppercase',
    'text-sm text-msph-tint-400 dark:text-msph-tint-300',
  ]),
  '.msph-auth__link': parseTwdApply([
    'cursor-pointer',
    'text-msph-tint-500',
    'font-medium',
    'hover:underline',
  ]),
  '.msph-auth__input-label': parseTwdApply([
    'mb-1',
    'text-sm',
    'flex',
    'text-msph-tint-400 dark:text-msph-tint-400',
  ]),
  '.msph-auth__input': parseTwdApply([
    'rounded-lg',
    'p-2.5 py-2',
    'shadow-sm',
    'border border-msph-tint-100 dark:border-msph-dark-700',
    'text-msph-dark-800 dark:text-msph-tint-300',
    'bg-msph-light-100 dark:bg-msph-dark-800',
    'focus:outline-none focus:ring-1 focus:ring-msph-dark-900 dark:focus:ring-msph-light-100',
    'placeholder:text-msph-tint-300 dark:placeholder:text-msph-tint-400',
    'disabled:cursor-not-allowed',
  ]),
  '.msph-auth__input--invalid': parseTwdApply([
    'border',
    'text-msph-red-200 dark:text-msph-red-100',
    'focus:outline-none focus:ring-0',
    'placeholder:text-msph-red-200 dark:placeholder:text-msph-red-100',
    'border-msph-red-200 dark:border-msph-red-100',
  ]),
  '.msph-auth__text--invalid': parseTwdApply([
    'text-msph-red-200 dark:text-msph-red-100',
  ]),
  '.msph-auth__input-icon-container': parseTwdApply([
    'absolute top-1/2 -translate-y-1/2 right-1',
    'py-2.5 px-3',
    'flex items-center',
    'text-msph-dark-800 dark:text-msph-tint-300',
    'disabled:cursor-not-allowed',
  ]),
  '.msph-auth__info-card-container': parseTwdApply([
    'rounded-md',
    'text-sm',
    'p-3',
    'leading-[18px]',
    'font-medium',
    'bg-msph-tint-100 dark:bg-msph-dark-800',
    'text-msph-dark-700 dark:text-msph-tint-300',
  ]),
  '.msph-auth__form-out-text': parseTwdApply([
    'text-sm',
    'mt-1',
    'text-msph-tint-300 dark:text-msph-tint-400',
  ]),
  '.msph-auth__password-strenght-meter__colors': parseTwdApply([
    'bg-msph-tint-100 dark:bg-msph-dark-800',
  ]),
  '.msph-auth__password-strenght-meter__bg': parseTwdApply([
    'bg-msph-light-300 dark:bg-msph-dark-900',
  ]),
  '.msph-auth__checkbox': parseTwdApply([
    'form-checkbox',
    'rounded',
    'w-[18px] h-[18px]',
    'bg-msph-light-100 dark:bg-msph-dark-800',
    'cursor-pointer',
    'border border-msph-tint-100 dark:border-msph-dark-700',
    'focus:outline-none focus:ring-1 focus:ring-msph-dark-900 dark:focus:ring-msph-light-100',
    'focus:ring-offset-msph-light-100 dark:focus:ring-offset-msph-dark-800',
    'focus:checked:bg-msph-tint-500 checked:bg-msph-tint-500 hover:checked:bg-msph-tint-500',
    'checked:dark:bg-msph-tint-500 checked:border-none',
    'disabled:cursor-not-allowed',
  ]),
  '.msph-auth__single-select-spinner-list__container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-full max-h-[200px]',
    'mb-1 p-1.5',
    'rounded-md',
    'bg-msph-light-100 dark:bg-msph-dark-900',
    'border dark:border-msph-dark-700',
    'overflow-y-auto',
    'scrollbar-rounded scrollbar-thumb:bg-msph-tint-400',
  ]),
  '.msph-auth__single-select-spinner-list__element': parseTwdApply([
    'rounded-md',
    'px-2 py-1 pb-1.5',
    'leading-5',
    'w-full',
    'text-start',
  ]),
  '.msph-auth__top-nav-button': parseTwdApply([
    'text-sm',
    'font-medium',
    'text-msph-tint-400 dark:text-msph-tint-300',
    'hover:bg-msph-tint-100 dark:hover:bg-msph-dark-800',
    'px-1.5 py-1',
    'rounded-md',
  ]),
};
