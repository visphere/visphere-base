'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-settings__container': parseTwdApply([
    'overflow-y-auto',
    'overflow-x-hidden',
    'h-screen',
    'scrollbar-rounded',
    'flex-grow',
  ]),
  '.vsph-settings__navbar-container': parseTwdApply([
    'flex flex-shrink-0 basis-[260px] justify-end',
    'scrollbar-thumb:bg-vsph-tint-100 dark:scrollbar-thumb:bg-vsph-dark-800',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
  ]),
  '.vsph-settings__content-container': parseTwdApply([
    'flex-shrink basis-[720px]',
    'scrollbar-thumb:bg-vsph-tint-300 dark:scrollbar-thumb:bg-vsph-tint-100',
    'bg-vsph-light-300 dark:bg-vsph-dark-850',
  ]),
  '.vsph-settings__content-wrapper': parseTwdApply([
    'w-[720px] h-fit',
    'rounded-lg',
    'my-12 ms-4',
    'p-10',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
  ]),
  '.vsph-settings__nav-paragraph': parseTwdApply([
    'text-sm',
    'ms-2.5 mb-0.5',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__nav-button': parseTwdApply([
    'flex items-center justify-between w-full',
    'px-2.5 py-2',
    'mb-1',
    'rounded-lg',
    'text-left max-w-[220px] leading-[18px]',
    'hover:bg-vsph-light-300 hover:dark:bg-vsph-dark-800',
  ]),
  '.vsph-settings__nav-button--logout': parseTwdApply([
    'text-vsph-red-200 dark:text-vsph-red-100',
    'hover:text-vsph-light-100 hover:dark:text-vsph-light-100',
    'hover:bg-vsph-red-200 hover:dark:bg-vsph-red-200',
  ]),
  '.vsph-settings__nav-button--active': parseTwdApply([
    'bg-vsph-tint-500',
    'text-vsph-light-100',
    'hover:rounded-2xl',
    'shadow-md',
    'transition-[border-radius] duration-300',
    'hover:bg-vsph-tint-500 hover:dark:bg-vsph-tint-500',
  ]),
  '.vsph-settings__separator': parseTwdApply([
    'mb-3',
    'border-vsph-tint-200 dark:border-vsph-dark-750',
  ]),
  '.vsph-settings__radio-label': parseTwdApply([
    'text-sm',
    'mb-1',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__radio-button': parseTwdApply([
    'flex justify-between items-center',
    'px-4 py-2',
    'rounded-lg',
    'w-full',
    'bg-vsph-light-300 dark:bg-vsph-dark-850',
    'disabled:opacity-80',
  ]),
  '.vsph-settings__radio-button--active': parseTwdApply([
    'vsph-settings__nav-button--active',
    'bg-vsph-tint-500 dark:bg-vsph-tint-500',
  ]),
  '.vsph-settings__radio-dot': parseTwdApply([
    'relative',
    'w-[20px] h-[20px]',
    'rounded-full',
    'border-2 border-vsph-dark-900 dark:border-vsph-light-100',
    'me-2',
  ]),
  '.vsph-settings__radio-dot--active': parseTwdApply([
    'after:content-[""]',
    'after:absolute',
    'after:block',
    'after:rounded-full',
    'after:top-[50%] after:left-[50%]',
    'after:-translate-x-[50%] after:-translate-y-[50%]',
    'after:w-[10px] after:h-[10px]',
    'after:bg-vsph-light-100 after:dark:bg-vsph-light-100',
    'border-2 border-vsph-light-100 dark:border-vsph-light-100',
  ]),
  '.vsph-settings__toggler-container': parseTwdApply([
    'flex-shrink-0',
    'relative',
    'w-[43px] h-[24px]',
    'rounded-full',
    'ms-10',
    'bg-vsph-light-300 dark:bg-vsph-dark-850',
    'disabled:opacity-80',
  ]),
  '.vsph-settings__toggler-container--active': parseTwdApply([
    'bg-vsph-tint-500 dark:bg-vsph-tint-500',
  ]),
  '.vsph-settings__toggler-floating-dot': parseTwdApply([
    'absolute top-[3px] left-[3px]',
    'w-[18px] h-[18px]',
    'rounded-full',
    'text-vsph-light-100 dark:text-vsph-dark-900',
    'bg-vsph-dark-900 dark:bg-vsph-light-100',
    'duration-300',
    'translate-x-0',
  ]),
  '.vsph-settings__toggler-floating-dot--active': parseTwdApply([
    'left-[3px]',
    'translate-x-[18px]',
    'text-vsph-dark-900',
    'bg-vsph-light-100',
  ]),
  '.vsph-settings__section-header': parseTwdApply([
    'mb-4',
    'text-sm uppercase',
    'font-bold',
    'text-vsph-dark-900 dark:text-vsph-light-100',
  ]),
  '.vsph-settings__init-paragraph': parseTwdApply([
    'leading-[20px] text-center',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__init-paragraph--link': parseTwdApply([
    'text-vsph-tint-500 dark:text-vsph-tint-500',
    'hover:underline',
  ]),
  '.vsph-settings__init-small-paragraph': parseTwdApply([
    'text-sm leading-[17px]',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__setting-edit-button': parseTwdApply([
    'px-5',
    'bg-vsph-dark-900 dark:bg-vsph-light-100',
    'text-vsph-light-100 dark:text-vsph-dark-900',
  ]),
  '.vsph-settings__editable-value-container': parseTwdApply([
    'flex justify-between items-center',
  ]),
  '.vsph-settings__editable-value-description': parseTwdApply([
    'uppercase',
    'leading-[15px]',
    'text-sm',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-settings__vis-container': parseTwdApply([
    'relative',
    'overflow-hidden',
    'rounded-lg',
    'p-4 pt-[100px]',
    'bg-vsph-light-300 dark:bg-vsph-dark-850',
    'border border-vsph-light-300 dark:border-vsph-dark-850',
  ]),
  '.vsph-settings__vis-wrapper': parseTwdApply([
    'flex flex-col gap-y-3',
    'p-6',
    'rounded-lg',
    'bg-vsph-light-100 dark:bg-vsph-dark-900',
  ]),
  '.vsph-settings__vis-profile-image-container': parseTwdApply([
    'absolute',
    'top-[60px] left-7',
    'w-[100px] h-[100px]',
  ]),
  '.vsph-settings__vis-profile-image': parseTwdApply([
    'w-[100%] h-[100%]',
    'rounded-3xl',
    'border-[10px] border-vsph-light-300 dark:border-vsph-dark-850',
  ]),
  '.vsph-settings__vis-profile-banner-container': parseTwdApply([
    'absolute',
    'w-full h-[90px]',
    'top-0 left-0',
  ]),
  '.vsph-settings__profile-color-element': parseTwdApply([
    'w-[32px] h-[32px]',
    'rounded-full',
  ]),
  '.vsph-settings__profile-color-element--loading': parseTwdApply([
    'opacity-50',
  ]),
  '.vsph-settings__vis-profile-oauth2-wrapper': parseTwdApply([
    'absolute',
    '-bottom-[5px] -right-[5px]',
    'rounded-full',
    'w-[40px] h-[40px]',
    'flex justify-center items-center',
    'border-8 border-vsph-light-300 dark:border-vsph-dark-850',
  ]),
  '.vsph-settings__list-elements-container': parseTwdApply([
    'flex flex-col gap-y-2',
  ]),
  '.vsph-settings__list-hoverable': parseTwdApply([
    'rounded-lg hover:rounded-2xl',
    'transition-[border-radius] duration-300',
  ]),
  '.vsph-settings__list-element-container': parseTwdApply([
    'flex justify-between items-center',
    'px-4 py-2',
    'bg-vsph-light-300 dark:bg-vsph-dark-800',
  ]),
  '.vsph-settings__list-element-container--inactive': parseTwdApply([
    'opacity-40',
  ]),
  '.vsph-settings__list-element-button': parseTwdApply([
    'flex justify-center items-center',
    'w-[30px] h-[30px]',
  ]),
  '.vsph-settings__list-element-button--inverted': parseTwdApply([
    'bg-vsph-dark-900 dark:bg-vsph-light-100',
    'text-vsph-light-100 dark:text-vsph-dark-900',
  ]),
};
