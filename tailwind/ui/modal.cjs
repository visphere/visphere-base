'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: modal.cjs
 *   Created at: 2023-08-24, 02:51:04
 *   Last updated at: 2023-08-24, 02:51:04
 *
 *   Project name: moonsphere
 *   Module name: moonsphere-base
 *
 * This project is a part of "MoonSphere" instant messenger system. This system is a part of
 * completing an engineers degree in computer science at Silesian University of Technology.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */
const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph-modal__container': parseTwdApply([
    'fixed',
    'top-0 left-0',
    'w-full min-h-screen h-screen',
    'z-50',
  ]),
  '.msph-modal__background': parseTwdApply([
    'absolute',
    'w-full h-full',
    'bg-black bg-opacity-75',
  ]),
  '.msph-modal__window-container': parseTwdApply([
    'absolute',
    'w-full h-full',
    'flex justify-center',
    'pt-3 md:pt-0 md:mt-28 px-3',
    'shadow-md',
  ]),
  '.msph-modal__window-wrapper': parseTwdApply([
    'relative',
    'w-full h-fit',
    'rounded-xl',
    'pt-8 pb-6 px-6 sm:px-8',
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
  ]),
  '.msph-modal__window-notch': parseTwdApply([
    'absolute',
    'top-0 left-[50%] -translate-x-[50%]',
    'rounded-b-md',
    'h-[10px] w-[80px]',
    'bg-msph-primary-tint',
  ]),
  '.msph-modal__window-x-button': parseTwdApply([
    'absolute',
    'top-[14px] right-[14px]',
    'p-1',
    'flex',
  ]),
  '.msph-modal__window-header': parseTwdApply([
    'text-3xl text-center',
    'font-bold',
    'mb-4',
  ]),
  '.msph-modal__window-paragraph': parseTwdApply([
    'leading-5',
    'sm:max-w-[80%]',
    'text-center',
    'mx-auto',
    'text-gray-500 dark:text-gray-400',
  ]),
  '.msph-modal__window-buttons-container': parseTwdApply([
    'flex justify-center',
  ]),
  '.msph-modal__close-button': parseTwdApply([
    'msph_small-button',
    'bg-transparent',
    'shadow-none',
    'border border-msph-primary-tint dark:border-msph-primary-light',
    'text-msph-primary-tint dark:text-msph-primary-light',
  ]),
  '.msph-captcha-modal__skeleton-loader': parseTwdApply([
    'absolute',
    'w-full h-full',
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'animate-pulse',
    'rounded-md',
  ]),
};
