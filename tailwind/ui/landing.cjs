'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.vsph-mobile-nav__button': parseTwdApply([
    'vsph-button shadow-none',
    'col-span-12',
    'px-4 py-2',
    'rounded-lg',
    'text-center',
    'border-2',
    'border-vsph-tint-500',
    'bg-vsph-tint-500',
    'text-vsph-light-100',
  ]),
  '.vsph-mobile-nav__button--outline': parseTwdApply([
    'vsph-mobile-nav__button',
    'bg-vsph-transparent',
    'text-vsph-tint-500',
  ]),
  '.vsph-slide-nav__button': parseTwdApply([
    'vsph-button shadow-none',
    'px-3 py-1.5',
    'h-fit',
    'text-sm text-center',
    'rounded-lg',
    'border',
    'border-vsph-tint-500',
    'bg-vsph-tint-500',
    'text-vsph-light-100',
  ]),
  '.vsph-slide-nav__button--outline': parseTwdApply([
    'vsph-slide-nav__button',
    'bg-vsph-transparent',
    'text-vsph-tint-500',
  ]),
  '.vsph-slide-nav__button--inverse': parseTwdApply([
    'border-vsph-light-100',
    'bg-vsph-light-100',
    'text-vsph-dark-900',
  ]),
  '.vsph-slide-nav__container': parseTwdApply([
    'fixed',
    '-top-2 left-0',
    'w-full h-screen min-h-fit',
    'bg-vsph-light-100',
    'p-5',
    'flex flex-col lg:hidden',
    'overflow-y-auto',
    'opacity-0 translate-x-[100%]',
  ]),
  '.vsph-root-header': parseTwdApply([
    'text-3xl md:text-5xl',
    'font-black',
    'mb-5',
    'uppercase',
    'leading-7',
  ]),
  '.vsph-primary-href': parseTwdApply([
    'text-vsph-tint-500',
    'hover:underline',
  ]),
  '.vsph-download-app-button': parseTwdApply([
    'vsph-button shadow-none',
    'rounded-lg',
    'px-10 py-2',
    'border border-vsph-tint-500',
    'bg-vsph-tint-500',
    'text-vsph-light-100 text-center',
  ]),
  '.vsph-open-app-in-browser-button': parseTwdApply([
    'vsph-button shadow-none',
    'rounded-lg',
    'px-10 py-2',
    'border border-vsph-dark-900',
    'text-vsph-dark-900 text-center',
  ]),
  '.vsph-interactive-libraries__gradient': parseTwdApply([
    'absolute',
    'left-0',
    'w-[calc(100%-14px)] h-[100px]',
    'z-10',
  ]),
  '.vsph-interactive-libraries__top-gradient': parseTwdApply([
    'vsph-interactive-libraries__gradient',
    'top-0',
    'bg-gradient-to-b from-vsph-gray-950 from-60% to-100%',
  ]),
  '.vsph-interactive-libraries__bottom-gradient': parseTwdApply([
    'vsph-interactive-libraries__gradient',
    'bottom-0',
    'bg-gradient-to-t from-vsph-gray-950 from-10% to-100%',
  ]),
  '.vsph-interactive-libraries__header': parseTwdApply([
    'absolute',
    'top-0 left-0',
    'w-[calc(100%-14px)]',
    'flex justify-center',
    'z-40',
  ]),
  '.vsph-interactive-libraries__button': parseTwdApply([
    'absolute',
    'left-[50%] -translate-x-[50%]',
    'bg-vsph-gray-600',
    'z-0',
  ]),
  '.vsph-interactive-libraries__scroll': parseTwdApply([
    'relative',
    'w-full h-full',
    'overflow-y-scroll',
    'ps-[14px]',
  ]),
  '.vsph-interactive-libraries__list': parseTwdApply([
    'grid grid-cols-1 sm:grid-cols-2',
    'gap-x-5 gap-y-0.5',
    'px-2',
    'bg-vsph-gray-950',
  ]),
  '.vsph-interactive-libraries__scroll-track': parseTwdApply([
    'absolute',
    'right-[0.35rem] top-[10px]',
    'w-[0.1rem] h-[calc(100%-20px)]',
    'bg-vsph-gray-900',
  ]),
};
