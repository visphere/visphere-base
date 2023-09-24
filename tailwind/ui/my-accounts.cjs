'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-my-accounts__delete-all-button': parseTwdApply([
    'msph-button',
    'w-full',
    'shadow-none',
    'font-semibold',
    'border-2',
    'border-msph-red-200 dark:border-msph-red-100',
    'text-msph-red-200 dark:text-msph-red-100',
  ]),
  '.msph-my-account__container': parseTwdApply(['grid grid-cols-12 gap-3']),
  '.msph-my-account__element-scaffold': parseTwdApply([
    'col-span-3 md:col-span-2',
    'h-[140px]',
  ]),
  '.msph-my-account__element': parseTwdApply([
    'border',
    'rounded-md',
    'flex flex-col',
    'overflow-hidden',
    'border-msph-tint-300 dark:border-msph-dark-700',
  ]),
  '.msph-my-account__element-content': parseTwdApply([
    'flex justify-center items-center',
    'flex-grow',
  ]),
  '.msph-my-account__element-add-button': parseTwdApply([
    'w-full h-full',
    'rounded-md',
    'border border-dashed border-2',
    'flex justify-center items-center',
    'cursor-pointer',
    'border-msph-tint-300 dark:border-msph-dark-700',
  ]),
  '.msph-my-account__element-add-icon': parseTwdApply([
    'text-4xl',
    'text-msph-tint-300 dark:text-msph-dark-700',
  ]),
  '.msph-my-account__element-remove-button': parseTwdApply([
    'w-full',
    'py-1.5',
    'bg-msph-tint-500',
    'text-msph-light-100 text-sm',
  ]),
  '.msph-my-account__alter-no-content-container': parseTwdApply([
    'mt-8 mb-12',
    'flex flex-col justify-center items-center',
  ]),
  '.msph-my-account__alter-no-content-paragraph': parseTwdApply([
    'w-full max-w-[400px]',
    'text-center text-msph-tint-400',
    'leading-[17px]',
    'font-normal',
  ]),
  '.msph-my-account__not-verified': parseTwdApply([
    'mx-auto',
    'flex justify-center items-center',
    'shadow-md',
    'rounded-2xl',
  ]),
  '.msph-my-account__not-verified--modal': parseTwdApply([
    'rounded-3xl',
    'w-[100px] h-[100px]',
    'bg-msph-light-100',
  ]),
  '.msph-my-account__not-verified--tile': parseTwdApply([
    'rounded-2xl',
    'w-[70px] h-[70px]',
    'bg-msph-tint-100 dark:bg-msph-light-100',
  ]),
  '.msph-my-account__modal-image-container': parseTwdApply([
    'p-5',
    'rounded-2xl',
    'mb-4',
    'bg-msph-tint-100 dark:bg-msph-dark-800',
  ]),
  '.msph-my-account__modal-image-paragraph': parseTwdApply([
    'mt-4',
    'text-center text-msph-tint-400 dark:text-msph-tint-300',
  ]),
  '.msph-my-account__verified-image': parseTwdApply(['shadow-md']),
  '.msph-my-account__verified-image--modal': parseTwdApply([
    'mx-auto',
    'rounded-3xl',
  ]),
  '.msph-my-account__verified-image--tile': parseTwdApply(['rounded-2xl']),
};
