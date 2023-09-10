'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
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
    'flex justify-center items-center',
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
  '.msph_ratio-container': parseTwdApply([
    'mx-auto',
    'max-w-[1260px]',
    'w-full',
  ]),
};
