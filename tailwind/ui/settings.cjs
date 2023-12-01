'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-settings__container': parseTwdApply([
    'overflow-y-auto',
    'overflow-x-hidden',
    'h-screen',
    'scrollbar-rounded',
    'flex-grow',
  ]),
  '.vsph-settings__navbar-container': parseTwdApply([
    'flex flex-shrink-0 basis-[260px] justify-end',
    'scrollbar-thumb:bg-vsph-tint-100 dark:scrollbar-thumb:bg-vsph-dark-800',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
  ]),
  '.vsph-settings__content-container': parseTwdApply([
    'flex-shrink basis-[720px]',
    'scrollbar-thumb:bg-vsph-tint-300 dark:scrollbar-thumb:bg-vsph-tint-100',
    'bg-vsph-light-200 dark:bg-vsph-dark-850',
  ]),
  '.vsph-settings__content-wrapper': parseTwdApply([
    'w-[720px] h-fit',
    'rounded-lg',
    'my-12 ms-4',
    'p-6',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
  ]),
  '.vsph-settings__nav-paragraph': parseTwdApply([
    'text-sm',
    'ms-2.5 mb-0.5',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__nav-button': parseTwdApply([
    'flex items-center justify-between w-full',
    'px-2.5 py-2',
    'mb-1',
    'rounded-lg',
    'text-left max-w-[220px] leading-[18px]',
    'hover:bg-vsph-light-200 hover:dark:bg-vsph-dark-800',
  ]),
  '.vsph-settings__nav-button--logout': parseTwdApply([
    'text-vsph-red-200 dark:text-vsph-red-100',
    'hover:text-vsph-light-100 hover:dark:text-vsph-light-100',
    'hover:bg-vsph-red-200 hover:dark:bg-vsph-red-100',
  ]),
  '.vsph-settings__nav-button--active': parseTwdApply([
    'bg-vsph-tint-500',
    'text-vsph-light-100',
    'hover:rounded-2xl',
    'transition-[border-radius] duration-300',
    'hover:bg-vsph-tint-500 hover:dark:bg-vsph-tint-500',
  ]),
  '.vsph-settings__separator': parseTwdApply([
    'mb-3 ms-2.5',
    'border-vsph-tint-200 dark:border-vsph-dark-750',
  ]),
};
