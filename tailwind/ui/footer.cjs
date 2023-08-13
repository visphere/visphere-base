'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: footer.cjs
 *   Created at: 2023-08-10, 00:51:18
 *   Last updated at: 2023-08-14, 01:59:09
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
  '.msph_footer__container': parseTwdApply([
    'p-5 md:p-5 lg:p-10',
    'border-t-2 border-gray-300 dark:border-gray-700',
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
  ]),
  '.msph_footer__select-list-button': parseTwdApply([
    'border border-gray-500',
    'px-2.5 py-1.5',
    'rounded-md',
    'flex items-center',
    'font-medium dark:font-normal',
  ]),
  '.msph_footer__select-list-container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-max max-h-[200px]',
    'mb-1 p-1.5',
    'border border-gray-500',
    'rounded-md',
    'flex flex-col gap-1',
    'overflow-y-auto',
    'font-medium dark:font-normal',
  ]),
  '.msph_footer__select-list-element': parseTwdApply([
    'flex items-center',
    'rounded-md',
    'w-full',
    'cursor-pointer',
    'p-1 pb-1.5 px-2',
  ]),
  '.msph_footer__select-list-element--active': parseTwdApply([
    'bg-msph-primary-tint',
    'text-msph-primary-light',
    'pointer-events-none',
    'hover:text-msph-primary-dark dark:hover:bg-gray-600',
  ]),
  '.msph_footer__link': parseTwdApply([
    'hover:underline',
    'block',
    'mb-1',
    'dark:font-light',
    'leading-[22px]',
  ]),
  '.msph_copy-footer__container': parseTwdApply([
    'flex flex-col md:flex-row',
    'justify-center md:justify-between items-center',
    'gap-y-5',
  ]),
  '.msph_copy-footer__rights': parseTwdApply([
    'flex flex-col md:flex-row',
    'gap-y-2 md:gap-y-0 gap-x-7',
    'text-sm',
    'font-light',
  ]),
  '.msph_copy-footer__open-app-button': parseTwdApply([
    'msph_small-button',
    'bg-msph-primary-tint',
    'text-msph-primary-light',
    'h-fit w-full md:w-fit',
    'text-center',
  ]),
};
