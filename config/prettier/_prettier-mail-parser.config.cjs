'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const prettierBaseConfig = require('./_prettier-base.config.cjs');

module.exports = {
  ...prettierBaseConfig,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^(@.*)$', '^([a-zA-Z].*)$', '^[./]', '^[../]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
