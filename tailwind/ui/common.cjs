'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-body-container': parseTwdApply([
    'bg-msph-light-100 dark:bg-msph-dark-900',
    'text-msph-dark-900 dark:text-msph-light-100',
  ]),
  '.msph-safe-container': parseTwdApply([
    'mx-auto',
    'max-w-[1260px]',
    'w-full',
  ]),
  '.msph-button': parseTwdApply([
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
  '.msph-button--primary': parseTwdApply([
    'w-full',
    'text-center',
    'min-h-[40px]',
    'bg-msph-tint-500',
    'text-msph-light-100',
  ]),
  '.msph-button--loading': parseTwdApply([
    'rounded-2xl hover:rounded-2xl',
    'hover:disabled:rounded-2xl',
  ]),
  '.msph-button--secondary': parseTwdApply([
    'w-full',
    'text-center',
    'min-h-[40px]',
    'bg-msph-dark-800 dark:bg-msph-light-300',
    'text-msph-light-100 dark:text-msph-dark-900',
  ]),
  '.msph-button--small': parseTwdApply([
    'py-1.5',
    'text-sm',
    'shadow-md',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
};
