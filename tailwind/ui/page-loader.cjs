'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

const components = {
  '.vsph-page-loader__container': parseTwdApply([
    'flex justify-center items-center',
    'w-[150px] h-[150px]',
  ]),
  '.vsph-page-loader__planet': parseTwdApply([
    'relative',
    'w-[100%] h-[100%]',
    'top-[50%]',
    'after:content-[""]',
    'after:absolute',
    'after:block',
    'after:w-[38%] after:h-[38%]',
    'after:rounded-full',
    'after:bg-vsph-tint-500',
    'after:top-[50%] after:left-[50%]',
    'after:-translate-x-[50%] -translate-y-[50%]',
    'after:origin-center',
    'after:animate-page-loader-planet',
  ]),
  '.vsph-page-loader__satellite': parseTwdApply([
    'absolute',
    'rounded-full',
    'bg-vsph-tint-500',
    'top-[50%] left-[50%]',
    'w-[20%] h-[20%]',
  ]),
  '.vsph-page-loader__satellite--first': parseTwdApply([
    'animate-page-loader-satellite-1',
  ]),
  '.vsph-page-loader__satellite--second': parseTwdApply([
    'animate-page-loader-satellite-2',
  ]),
  '.vsph-page-loader__satellite--third': parseTwdApply([
    'animate-page-loader-satellite-3',
  ]),
  '.vsph-page-loader__ring': parseTwdApply([
    'absolute',
    'w-[65%] h-[65%]',
    'rounded-full',
    'border-[0.5px]',
    'opacity-20',
    'bg-vsph-transparent',
    'border-vsph-dark-700 dark:border-vsph-tint-300',
    'top-[50%] left-[50%]',
    '-translate-x-[50%] -translate-y-[50%]',
    'scale-[2]',
    'animate-page-loader-ring',
  ]),
};

const animations = {
  'page-loader-planet': 'page-loader-planet-keyframes 14s linear infinite',
  'page-loader-ring': 'page-loader-ring-keyframes 500ms',
  'page-loader-satellite-1':
    'page-loader-satellite-keyframes 4s linear infinite',
  'page-loader-satellite-2':
    'page-loader-satellite-keyframes 5s linear infinite',
  'page-loader-satellite-3':
    'page-loader-satellite-keyframes 6s linear infinite',
};

const keyframes = {
  'page-loader-planet-keyframes': {
    '0%, 100%': {
      transform: 'translate(-50%, -50%) scale(1.5)',
    },
    '50%': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  'page-loader-ring-keyframes': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(0)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(2)',
    },
  },
  'page-loader-satellite-keyframes': {
    '0%': {
      transform:
        'translate(-50%, -50%) rotate(0deg) translateY(0) rotate(0deg) rotate(0deg)',
    },
    '10%': {
      transform:
        'translate(-50%, -50%) rotate(180deg) translateY(-300%) rotate(-180deg) rotate(180deg)',
    },
    '25%': {
      transform:
        'translate(-50%, -50%) rotate(360deg) translateY(-305%) rotate(-360deg) rotate(360deg)',
    },
    '50%': {
      transform:
        'translate(-50%, -50%) rotate(720deg) translateY(-305%) rotate(720deg) rotate(720deg)',
    },
    '75%': {
      transform:
        'translate(-50%, -50%) rotate(1080deg) translateY(-305%) rotate(-1080deg) rotate(1080deg)',
    },
    '90%': {
      transform:
        'translate(-50%, -50%) rotate(1260deg) translateY(-300%) rotate(-1260deg) rotate(1260deg)',
    },
    '100%': {
      transform:
        'translate(-50%, -50%) rotate(1440deg) translateY(0) rotate(-1440deg) rotate(1440deg)',
    },
  },
};

module.exports = {
  components,
  animations,
  keyframes,
};
