'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const plugin = require('tailwindcss/plugin');
const fontsDeclarations = require('./font-declarations.cjs');
const buttonSpinnerUi = require('./ui/button-spinner.cjs');
const tooltipUi = require('./ui/tooltip.cjs');
const { hslaFromHsl } = require('./utils.cjs');

const availableComponents = {
  auth: require('./ui/auth.cjs'),
  common: require('./ui/common.cjs'),
  footer: require('./ui/footer.cjs'),
  landing: require('./ui/landing.cjs'),
  snackbar: require('./ui/snackbar.cjs'),
  modal: require('./ui/modal.cjs'),
  settings: require('./ui/settings.cjs'),
  myAccounts: require('./ui/my-accounts.cjs'),
  client: require('./ui/client.cjs'),
  buttonSpinner: buttonSpinnerUi.components,
  tooltip: tooltipUi,
};

const appColors = {
  'vsph-black': 'hsl(0, 0%, 0%)',
  'vsph-modal-background': 'hsla(0, 0%, 0%, 0.8)',
  'vsph-transparent': 'hsla(0, 0%, 0%, 0)',
  'vsph-gray': {
    950: 'hsl(229, 84%, 5%)',
    900: 'hsl(222, 47%, 11%)',
    600: 'hsl(215, 19%, 35%)',
    300: 'hsl(213, 27%, 84%)',
  },
  'vsph-dark': {
    900: 'hsl(210, 12%, 0%)',
    875: 'hsl(210, 12%, 4%)',
    850: 'hsl(210, 12%, 8%)',
    800: 'hsl(210, 12%, 12%)',
    750: 'hsl(210, 12%, 16%)',
    700: 'hsl(210, 12%, 20%)',
    600: 'hsl(210, 12%, 28%)',
    500: 'hsl(210, 12%, 32%)',
  },
  'vsph-light': {
    100: 'hsl(210, 12%, 100%)',
    200: 'hsl(210, 12%, 97%)',
    300: 'hsl(210, 12%, 94%)',
    400: 'hsl(210, 12%, 91%)',
  },
  'vsph-red': {
    100: 'hsl(0, 44%, 60%)',
    200: 'hsl(0, 44%, 50%)',
  },
  'vsph-orange': {
    100: 'hsl(41, 71%, 52%)',
    50: 'hsla(42, 63%, 80%, 0.2)',
  },
  'vsph-green': {
    100: 'hsl(142, 72%, 29%)',
  },
  'vsph-tint': {
    100: 'hsl(210, 12%, 88%)',
    200: 'hsl(210, 12%, 74%)',
    300: 'hsl(210, 12%, 62%)',
    400: 'hsl(210, 12%, 50%)',
    500: 'hsl(221, 18%, 44%)',
  },
  'vsph-accent': {
    1: 'hsl(207, 13%, 88%)',
    2: 'hsl(207, 76%, 92%)',
    3: 'hsl(207, 22%, 85%)',
    4: 'hsl(207, 35%, 84%)',
    5: 'hsl(207, 63%, 93%)',
  },
  'vsph-google': {
    bg: 'hsl(0, 0%, 100%)',
    fg: 'hsl(0, 0%, 49%)',
  },
  'vsph-facebook': {
    bg: 'hsl(221, 44%, 41%)',
    fg: 'hsl(0, 0%, 100%)',
  },
  'vsph-x': {
    bg: 'hsl(0, 0%, 0%)',
    fg: 'hsl(0, 0%, 100%)',
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
          '--cropper-overlay-color': appColors['vsph-light']['200'],
          '--cropper-outline-color': hslaFromHsl(
            appColors['vsph-light']['200'],
            0.8
          ),
        },
        ':root.dark': {
          '--cropper-overlay-color': appColors['vsph-dark']['900'],
          '--cropper-outline-color': hslaFromHsl(
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
