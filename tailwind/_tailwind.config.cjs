'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');
const buttonSpinnerUi = require('./ui/button-spinner.cjs');
const tooltipUi = require('./ui/tooltip.cjs');
const { rgbaFromRgb } = require('./utils.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
  landing: require('./ui/landing.cjs'),
  snackbar: require('./ui/snackbar.cjs'),
  modal: require('./ui/modal.cjs'),
  settings: require('./ui/settings.cjs'),
  myAccounts: require('./ui/my-accounts.cjs'),
  buttonSpinner: buttonSpinnerUi.components,
  tooltip: tooltipUi,
};

const appColors = {
  'vsph-black': 'rgb(0, 0, 0)',
  'vsph-modal-background': 'rgb(0, 0, 0, .5)',
  'vsph-transparent': 'rgba(0, 0, 0, 0)',
  'vsph-gray': {
    950: 'rgb(2, 6, 23)',
    900: 'rgb(15, 23, 42)',
    600: 'rgb(71, 85, 105)',
    300: 'rgb(203, 213, 225)',
  },
  'vsph-dark': {
    900: 'rgb(7, 7, 7)',
    875: 'rgb(14, 14, 14)',
    850: 'rgb(22, 22, 22)',
    800: 'rgb(26, 26, 26)',
    750: 'rgb(38, 41, 43)',
    700: 'rgb(64, 72, 74)',
  },
  'vsph-light': {
    100: 'rgb(255, 255, 255)',
    200: 'rgb(240, 240, 240)',
    300: 'rgb(253, 253, 253)',
    400: 'rgb(230, 230, 230)',
  },
  'vsph-red': {
    100: 'rgb(192, 91, 91)',
    200: 'rgb(189, 57, 57)',
  },
  'vsph-orange': {
    100: 'rgb(219, 164, 45)',
    50: 'rgb(236, 216, 171, .2)',
  },
  'vsph-green': {
    100: 'rgb(86, 182, 86)',
  },
  'vsph-tint': {
    100: 'rgb(224, 224, 224)',
    200: 'rgb(209, 209, 209)',
    300: 'rgb(153, 153, 153)',
    400: 'rgb(121, 121, 121)',
    500: 'rgb(72, 157, 129)',
    600: 'rgb(110, 167, 153)',
    700: 'rgb(140, 194, 185)',
  },
  'vsph-accent': {
    1: 'rgb(247, 247, 226)',
    2: 'rgb(202, 247, 241)',
    3: 'rgb(207, 224, 218)',
    4: 'rgb(185, 224, 218)',
    5: 'rgb(224, 248, 245)',
  },
  'vsph-google': {
    bg: 'rgb(255, 255, 255)',
    fg: 'rgb(124, 124, 124)',
  },
  'vsph-facebook': {
    bg: 'rgb(59, 89, 152)',
    fg: 'rgb(255, 255, 255)',
  },
  'vsph-x': {
    bg: 'rgb(0, 0, 0)',
    fg: 'rgb(255, 255, 255)',
  },
};

module.exports = ({ cdnBaseUrl, loadableModules }) => ({
  darkMode: 'class',
  content: ['./**/*.{js,cjs}', './css/custom.css'],
  theme: {
    fontFace: fontsDeclarations(cdnBaseUrl),
    colors: appColors,
    extend: {
      fontFamily: {
        sans: ['FigTree', 'Arial', 'sans-serif'],
        mono: ['Retro Gaming', 'monospaced'],
        logo: ['Alkatra', 'sans-serif'],
      },
      animation: {
        ...buttonSpinnerUi.animations,
      },
      keyframes: {
        ...buttonSpinnerUi.keyframes,
      },
    },
  },
  safelist: [...Object.keys(tooltipUi)],
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        ':root': {
          '--cropper-overlay-color': appColors['vsph-light']['100'],
          '--cropper-outline-color': rgbaFromRgb(
            appColors['vsph-light']['100'],
            0.8
          ),
        },
        ':root.dark': {
          '--cropper-overlay-color': appColors['vsph-dark']['900'],
          '--cropper-outline-color': rgbaFromRgb(
            appColors['vsph-dark']['900'],
            0.8
          ),
        },
      });
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
