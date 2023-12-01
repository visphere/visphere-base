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
  '.vsph-button--small': parseTwdApply([
    'py-1.5',
    'text-sm',
    'shadow-md',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
};
