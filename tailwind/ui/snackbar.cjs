'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-snackbar__list-container': parseTwdApply([
    'fixed',
    'w-full sm:max-w-[370px] h-fit',
    'bottom-0 sm:top-0 right-0',
    'z-[100]',
    'p-3',
    'flex flex-col justify-end sm:justify-start',
    'overflow-hidden',
  ]),
  '.vsph-snackbar__list-element': parseTwdApply([
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
    'border border-vsph-tint-200 dark:border-vsph-dark-700',
    'text-vsph-tint-400 dark:text-vsph-tint-200',
    'relative',
    'rounded-lg',
    'py-3 ps-6 pe-10',
    'mt-3 sm:mt-0 sm:mb-3',
    'shadow-lg',
  ]),
  '.vsph-snackbar__severity-indicator': parseTwdApply([
    'absolute',
    'w-[8px] h-[50%] max-h-[40px]',
    'left-0 top-[50%] -translate-y-[50%]',
    'rounded-r-md',
  ]),
  '.vsph-snackbar__close-button': parseTwdApply([
    'absolute',
    'h-fit',
    'right-[10px] top-[50%] -translate-y-[50%]',
    'flex items-center',
    'p-1',
  ]),
  '.vsph-snackbar__header': parseTwdApply([
    'font-bold',
    'leading-[17px]',
    'mb-2',
  ]),
  '.vsph-snackbar__content': parseTwdApply([
    'text-sm',
    'leading-[17px]',
    'font-medium',
  ]),
};
