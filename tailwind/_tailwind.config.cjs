'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: _tailwind.config.cjs
 *   Created at: 2023-08-06, 18:31:05
 *   Last updated at: 2023-08-14, 01:59:15
 *
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
const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
  landing: require('./ui/landing.cjs'),
  snackbar: require('./ui/snackbar.cjs'),
  modal: require('./ui/modal.cjs'),
};

module.exports = ({ cdnBaseUrl, loadableModules }) => ({
  darkMode: 'class',
  content: ['./**/*.{js,cjs}'],
  theme: {
    fontFace: fontsDeclarations(cdnBaseUrl),
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
        logo: ['Maven Pro', 'Arial', 'sans-serif'],
        mono: ['Retro Gaming', 'monospaced'],
      },
      colors: {
        'msph-primary-light': '#fffcfc',
        'msph-primary-tint': '#ff5e4d',
        'msph-secondary-tint': '#ffe7e5',
        'msph-primary-accent': '#ffedd5',
        'msph-primary-dark': '#002731',
        'msph-secondary-dark': '#003544',
        'msph-google-background': '#ffffff',
        'msph-google-foreground': '#7c7c7c',
        'msph-facebook-background': '#3b5998',
        'msph-facebook-foreground': '#ffffff',
        'msph-twitter-background': '#3698d9',
        'msph-twitter-foreground': '#ffffff',
        'msph-danger-primary': '#bd3939',
        'msph-danger-secondary': '#ffa5a5',
        'msph-warning-primary': '#dba42d',
        'msph-success-primary': '#56b656',
        'msph-success-secondary': '#abebab',
      },
      animation: {
        'loading-spinner': 'spin 0.8s cubic-bezier(.02,.97,.86,.67) infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(
        loadableModules
          .map(name => availableComponents[name])
          .reduce((res, curr) => ({ ...res, ...curr }))
      );
    }),
    require('tailwind-scrollbar-variants'),
    require('@vicgutt/tailwindcss-font-face'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
});
