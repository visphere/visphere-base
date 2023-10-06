'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');
const pageLoaderUi = require('./ui/page-loader.cjs');
const buttonSpinnerUi = require('./ui/button-spinner.cjs');
const tooltipUi = require('./ui/tooltip.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
  landing: require('./ui/landing.cjs'),
  snackbar: require('./ui/snackbar.cjs'),
  modal: require('./ui/modal.cjs'),
  myAccounts: require('./ui/my-accounts.cjs'),
  pageLoader: pageLoaderUi.components,
  buttonSpinner: buttonSpinnerUi.components,
  tooltip: tooltipUi,
};

module.exports = ({ cdnBaseUrl, loadableModules }) => ({
  darkMode: 'class',
  content: ['./**/*.{js,cjs}'],
  theme: {
    fontFace: fontsDeclarations(cdnBaseUrl),
    colors: {
      'msph-black': 'rgb(0, 0, 0)',
      'msph-transparent': 'rgba(0, 0, 0, 0)',
      'msph-gray': {
        950: 'rgb(2, 6, 23)',
        900: 'rgb(15, 23, 42)',
        600: 'rgb(71, 85, 105)',
        300: 'rgb(203, 213, 225)',
      },
      'msph-dark': {
        900: 'rgb(7, 7, 7)',
        800: 'rgb(26, 26, 26)',
        700: 'rgb(65, 73, 75)',
      },
      'msph-light': {
        100: 'rgb(255, 255, 255)',
        200: 'rgb(245, 245, 245)',
        300: 'rgb(253, 253, 253)',
      },
      'msph-red': {
        100: 'rgb(192, 91, 91)',
        200: 'rgb(189, 57, 57)',
      },
      'msph-orange': {
        100: 'rgb(219, 164, 45)',
      },
      'msph-green': {
        100: 'rgb(86, 182, 86)',
      },
      'msph-tint': {
        100: 'rgb(224, 224, 224)',
        200: 'rgb(209, 209, 209)',
        300: 'rgb(153, 153, 153)',
        400: 'rgb(121, 121, 121)',
        500: 'rgb(106, 109, 149)',
      },
      'msph-accent': {
        1: 'rgb(211, 195, 211)',
        2: 'rgb(228, 189, 201)',
        3: 'rgb(255, 212, 205)',
        4: 'rgb(252, 231, 198)',
        5: 'rgb(248, 248, 214)',
      },
      'msph-google': {
        bg: 'rgb(255, 255, 255)',
        fg: 'rgb(124, 124, 124)',
      },
      'msph-facebook': {
        bg: 'rgb(59, 89, 152)',
        fg: 'rgb(255, 255, 255)',
      },
      'msph-x': {
        bg: 'rgb(0, 0, 0)',
        fg: 'rgb(255, 255, 255)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['FigTree', 'Arial', 'sans-serif'],
        logo: ['Maven Pro', 'Arial', 'sans-serif'],
        mono: ['Retro Gaming', 'monospaced'],
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
  safelist: [...Object.keys(tooltipUi)],
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
