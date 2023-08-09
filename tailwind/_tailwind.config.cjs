/*
 * Copyright (c) 2023 by MILOSZ GILGA
 * Silesian University of Technology
 *
 *   File name: _tailwind.config.cjs
 *   Created at: 2023-08-06, 18:31:05
 *   Last updated at: 2023-08-09, 11:08:03
 *
 *   Project name: tailwind
 *   Module name: moonsphere-base
 *
 * This project is a part of "MoonSphere" instant messenger system. This is a project
 * completing a engineers degree in computer science at Silesian University of Technology.
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

'use scrict';

const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
};

module.exports = ({ cdnBaseUrl, loadableModules }) => ({
  darkMode: 'class',
  content: ['./**/*.{js,cjs}'],
  theme: {
    fontFace: fontsDeclarations(cdnBaseUrl),
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
      },
      colors: {
        'msph-primary-light': '#fffcfc',
        'msph-primary-tint': '#ff5e4d',
        'msph-secondary-tint': '#ffe7e5',
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
