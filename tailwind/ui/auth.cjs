'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-auth__container': parseTwdApply([
    'w-full',
    'md:rounded-xl',
    'md:shadow-md',
    'md:mx-5',
    'md:border border-vsph-tint-200 dark:border-vsph-dark-800',
    'bg-vsph-light-300 dark:bg-vsph-dark-900',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-auth__header': parseTwdApply([
    'my-4',
    'font-bold',
    'text-center text-3xl',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-auth__paragraph': parseTwdApply([
    'leading-[21px]',
    'text-center text-lg',
    'mb-6',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
  '.vsph-auth__oauth-button': parseTwdApply([
    'w-full min-h-[42px]',
    'relative',
    'border border-vsph-tint-200 dark:border-vsph-dark-800',
  ]),
  '.vsph-auth__google-oauth-button': parseTwdApply([
    'font-semibold',
    'bg-vsph-google-bg',
    'text-vsph-google-fg',
  ]),
  '.vsph-auth__facebook-oauth-button': parseTwdApply([
    'bg-vsph-facebook-bg',
    'text-vsph-facebook-fg',
  ]),
  '.vsph-auth__x-oauth-button': parseTwdApply([
    'bg-vsph-x-bg',
    'text-vsph-x-fg',
  ]),
  '.vsph-auth__link': parseTwdApply([
    'cursor-pointer',
    'text-vsph-tint-500',
    'font-medium',
    'hover:underline',
  ]),
  '.vsph-auth__form-out-text': parseTwdApply([
    'text-sm',
    'mt-1',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-auth__single-select-spinner-list__container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-full max-h-[200px]',
    'mb-1 p-1.5',
    'rounded-md',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
    'border dark:border-vsph-dark-700',
    'overflow-y-auto',
    'scrollbar-rounded scrollbar-thumb:bg-vsph-tint-400',
  ]),
  '.vsph-auth__single-select-spinner-list__element': parseTwdApply([
    'rounded-md',
    'px-2 py-1 pb-1.5',
    'leading-5',
    'w-full',
    'text-start',
  ]),
  '.vsph-auth__stepper-container': parseTwdApply([
    'flex items-center',
    'space-x-2.5',
  ]),
  '.vsph-auth__stepper-number': parseTwdApply([
    'flex items-center justify-center shrink-0',
    'w-8 h-8',
    'border border-vsph-tint-500',
    'rounded-full',
    'text-vsph-tint-500 font-bold',
  ]),
  '.vsph-auth__stepper-header': parseTwdApply(['font-bold', 'mb-1']),
  '.vsph-auth__stepper-paragraph': parseTwdApply([
    'text-sm leading-[17px]',
    'text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
};
