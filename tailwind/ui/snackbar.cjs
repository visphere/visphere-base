'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-snackbar__list-container': parseTwdApply([
    'fixed',
    'w-full sm:max-w-[370px] h-fit',
    'bottom-0 sm:top-0 right-0',
    'z-[100]',
    'p-3',
    'flex flex-col justify-end sm:justify-start',
    'overflow-hidden',
  ]),
  '.msph-snackbar__list-element': parseTwdApply([
    'bg-msph-light-300 dark:bg-msph-dark-900',
    'border border-msph-tint-200 dark:border-msph-dark-700',
    'text-msph-tint-400 dark:text-msph-tint-200',
    'relative',
    'rounded-lg',
    'py-3 ps-6 pe-10',
    'mt-3 sm:mt-0 sm:mb-3',
    'shadow-lg',
  ]),
  '.msph-snackbar__severity-indicator': parseTwdApply([
    'absolute',
    'w-[8px] h-[50%] max-h-[40px]',
    'left-0 top-[50%] -translate-y-[50%]',
    'rounded-r-md',
  ]),
  '.msph-snackbar__close-button': parseTwdApply([
    'absolute',
    'h-fit',
    'right-[10px] top-[50%] -translate-y-[50%]',
    'flex items-center',
    'p-1',
  ]),
  '.msph-snackbar__header': parseTwdApply([
    'font-bold',
    'leading-[17px]',
    'mb-2',
  ]),
  '.msph-snackbar__content': parseTwdApply([
    'text-sm',
    'leading-[17px]',
    'font-medium',
  ]),
};
