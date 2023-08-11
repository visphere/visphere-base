/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: webpack-utils.cjs
 *   Created at: 2023-08-06, 18:31:05
 *   Last updated at: 2023-08-11, 20:38:42
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

'use strict';

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
