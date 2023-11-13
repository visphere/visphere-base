'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

const components = {
  '.vsph-button-spinner__carousel': parseTwdApply([
    'relative -left-[9999px]',
    'w-[8px] h-[8px]',
    'rounded-[5px]',
    'bg-vsph-light-100',
    'text-vsph-light-100',
    'shadow-[9984px_0_0_0,9999px_0_0_0,10014px_0_0_0]',
    'animate-button-spinner-carousel',
  ]),
  '.vsph-button-spinner__carousel--large': parseTwdApply([
    'w-[10px] h-[10px]',
    'text-vsph-tint-300 dark:text-vsph-tint-400',
  ]),
  '.vsph-button-spinner__carousel--modal': parseTwdApply([
    'text-vsph-tint-400 dark:text-vsph-tint-200',
  ]),
  '.vsph-button-spinner__carousel--dark': parseTwdApply([
    'text-vsph-light-100 dark:text-vsph-dark-900',
  ]),
  '.vsph-button-spinner__carousel--google': parseTwdApply([
    'text-vsph-google-fg',
  ]),
  '.vsph-button-spinner__carousel--facebook': parseTwdApply([
    'text-vsph-facebook-fg',
  ]),
  '.vsph-button-spinner__carousel--x': parseTwdApply(['text-vsph-x-fg']),
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
