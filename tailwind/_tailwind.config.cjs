'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');
const pageLoaderUi = require('./ui/page-loader.cjs');
const buttonSpinnerUi = require('./ui/button-spinner.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
  landing: require('./ui/landing.cjs'),
  snackbar: require('./ui/snackbar.cjs'),
  modal: require('./ui/modal.cjs'),
  pageLoader: pageLoaderUi.components,
  buttonSpinner: buttonSpinnerUi.components,
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
        'msph-x-background': '#000000',
        'msph-x-foreground': '#ffffff',
        'msph-danger-primary': '#bd3939',
        'msph-danger-secondary': '#ffa5a5',
        'msph-warning-primary': '#dba42d',
        'msph-success-primary': '#56b656',
        'msph-success-secondary': '#abebab',
      },
      animation: {
        ...pageLoaderUi.animations,
        ...buttonSpinnerUi.animations,
      },
      keyframes: {
        ...pageLoaderUi.keyframes,
        ...buttonSpinnerUi.keyframes,
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
