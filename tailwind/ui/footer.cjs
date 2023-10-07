'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-footer__container': parseTwdApply([
    'px-5 md:px-5 lg:px-10 pt-5 md:pt-20 pb-10',
    'md:border-t border-t-vsph-tint-200 dark:border-t-vsph-dark-800',
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-footer__wrapper': parseTwdApply([
    'px-0 lg:px-8',
    'vsph-safe-container',
  ]),
  '.vsph-footer__select-list-button': parseTwdApply([
    'border border-vsph-tint-300 dark:border-vsph-dark-700',
    'px-2.5 py-1.5',
    'rounded-lg',
    'flex items-center',
    'font-medium dark:font-normal',
  ]),
  '.vsph-footer__select-list-container': parseTwdApply([
    'absolute',
    'w-max max-h-[200px]',
    'mb-1 p-1.5',
    'border border-vsph-tint-300 dark:border-vsph-dark-700',
    'rounded-lg',
    'flex flex-col gap-1',
    'overflow-y-auto',
    'font-medium dark:font-normal',
  ]),
  '.vsph-footer__select-list-element': parseTwdApply([
    'flex items-center',
    'rounded-lg',
    'w-full',
    'cursor-pointer',
    'p-1 pb-1.5 px-2',
    'hover:bg-vsph-tint-200 dark:hover:bg-vsph-dark-700',
  ]),
  '.vsph-footer__select-list-element--active': parseTwdApply([
    'bg-vsph-tint-500',
    'text-vsph-light-100',
    'pointer-events-none',
  ]),
  '.vsph-footer__link': parseTwdApply([
    'hover:underline',
    'block',
    'leading-[27px]',
  ]),
  '.vsph-copy-footer__container': parseTwdApply([
    'flex flex-col lg:flex-row',
    'justify-center md:justify-between items-center',
  ]),
  '.vsph-copy-footer__wrapper': parseTwdApply([
    'flex justify-center lg:justify-start',
  ]),
  '.vsph-copy-footer__rights': parseTwdApply([
    'flex flex-col md:flex-row',
    'gap-y-2 md:gap-y-0 gap-x-7',
    'text-sm',
    'font-light',
  ]),
  '.vsph-copy-footer__buttons': parseTwdApply(['mt-5 lg:mt-0']),
};
