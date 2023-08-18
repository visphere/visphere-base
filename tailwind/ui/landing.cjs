'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: landing.cjs
 *   Created at: 2023-08-18, 01:32:57
 *   Last updated at: 2023-08-18, 01:32:57
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
  '.msph-mobile-nav__button': parseTwdApply([
    'col-span-12',
    'px-4 py-2',
    'rounded-md',
    'text-center',
    'font-semibold',
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
    'rounded-md',
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
};
