'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-auth__container': parseTwdApply([
    'w-full',
    'md:rounded-xl',
    'md:shadow-md',
    'md:mx-5',
  ]),
  '.msph-auth__header': parseTwdApply([
    'my-4',
    'text-3xl',
    'font-semibold md:font-medium dark:font-medium dark:md:font-semibold font-logo',
    'text-center',
    'text-msph-secondary-dark dark:text-msph-primary-light',
    'md:text-msph-primary-light md:dark:text-msph-secondary-dark',
  ]),
  '.msph-auth__container-inv-colors': parseTwdApply([
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
    'md:bg-msph-primary-dark md:dark:bg-msph-primary-light',
    'md:text-msph-primary-light md:dark:text-msph-primary-dark',
  ]),
  '.msph-auth__google-oauth-button': parseTwdApply([
    'msph_regular-button',
    'justify-start',
    'font-bold',
    'bg-msph-google-background',
    'text-msph-google-foreground',
  ]),
  '.msph-auth__facebook-oauth-button': parseTwdApply([
    'msph_regular-button',
    'justify-start',
    'bg-msph-facebook-background',
    'text-msph-facebook-foreground',
  ]),
  '.msph-auth__x-oauth-button': parseTwdApply([
    'msph_regular-button',
    'justify-start',
    'bg-msph-x-background',
    'text-msph-x-foreground',
  ]),
  '.msph-auth__input': parseTwdApply([
    'rounded-lg',
    'p-3 py-2.5',
    'shadow-md',
    'border-b-2 border-b-msph-primary-tint',
    'disabled:cursor-not-allowed',
  ]),
  '.msph-auth__input--invalid': parseTwdApply(['border-2']),
  '.msph-auth__input--static': parseTwdApply([
    'bg-white dark:bg-msph-secondary-dark',
  ]),
  '.msph-auth__input--static--invalid': parseTwdApply([
    'text-msph-danger-primary dark:text-msph-danger-secondary',
    'border-msph-danger-primary dark:border-msph-danger-secondary',
  ]),
  '.msph-auth__input--viewport': parseTwdApply([
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
  ]),
  '.msph-auth__input--viewport--invalid': parseTwdApply([
    'text-msph-danger-primary md:text-msph-danger-secondary',
    'dark:text-msph-danger-secondary dark:md:text-msph-danger-primary',
    'border-msph-danger-primary md:border-msph-danger-secondary',
    'dark:border-msph-danger-secondary dark:md:border-msph-danger-primary',
  ]),
  '.msph-auth__text--static--invalid': parseTwdApply([
    'text-msph-danger-primary dark:text-msph-danger-secondary',
  ]),
  '.msph-auth__text--viewport--invalid': parseTwdApply([
    'text-msph-danger-primary md:text-msph-danger-secondary',
    'dark:text-msph-danger-secondary dark:md:text-msph-danger-primary',
  ]),
  '.msph-auth__checkbox': parseTwdApply([
    'form-checkbox',
    'rounded',
    'w-[18px] h-[18px]',
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
    'cursor-pointer',
    'hover:checked:bg-msph-primary-tint',
    'border-gray-500 dark:border-transparent',
    'md:border-transparent md:dark:border-gray-500',
    'focus:outline-black focus:checked:bg-msph-primary-tint',
    'disabled:cursor-not-allowed',
    'checked:bg-msph-primary-tint checked:border-none dark:checked:bg-msph-primary-tint',
  ]),
  '.msph-auth__link': parseTwdApply([
    'cursor-pointer',
    'text-msph-primary-tint',
    'font-medium',
    'hover:underline',
  ]),
  '.msph-auth__separator': parseTwdApply([
    'border-gray-300 dark:border-gray-500',
    'md:border-gray-500 md:dark:border-gray-300',
  ]),
  '.msph-auth__top-nav-button': parseTwdApply([
    'text-sm',
    'text-msph-primary-tint dark:text-gray-400',
    'md:text-gray-400 md:dark:text-msph-primary-tint',
    'hover:bg-msph-secondary-tint dark:hover:bg-msph-primary-dark',
    'md:hover:bg-gray-600 md:dark:hover:bg-msph-secondary-tint',
    'px-1.5 pt-0.5 pb-1',
    'rounded-md',
  ]),
  '.msph-auth__form-out-text': parseTwdApply([
    'text-sm',
    'mt-1',
    'text-gray-500 dark:text-gray-400',
    'sm:text-gray-400 sm:dark:text-gray-500',
  ]),
  '.msph-auth__info-card-container': parseTwdApply([
    'rounded-md',
    'text-sm',
    'p-3',
    'leading-[18px]',
    'text-opacity-80',
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'text-msph-primary-tint dark:text-gray-300',
    'md:bg-msph-secondary-dark md:dark:bg-msph-secondary-tint',
    'md:text-gray-300 md:dark:text-msph-primary-tint',
  ]),
  '.msph-auth__info-card-container--static': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'text-msph-primary-tint dark:text-gray-300',
  ]),
  '.msph-auth__info-card-container--viewport': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'text-msph-primary-tint dark:text-gray-300',
    'md:bg-msph-secondary-dark md:dark:bg-msph-secondary-tint',
    'md:text-gray-300 md:dark:text-msph-primary-tint',
  ]),
  '.msph-auth__password-strenght-meter__colors': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-msph-secondary-tint',
  ]),
  '.msph-auth__password-strenght-meter__bg': parseTwdApply([
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'md:bg-msph-primary-dark md:dark:bg-msph-primary-light',
  ]),
  '.msph-auth__single-select-spinner-list__container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-full max-h-[200px]',
    'mb-1 p-1.5',
    'rounded-md',
    'border-b-2 border-t-2 border-msph-primary-tint',
    'overflow-y-auto',
    'scrollbar-rounded',
  ]),
  '.msph-auth__single-select-spinner-list__container--static': parseTwdApply([
    'bg-white dark:bg-msph-secondary-dark',
    'scrollbar-thumb:bg-msph-secondary-tint dark:scrollbar-thumb:bg-msph-primary-dark',
  ]),
  '.msph-auth__single-select-spinner-list__container--viewport': parseTwdApply([
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
    'scrollbar-thumb:bg-msph-secondary-tint dark:scrollbar-thumb:bg-msph-primary-dark',
    'md:scrollbar-thumb:bg-msph-primary-dark md:dark:scrollbar-thumb:bg-msph-secondary-tint',
  ]),
  '.msph-auth__single-select-spinner-list__element': parseTwdApply([
    'rounded-md',
    'px-2 py-1 pb-1.5',
    'leading-5',
    'w-full',
    'text-start',
  ]),
  '.msph-auth__resend-message-button': parseTwdApply([
    'msph_regular-button',
    'shadow-sm',
    'w-full',
    'bg-gray-200 dark:bg-gray-500',
    'md:bg-gray-500 md:dark:bg-gray-200',
  ]),
};
