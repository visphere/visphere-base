/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: footer.cjs
 *   Created at: 2023-08-10, 00:51:18
 *   Last updated at: 2023-08-11, 20:38:18
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

'use scrict';

const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph_footer-container': parseTwdApply([
    'p-5 md:p-5 lg:p-10',
    'border-t-2 border-gray-300 dark:border-gray-700',
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
  ]),
  '.msph_footer-select-list-container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-max max-h-[200px]',
    'mb-1 p-1.5',
    'border border-gray-500',
    'rounded-md',
    'flex flex-col gap-1',
    'overflow-y-auto',
    'font-medium dark:font-normal',
    'bg-msph-primary-light dark:bg-msph-primary-dark',
  ]),
  '.msph_footer-select-list-element': parseTwdApply([
    'flex items-center',
    'rounded-md',
    'w-full',
    'cursor-pointer',
    'p-1 pb-1.5 px-2',
    'hover:bg-gray-300 dark:hover:bg-gray-600',
  ]),
  '.msph_footer-select-list-element-active': parseTwdApply([
    'bg-msph-primary-tint',
    'text-msph-primary-light',
    'pointer-events-none',
    'hover:text-msph-primary-dark dark:hover:bg-gray-600',
  ]),
};
