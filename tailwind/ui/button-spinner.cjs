'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: button-spinner.cjs
 *   Created at: 2023-09-02, 02:33:11
 *   Last updated at: 2023-09-02, 02:37:29
 *   File name: button-spinner.cjs
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

const components = {
  '.msph-button-spinner__container': parseTwdApply([
    'w-[23px] h-[23px] ms-2 animate-button-spinner-rotate',
  ]),
  '.msph-button-spinner__path': parseTwdApply([
    'stroke-msph-primary-light',
    'stroke-[5px]',
    'animate-button-spinner-dash',
  ]),
};

const animations = {
  'button-spinner-rotate': 'button-spinner-rotate-keyframes 2s linear infinite',
  'button-spinner-dash':
    'button-spinner-dash-keyframes 1.5s ease-in-out infinite',
};

const keyframes = {
  'button-spinner-rotate-keyframes': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  'button-spinner-dash-keyframes': {
    '0%': {
      'stroke-dasharray': '1, 150',
      'stroke-dashoffset': '0',
    },
    '50%': {
      'stroke-dasharray': '90, 150',
      'stroke-dashoffset': '-35',
    },
    '100%': {
      'stroke-dasharray': '90, 150',
      'stroke-dashoffset': '-124',
    },
  },
};

module.exports = {
  components,
  animations,
  keyframes,
};
