'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Milosz Gilga <https://miloszgilga.pl>
 */
const path = require('path');

module.exports = {
  tailwindGlobalSassLoader: ({
    stylesPath,
    postCssConfig,
    miniCssLoader,
    cdnBaseUrl,
  }) => ({
    test: /\.(sa|sc|c)ss$/,
    include: [path.resolve(__dirname, '..', 'tailwind'), stylesPath],
    exclude: /\/node_modules\//,
    use: [
      { loader: miniCssLoader },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: postCssConfig,
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: `$cdnBaseUrl: "${cdnBaseUrl}";`,
        },
      },
    ],
  }),
  angularCommonWebpackTsLoaders: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        compact: true,
      },
    },
    {
      loader: '@angular-devkit/build-angular/src/tools/babel/webpack-loader',
      options: {
        aot: true,
        optimize: true,
      },
    },
    { loader: '@ngtools/webpack' },
  ],
  angularCommonWebpackScssLoader: ({
    includePath,
    excludePath,
    postCssConfig,
  }) => ({
    test: /\.(sa|sc|c)ss$/,
    type: 'asset/source',
    include: includePath,
    exclude: [/\/node_modules\//, excludePath],
    use: [
      {
        loader: 'postcss-loader',
        options: postCssConfig,
      },
      { loader: 'sass-loader' },
    ],
  }),
  commonNodeModulesChunkSplitting: {
    chunks: 'all',
    maxAsyncRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          const name = module.context.match(
            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          )[1];
          return name.replace('@', '');
        },
      },
    },
  },
  webpackMomentLocalesCommonConfig: {
    localesToKeep: ['es-us', 'pl'],
  },
  webpackProxyInjector: function ({ cdnBaseUrl }, baseConfig) {
    process.env.CDN_TAILWIND_PATH = cdnBaseUrl;
    return baseConfig;
  },
};
