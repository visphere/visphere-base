'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

const components = {
  '.msph-button-spinner__carousel': parseTwdApply([
    'relative -left-[9999px]',
    'w-[8px] h-[8px]',
    'rounded-[5px]',
    'bg-msph-light-100',
    'text-msph-light-100',
    'shadow-[9984px_0_0_0,9999px_0_0_0,10014px_0_0_0]',
    'animate-button-spinner-carousel',
  ]),
  '.msph-button-spinner__carousel--large': parseTwdApply([
    'w-[10px] h-[10px]',
    'text-msph-tint-300 dark:text-msph-tint-400',
  ]),
  '.msph-button-spinner__carousel--modal': parseTwdApply([
    'text-msph-tint-400 dark:text-msph-tint-200',
  ]),
};

const animations = {
  'button-spinner-carousel':
    'button-spinner-carousel-keyframes 1s infinite ease-in-out',
};

const keyframes = {
  'button-spinner-carousel-keyframes': {
    '0%': {
      'box-shadow': '9984px 0 0 -1px, 9999px 0 0 1px, 10014px 0 0 -1px',
    },
    '50%': {
      'box-shadow': '10014px 0 0 -1px, 9984px 0 0 -1px, 9999px 0 0 1px',
    },
    '100%': {
      'box-shadow': '9999px 0 0 1px, 10014px 0 0 -1px, 9984px 0 0 -1px',
    },
  },
};

module.exports = {
  components,
  animations,
  keyframes,
};
