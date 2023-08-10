/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: common.cjs
 *   Created at: 2023-08-09, 11:45:47
 *   Last updated at: 2023-08-10, 02:15:24
 *
 *   Project name: moonsphere
 *   Module name: moonsphere-base
 *
 * This project is a part of "MoonSphere" instant messenger system. This is a project
 * completing a engineers degree in computer science at Silesian University of Technology.
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
  '.msph_main-body-container': parseTwdApply([
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
  ]),
  '.msph_regular-button': parseTwdApply([
    'rounded-lg',
    'p-3 py-2.5',
    'block',
    'cursor-pointer',
    'shadow-md',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
  '.msph_small-button': parseTwdApply([
    'msph_regular-button',
    'pt-1.5 pb-2',
    'text-sm',
    'shadow-md',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ]),
};