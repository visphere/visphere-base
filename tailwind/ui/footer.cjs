'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-footer__container': parseTwdApply([
    'px-5 md:px-5 lg:px-10 pt-5 md:pt-20 pb-10',
    'md:border-t border-t-msph-tint-200 dark:border-t-msph-dark-800',
    'bg-msph-light-300 dark:bg-msph-dark-900',
    'text-msph-dark-900 dark:text-msph-light-100',
  ]),
  '.msph-footer__wrapper': parseTwdApply([
    'px-0 lg:px-8',
    'msph-safe-container',
  ]),
  '.msph-footer__select-list-button': parseTwdApply([
    'border border-msph-tint-300 dark:border-msph-dark-700',
    'px-2.5 py-1.5',
    'rounded-lg',
    'flex items-center',
    'font-medium dark:font-normal',
  ]),
  '.msph-footer__select-list-container': parseTwdApply([
    'absolute',
    'w-max max-h-[200px]',
    'mb-1 p-1.5',
    'border border-msph-tint-300 dark:border-msph-dark-700',
    'rounded-lg',
    'flex flex-col gap-1',
    'overflow-y-auto',
    'font-medium dark:font-normal',
  ]),
  '.msph-footer__select-list-element': parseTwdApply([
    'flex items-center',
    'rounded-lg',
    'w-full',
    'cursor-pointer',
    'p-1 pb-1.5 px-2',
    'hover:bg-msph-tint-200 dark:hover:bg-msph-dark-700',
  ]),
  '.msph-footer__select-list-element--active': parseTwdApply([
    'bg-msph-tint-500',
    'text-msph-light-100',
    'pointer-events-none',
  ]),
  '.msph-footer__link': parseTwdApply([
    'hover:underline',
    'block',
    'leading-[27px]',
  ]),
  '.msph-copy-footer__container': parseTwdApply([
    'flex flex-col lg:flex-row',
    'justify-center md:justify-between items-center',
  ]),
  '.msph-copy-footer__wrapper': parseTwdApply([
    'flex justify-center lg:justify-start',
  ]),
  '.msph-copy-footer__rights': parseTwdApply([
    'flex flex-col md:flex-row',
    'gap-y-2 md:gap-y-0 gap-x-7',
    'text-sm',
    'font-light',
  ]),
  '.msph-copy-footer__buttons': parseTwdApply(['mt-5 lg:mt-0']),
};
