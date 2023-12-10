'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-body-container': parseTwdApply([
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
    'text-vsph-dark-900 dark:text-vsph-light-100',
    'overflow-x-hidden',
  ]),
  '.vsph-safe-container': parseTwdApply([
    'mx-auto',
    'max-w-[1260px]',
    'w-full',
  ]),
  '.vsph-button': parseTwdApply([
    'rounded-lg',
    'p-2.5 py-2',
    'block',
    'cursor-pointer',
    'flex justify-center items-center',
    'shadow-md',
    'transition-[border-radius] duration-300',
    'hover:rounded-2xl hover:disabled:rounded-lg',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-button--primary': parseTwdApply([
    'w-full',
    'text-center',
    'min-h-[40px]',
    'bg-vsph-tint-500',
    'text-vsph-light-100',
  ]),
  '.vsph-button--loading': parseTwdApply([
    'rounded-2xl hover:rounded-2xl',
    'hover:disabled:rounded-2xl',
  ]),
  '.vsph-button--secondary': parseTwdApply([
    'w-full',
    'text-center',
    'min-h-[40px]',
    'bg-vsph-dark-800 dark:bg-vsph-light-300',
    'text-vsph-light-100 dark:text-vsph-dark-900',
  ]),
  '.vsph-button--danger': parseTwdApply([
    'bg-vsph-red-200 dark:bg-vsph-red-100',
  ]),
  '.vsph-button--danger--outline': parseTwdApply([
    'border',
    'border-vsph-red-200 dark:border-vsph-red-100',
    'text-vsph-red-200 dark:text-vsph-red-100',
    'bg-vsph-transparent',
  ]),
  '.vsph-button--small': parseTwdApply([
    'text-center',
    'text-sm',
    'shadow-md',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-button--fit': parseTwdApply(['w-fit', 'px-8']),
  '.vsph-info-card__container': parseTwdApply([
    'rounded-md',
    'text-sm',
    'p-3',
    'leading-[18px]',
    'font-medium',
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
    'text-vsph-dark-700 dark:text-vsph-tint-300',
  ]),
  '.vsph-input__label': parseTwdApply([
    'mb-1',
    'text-sm',
    'flex',
    'text-vsph-tint-400 dark:text-vsph-tint-400',
  ]),
  '.vsph-input': parseTwdApply([
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
  '.vsph-input--invalid': parseTwdApply([
    'border',
    'text-vsph-red-200 dark:text-vsph-red-100',
    'focus:outline-none focus:ring-0',
    'placeholder:text-vsph-red-200 dark:placeholder:text-vsph-red-100',
    'border-vsph-red-200 dark:border-vsph-red-100',
  ]),
  '.vsph-input__text--invalid': parseTwdApply([
    'text-vsph-red-200 dark:text-vsph-red-100',
  ]),
  '.vsph-input__icon-container': parseTwdApply([
    'absolute top-1/2 -translate-y-1/2 right-1',
    'py-2.5 px-3',
    'flex items-center',
    'text-vsph-dark-800 dark:text-vsph-tint-300',
    'disabled:cursor-not-allowed',
  ]),
  '.vsph-password-strenght-meter__colors': parseTwdApply([
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
  ]),
  '.vsph-password-strenght-meter__bg': parseTwdApply([
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
  ]),
  '.vsph-checkbox': parseTwdApply([
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
  '.vsph-top-nav-button': parseTwdApply([
    'text-sm',
    'font-medium',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
    'hover:bg-vsph-tint-100 dark:hover:bg-vsph-dark-800',
    'px-1.5 py-1',
    'rounded-md',
  ]),
};
