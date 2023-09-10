'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Milosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

const components = {
  '.msph-button-spinner__container': parseTwdApply([
    'ms-2',
    'animate-button-spinner-rotate',
  ]),
  '.msph-button-spinner__container--large': parseTwdApply([
    'w-[23px] h-[23px]',
  ]),
  '.msph-button-spinner__container--small': parseTwdApply([
    'w-[18px] h-[18px]',
  ]),
  '.msph-button-spinner__path': parseTwdApply([
    'stroke-[5px]',
    'animate-button-spinner-dash',
  ]),
  '.msph-button-spinner__path--mono-color': parseTwdApply([
    'stroke-msph-primary-light',
  ]),
  '.msph-button-spinner__path--device-color': parseTwdApply([
    'stroke-msph-primary-tint dark:stroke-msph-primary-light',
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
