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
    'border-msph-primary-tint',
    'bg-msph-primary-tint',
    'text-msph-primary-light',
  ]),
  '.msph-mobile-nav__button--outline': parseTwdApply([
    'msph-mobile-nav__button',
    'bg-transparent',
    'text-msph-primary-tint',
  ]),
  '.msph-slide-nav__button': parseTwdApply([
    'px-3 pt-1 pb-1.5',
    'h-fit',
    'text-sm text-center',
    'rounded-lg',
    'border',
    'border-msph-primary-tint',
    'bg-msph-primary-tint',
    'text-msph-primary-light',
  ]),
  '.msph-slide-nav__button--outline': parseTwdApply([
    'msph-slide-nav__button',
    'bg-transparent',
    'text-msph-primary-tint',
  ]),
  '.msph-slide-nav__button--inverse': parseTwdApply([
    'border-msph-primary-light',
    'bg-msph-primary-light',
    'text-msph-primary-dark',
  ]),
  '.msph-slide-nav__container': parseTwdApply([
    'fixed',
    '-top-2 left-0',
    'w-full h-screen min-h-fit',
    'bg-white',
    'p-5',
    'flex flex-col lg:hidden',
    'overflow-y-auto',
    'opacity-0 translate-x-[100%]',
  ]),
  '.msph-root-header': parseTwdApply([
    'text-3xl md:text-5xl',
    'font-extrabold font-logo',
    'mb-5',
    'uppercase',
    'leading-7',
    'max-w-[800px]',
  ]),
  '.msph-primary-href': parseTwdApply([
    'text-msph-primary-tint',
    'hover:underline',
  ]),
  '.msph-download-app-button': parseTwdApply([
    'rounded-lg',
    'px-10 py-2',
    'border border-msph-primary-tint',
    'bg-msph-primary-tint',
    'text-msph-primary-light text-center',
  ]),
  '.msph-open-app-in-browser-button': parseTwdApply([
    'rounded-lg',
    'px-10 py-2',
    'border border-msph-primary-dark',
    'text-msph-primary-dark text-center',
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
    'bg-gradient-to-b from-gray-950 from-60% to-100%',
  ]),
  '.msph-interactive-libraries__bottom-gradient': parseTwdApply([
    'msph-interactive-libraries__gradient',
    'bottom-0',
    'bg-gradient-to-t from-gray-950 from-10% to-100%',
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
    'bg-gray-600',
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
    'bg-gray-950',
  ]),
  '.msph-interactive-libraries__scroll-track': parseTwdApply([
    'absolute',
    'right-[0.35rem] top-[10px]',
    'w-[0.1rem] h-[calc(100%-20px)]',
    'bg-gray-900',
  ]),
};
