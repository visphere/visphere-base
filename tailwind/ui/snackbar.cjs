'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: snackbar.cjs
 *   Created at: 2023-08-23, 10:18:15
 *   Last updated at: 2023-08-23, 10:18:15
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
  '.msph-snackbar__list-container': parseTwdApply([
    'fixed w-full sm:max-w-[370px] h-fit',
    'bottom-0 sm:top-0 right-0',
    'z-50',
    'p-3',
    'flex flex-col justify-end sm:justify-start',
    'overflow-hidden',
  ]),
  '.msph-snackbar__list-element': parseTwdApply([
    'bg-msph-secondary-dark dark:bg-msph-primary-light',
    'text-msph-primary-light dark:text-msph-primary-dark',
    'relative',
    'rounded-lg',
    'py-3 ps-6 pe-8',
    'mt-3 sm:mt-0 sm:mb-3',
    'shadow-lg',
  ]),
  '.msph-snackbar__severity-indicator': parseTwdApply([
    'absolute',
    'w-[8px] h-[50%] max-h-[40px]',
    'left-0 top-[50%] -translate-y-[50%]',
    'rounded-r-md',
  ]),
  '.msph-snackbar__close-button': parseTwdApply([
    'absolute',
    'h-fit',
    'right-[10px] top-[50%] -translate-y-[50%]',
    'flex items-center',
    'p-1',
  ]),
  '.msph-snackbar__header': parseTwdApply([
    'font-bold',
    'leading-[17px]',
    'mb-2',
  ]),
  '.msph-snackbar__content': parseTwdApply(['text-sm', 'leading-[17px]']),
};
