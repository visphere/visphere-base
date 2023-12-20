'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-client__entry-point-container': parseTwdApply([
    'flex',
    'h-screen',
    'bg-vsph-light-100 dark:bg-vsph-dark-850',
  ]),
  '.vsph-category-list__element': parseTwdApply([
    'w-full',
    'px-3 py-2',
    'flex justify-start items-center',
    'border border-vsph-tint-300 dark:border-vsph-tint-400',
    'bg-vsph-light-200 dark:bg-vsph-dark-850',
    'rounded-lg hover:rounded-2xl',
    'transition-[border-radius] duration-300',
  ]),
  '.vsph-category-list__element--active': parseTwdApply([
    'border-vsph-tint-500 dark:border-vsph-tint-500',
    'text-vsph-tint-500',
  ]),
  '.vsph-input--textarea': parseTwdApply([
    'resize-none',
    'w-full max-h-[180px]',
    'pe-12',
    'text-vsph-dark-900 dark:text-vsph-light-100',
    'scrollbar-rounded scrollbar-thumb:bg-vsph-tint-200 dark:scrollbar-thumb:bg-vsph-dark-750',
    'focus:outline-none focus:ring-0 focus:border-vsph-dark-900 dark:focus:border-vsph-light-100',
  ]),
  '.vsph-side-content__container': parseTwdApply([
    'flex flex-col',
    'h-screen',
    'basis-[280px] flex-shrink-0',
  ]),
  '.vsph-side-content__header': parseTwdApply([
    'flex items-center gap-x-3',
    'bg-vsph-light-300 dark:bg-vsph-dark-850',
    'border-b border-vsph-tint-100 dark:border-vsph-dark-750',
    'p-4',
    'rounded-tl-xl',
  ]),
  '.vsph-side-content__body': parseTwdApply([
    'flex flex-col',
    'flex-grow',
    'p-4',
    'overflow-y-auto',
    'bg-vsph-light-400 dark:bg-vsph-dark-875',
    'scrollbar-rounded scrollbar-thumb:bg-vsph-tint-200 dark:scrollbar-thumb:bg-vsph-dark-800',
  ]),
  '.vsph-side-content__bottom-content': parseTwdApply([
    'bg-vsph-light-400 dark:bg-vsph-dark-875',
    'p-4',
    'rounded-bl-xl',
  ]),
  '.vsph-center-content__container': parseTwdApply([
    'flex flex-col',
    'h-screen min-w-[500px]',
  ]),
  '.vsph-center-content__header': parseTwdApply([
    'flex items-center gap-x-3',
    'p-4',
    'border-b border-vsph-tint-100 dark:border-vsph-dark-750',
    'bg-vsph-light-200 dark:bg-vsph-dark-800',
  ]),
  '.vsph-center-content__body': parseTwdApply([
    'flex flex-col-reverse',
    'flex-grow',
    'overflow-y-auto',
    'px-6',
    'shadow-inner',
    'scrollbar-rounded scrollbar-thumb:bg-vsph-tint-200 dark:scrollbar-thumb:bg-vsph-dark-750',
  ]),
  '.vsph-rounded-icon__container': parseTwdApply([
    'flex flex-col justify-center items-center',
    'max-w-[500px] h-full',
    'pt-10',
  ]),
  '.vsph-rounded-icon__body': parseTwdApply([
    'flex justify-center items-center',
    'w-[70px] h-[70px]',
    'rounded-full',
    'mb-4',
    'flex-shrink-0',
    'text-center',
    'bg-vsph-light-400 dark:bg-vsph-dark-875',
  ]),
  '.vsph-center-content__separator': parseTwdApply([
    'border-vsph-tint-100 dark:border-vsph-dark-750 w-full',
  ]),
  '.vsph-sidebar__aside-text': parseTwdApply([
    'text-xs text-vsph-tint-300 uppercase',
  ]),
  '.vsph-text-channel__container': parseTwdApply([
    'flex justify-between items-center',
    'rounded-lg',
    'hover:bg-vsph-tint-200 dark:hover:bg-vsph-dark-800',
    'transition-[border-radius] duration-300',
  ]),
  '.vsph-text-channel__container--active': parseTwdApply([
    'hover:rounded-2xl',
    'bg-vsph-tint-500 dark:bg-vsph-tint-500',
    'hover:bg-vsph-tint-500 dark:hover:bg-vsph-tint-500',
    'text-vsph-light-100',
    'shadow-md',
  ]),
  '.vsph-user-details-popover__button': parseTwdApply([
    'flex gap-x-2',
    'p-1',
    'rounded-lg',
    'hover:bg-vsph-tint-200 dark:hover:bg-vsph-dark-800',
    'cursor-pointer',
  ]),
  '.vsph-user-details-popover__container': parseTwdApply([
    'relative',
    'overflow-hidden',
    'w-[350px]',
    'flex',
    'rounded-lg',
    'pb-4 px-4',
    'mx-4 mb-4',
    'shadow-md',
    'bg-vsph-light-200 dark:bg-vsph-dark-900',
    'border border-vsph-tint-100 dark:border-vsph-dark-850',
  ]),
  '.vsph-user-details-popover__container--loader': parseTwdApply([
    'w-[60px] h-[40px]',
    'justify-center items-center',
    'pb-0',
  ]),
  '.vsph-user-details-popover__color-bgp': parseTwdApply([
    'absolute',
    'w-full h-[60px]',
    'top-0 left-0',
  ]),
  '.vsph-user-details-popover__profile-image-container': parseTwdApply([
    'absolute',
    'top-[40px] left-4',
    'w-[75px] h-[75px]',
    'flex justify-center items-center',
    'rounded-2xl',
    'bg-vsph-light-200 dark:bg-vsph-dark-900',
  ]),
  '.vsph-user-details-popover__data-block': parseTwdApply([
    'bg-vsph-light-100 dark:bg-vsph-dark-850',
    'rounded-lg',
    'p-2',
    'flex flex-col gap-y-1',
  ]),
  '.vsph-left-navigation-bar__container': parseTwdApply([
    'flex flex-col justify-between',
    'h-screen',
    'bg-vsph-light-200 dark:bg-vsph-dark-900',
  ]),
  '.vsph-left-navigation-bar__wrapper': parseTwdApply([
    'flex flex-col gap-y-3',
    'overflow-y-auto',
  ]),
  '.vsph-left-navigation-bar__root-link': parseTwdApply([
    'relative',
    'flex justify-center items-center',
    'p-1.5',
    'm-3',
    'bg-vsph-light-100',
  ]),
  '.vsph-left-navigation-bar__active-link-notch': parseTwdApply([
    'absolute',
    'top-1/2 -translate-y-1/2 -left-[12px]',
    'w-[5px] h-[80%]',
    'bg-vsph-dark-900 dark:bg-vsph-light-100',
    'rounded-r-2xl',
  ]),
  '.vsph-left-navigation-bar__separator': parseTwdApply([
    'mx-3',
    'border-vsph-tint-300 dark:border-vsph-tint-400',
  ]),
  '.vsph-left-navigation-bar__list-container': parseTwdApply([
    'flex flex-col gap-y-2',
    'overflow-y-auto',
    'mb-2',
    '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:"none"] [scrollbar-width:"none"]',
  ]),
  '.vsph-left-navigation-bar__hoverable-element': parseTwdApply([
    'flex-shrink-0',
    'cursor-pointer',
    'w-[45px] h-[45px]',
    'rounded-lg hover:rounded-2xl',
    'transition-[border-radius] duration-300',
  ]),
  '.vsph-left-navigation-bar__hoverable-button': parseTwdApply([
    'flex justify-center items-center',
    'w-full h-full',
  ]),
  '.vsph-left-navigation-bar__hoverable-element--add': parseTwdApply([
    'mx-3',
    'bg-vsph-tint-500',
  ]),
  '.vsph-left-navigation-bar__hoverable-element--public': parseTwdApply([
    'mx-3',
    'bg-vsph-dark-900 dark:bg-vsph-light-100',
  ]),
};