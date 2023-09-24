'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-mobile-nav__button': parseTwdApply([
    'col-span-12',
    'px-4 py-2',
    'rounded-lg',
    'text-center',
    'border-2',
    'border-msph-tint-500',
    'bg-msph-tint-500',
    'text-msph-light-100',
  ]),
  '.msph-mobile-nav__button--outline': parseTwdApply([
    'msph-mobile-nav__button',
    'bg-msph-transparent',
    'text-msph-tint-500',
  ]),
  '.msph-slide-nav__button': parseTwdApply([
    'px-3 py-1.5',
    'h-fit',
    'text-sm text-center',
    'rounded-lg',
    'border',
    'border-msph-tint-500',
    'bg-msph-tint-500',
    'text-msph-light-100',
  ]),
  '.msph-slide-nav__button--outline': parseTwdApply([
    'msph-slide-nav__button',
    'bg-msph-transparent',
    'text-msph-tint-500',
  ]),
  '.msph-slide-nav__button--inverse': parseTwdApply([
    'border-msph-light-100',
    'bg-msph-light-100',
    'text-msph-dark-900',
  ]),
  '.msph-slide-nav__container': parseTwdApply([
    'fixed',
    '-top-2 left-0',
    'w-full h-screen min-h-fit',
    'bg-msph-light-100',
    'p-5',
    'flex flex-col lg:hidden',
    'overflow-y-auto',
    'opacity-0 translate-x-[100%]',
  ]),
  '.msph-root-header': parseTwdApply([
    'text-3xl md:text-5xl',
    'font-black',
    'mb-5',
    'uppercase',
    'leading-7',
  ]),
  '.msph-primary-href': parseTwdApply([
    'text-msph-tint-500',
    'hover:underline',
  ]),
  '.msph-download-app-button': parseTwdApply([
    'rounded-lg',
    'px-10 py-2',
    'border border-msph-tint-500',
    'bg-msph-tint-500',
    'text-msph-light-100 text-center',
  ]),
  '.msph-open-app-in-browser-button': parseTwdApply([
    'rounded-lg',
    'px-10 py-2',
    'border border-msph-dark-900',
    'text-msph-dark-900 text-center',
  ]),
  '.msph-interactive-libraries__gradient': parseTwdApply([
    'absolute',
    'left-0',
    'w-[calc(100%-14px)] h-[100px]',
    'z-10',
  ]),
  '.msph-interactive-libraries__top-gradient': parseTwdApply([
    'msph-interactive-libraries__gradient',
    'top-0',
    'bg-gradient-to-b from-msph-gray-950 from-60% to-100%',
  ]),
  '.msph-interactive-libraries__bottom-gradient': parseTwdApply([
    'msph-interactive-libraries__gradient',
    'bottom-0',
    'bg-gradient-to-t from-msph-gray-950 from-10% to-100%',
  ]),
  '.msph-interactive-libraries__header': parseTwdApply([
    'absolute',
    'top-0 left-0',
    'w-[calc(100%-14px)]',
    'flex justify-center',
    'z-40',
  ]),
  '.msph-interactive-libraries__button': parseTwdApply([
    'absolute',
    'left-[50%] -translate-x-[50%]',
    'bg-msph-gray-600',
    'z-0',
  ]),
  '.msph-interactive-libraries__scroll': parseTwdApply([
    'relative',
    'w-full h-full',
    'overflow-y-scroll',
    'ps-[14px]',
  ]),
  '.msph-interactive-libraries__list': parseTwdApply([
    'grid grid-cols-1 sm:grid-cols-2',
    'gap-x-5 gap-y-0.5',
    'px-2',
    'bg-msph-gray-950',
  ]),
  '.msph-interactive-libraries__scroll-track': parseTwdApply([
    'absolute',
    'right-[0.35rem] top-[10px]',
    'w-[0.1rem] h-[calc(100%-20px)]',
    'bg-msph-gray-900',
  ]),
};
