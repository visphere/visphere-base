'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const prettierBaseConfig = require('./_prettier-base.config.cjs');

module.exports = {
  ...prettierBaseConfig,
  importOrderParserPlugins: ['typescript', 'jsx'],
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    require.resolve('prettier-plugin-astro'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrder: [
    '^(astro*)$',
    '^(react*)$',
    '^([a-zA-Z].*)$',
    '^~/(.*)$',
    '^[./]',
    '^[../]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  astroAllowShorthand: false,
};
