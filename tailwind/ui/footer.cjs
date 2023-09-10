'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph_footer__container': parseTwdApply([
    'p-5 md:p-5 lg:p-10',
    'border-t-2 border-gray-300 dark:border-gray-700',
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
  ]),
  '.msph_footer__select-list-button': parseTwdApply([
    'border border-gray-500',
    'px-2.5 py-1.5',
    'rounded-lg',
    'flex items-center',
    'font-medium dark:font-normal',
  ]),
  '.msph_footer__select-list-container': parseTwdApply([
    'absolute',
    'w-max max-h-[200px]',
    'mb-1 p-1.5',
    'border border-gray-500',
    'rounded-lg',
    'flex flex-col gap-1',
    'overflow-y-auto',
    'font-medium dark:font-normal',
  ]),
  '.msph_footer__select-list-element': parseTwdApply([
    'flex items-center',
    'rounded-lg',
    'w-full',
    'cursor-pointer',
    'p-1 pb-1.5 px-2',
  ]),
  '.msph_footer__select-list-element--active': parseTwdApply([
    'bg-msph-primary-tint',
    'text-msph-primary-light',
    'pointer-events-none',
    'hover:text-msph-primary-dark dark:hover:bg-gray-600',
  ]),
  '.msph_footer__link': parseTwdApply([
    'hover:underline',
    'block',
    'mb-1',
    'dark:font-light',
    'leading-[22px]',
  ]),
  '.msph_copy-footer__container': parseTwdApply([
    'flex flex-col md:flex-row',
    'justify-center md:justify-between items-center',
    'gap-y-5',
  ]),
  '.msph_copy-footer__rights': parseTwdApply([
    'flex flex-col md:flex-row',
    'gap-y-2 md:gap-y-0 gap-x-7',
    'text-sm',
    'font-light',
  ]),
  '.msph_copy-footer__open-app-button': parseTwdApply([
    'msph_small-button',
    'bg-msph-primary-tint',
    'text-msph-primary-light',
    'h-fit w-full md:w-fit',
    'text-center',
  ]),
};
