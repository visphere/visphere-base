'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-auth__my-accounts-button': parseTwdApply([
    'msph_regular-button',
    'shadow-sm',
    'bg-gray-200 dark:bg-gray-500',
    'md:bg-gray-500 md:dark:bg-gray-200',
  ]),
  '.msph-my-accounts__delete-all-button': parseTwdApply([
    'msph_regular-button',
    'w-full',
    'shadow-none',
    'font-semibold',
    'border-2',
    'border-msph-danger-primary dark:border-msph-danger-secondary',
    'md:border-msph-danger-secondary dark:md:border-msph-danger-primary',
    'text-msph-danger-primary dark:text-msph-danger-secondary',
    'md:text-msph-danger-secondary md:dark:text-msph-danger-primary',
  ]),
  '.msph-my-accounts__add-new-button': parseTwdApply([
    'msph_regular-button',
    'w-full',
    'bg-msph-primary-tint',
    'text-msph-primary-light',
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
  ]),
  '.msph-my-account__element--static': parseTwdApply([
    'border-gray-300 dark:border-gray-600',
  ]),
  '.msph-my-account__element--viewport': parseTwdApply([
    'border-gray-300 dark:border-gray-600',
    'md:border-gray-600 dark:md:border-gray-300',
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
  ]),
  '.msph-my-account__element-add-icon': parseTwdApply(['text-4xl']),
  '.msph-my-account__element-add-icon--static': parseTwdApply([
    'text-gray-300 dark:text-gray-600',
  ]),
  '.msph-my-account__element-add-icon--viewport': parseTwdApply([
    'text-gray-300 dark:text-gray-600',
    'md:text-gray-600 dark:md:text-gray-300',
  ]),
  '.msph-my-account__element-remove-button': parseTwdApply([
    'w-full',
    'py-1.5',
    'bg-msph-primary-tint',
    'text-msph-primary-light text-sm',
  ]),
  '.msph-my-account__alter-no-content-container': parseTwdApply([
    'mt-8 mb-12',
    'flex flex-col justify-center items-center',
  ]),
  '.msph-my-account__alter-no-content-paragraph': parseTwdApply([
    'w-full max-w-[400px]',
    'text-center text-sm text-gray-400',
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
  ]),
  '.msph-my-account__not-verified--tile': parseTwdApply([
    'rounded-2xl',
    'w-[70px] h-[70px]',
  ]),
  '.msph-my-account__content-colors--modal--static': parseTwdApply([
    'bg-msph-primary-light',
  ]),
  '.msph-my-account__content-colors--tile--static': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-primary-light',
  ]),
  '.msph-my-account__content-colors--modal--viewport': parseTwdApply([
    'bg-msph-primary-light',
  ]),
  '.msph-my-account__content-colors--tile--viewport': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-primary-light',
    'md:bg-msph-primary-light dark:md:bg-msph-secondary-tint',
  ]),
  '.msph-my-account__modal-image-container': parseTwdApply([
    'p-5',
    'rounded-2xl',
    'mb-4',
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
  ]),
  '.msph-my-account__modal-image-paragraph': parseTwdApply([
    'mt-4',
    'text-sm text-center text-gray-500',
  ]),
  '.msph-my-account__verified-image': parseTwdApply(['shadow-md']),
  '.msph-my-account__verified-image--modal': parseTwdApply([
    'mx-auto',
    'rounded-3xl',
  ]),
  '.msph-my-account__verified-image--tile': parseTwdApply(['rounded-2xl']),
};
