'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const prettierBaseConfig = require('./_prettier-base.config.cjs');

module.exports = {
  ...prettierBaseConfig,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^(zone.*)$',
    '^(@.*)$',
    '^([a-zA-Z].*)$',
    '^rxjs$',
    '^~/(.*)$',
    '^[./]',
    '^[../]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
