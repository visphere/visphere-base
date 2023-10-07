'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-my-accounts__delete-all-button': parseTwdApply([
    'vsph-button',
    'w-full',
    'shadow-none',
    'font-semibold',
    'border-2',
    'border-vsph-red-200 dark:border-vsph-red-100',
    'text-vsph-red-200 dark:text-vsph-red-100',
  ]),
  '.vsph-my-account__container': parseTwdApply(['grid grid-cols-12 gap-3']),
  '.vsph-my-account__element-scaffold': parseTwdApply([
    'col-span-3 md:col-span-2',
    'h-[140px]',
  ]),
  '.vsph-my-account__element': parseTwdApply([
    'border',
    'rounded-md',
    'flex flex-col',
    'overflow-hidden',
    'border-vsph-tint-300 dark:border-vsph-dark-700',
  ]),
  '.vsph-my-account__element-content': parseTwdApply([
    'flex justify-center items-center',
    'flex-grow',
  ]),
  '.vsph-my-account__element-add-button': parseTwdApply([
    'w-full h-full',
    'rounded-md',
    'border border-dashed border-2',
    'flex justify-center items-center',
    'cursor-pointer',
    'border-vsph-tint-300 dark:border-vsph-dark-700',
  ]),
  '.vsph-my-account__element-add-icon': parseTwdApply([
    'text-4xl',
    'text-vsph-tint-300 dark:text-vsph-dark-700',
  ]),
  '.vsph-my-account__element-remove-button': parseTwdApply([
    'w-full',
    'py-1.5',
    'bg-vsph-tint-500',
    'text-vsph-light-100 text-sm',
  ]),
  '.vsph-my-account__alter-no-content-container': parseTwdApply([
    'mt-8 mb-12',
    'flex flex-col justify-center items-center',
  ]),
  '.vsph-my-account__alter-no-content-paragraph': parseTwdApply([
    'w-full max-w-[400px]',
    'text-center text-vsph-tint-400',
    'leading-[17px]',
    'font-normal',
  ]),
  '.vsph-my-account__not-verified': parseTwdApply([
    'mx-auto',
    'flex justify-center items-center',
    'shadow-md',
    'rounded-2xl',
  ]),
  '.vsph-my-account__not-verified--modal': parseTwdApply([
    'rounded-3xl',
    'w-[100px] h-[100px]',
    'bg-vsph-light-100',
  ]),
  '.vsph-my-account__not-verified--tile': parseTwdApply([
    'rounded-2xl',
    'w-[70px] h-[70px]',
    'bg-vsph-tint-100 dark:bg-vsph-light-100',
  ]),
  '.vsph-my-account__modal-image-container': parseTwdApply([
    'p-5',
    'rounded-2xl',
    'mb-4',
    'bg-vsph-tint-100 dark:bg-vsph-dark-800',
  ]),
  '.vsph-my-account__modal-image-paragraph': parseTwdApply([
    'mt-4',
    'text-center text-vsph-tint-400 dark:text-vsph-tint-300',
  ]),
  '.vsph-my-account__verified-image': parseTwdApply(['shadow-md']),
  '.vsph-my-account__verified-image--modal': parseTwdApply([
    'mx-auto',
    'rounded-3xl',
  ]),
  '.vsph-my-account__verified-image--tile': parseTwdApply(['rounded-2xl']),
};
