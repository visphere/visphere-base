'use strict';
/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: font-declarations.cjs
 *   Created at: 2023-08-09, 10:26:38
 *   Last updated at: 2023-08-14, 01:59:20
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
const availableFormats = ['woff', 'woff2'];

const availableStyles = [
  { name: 'extra-ligth', weight: 200, hasItalic: true },
  { name: 'light', weight: 300, hasItalic: true },
  { name: 'regular', weight: 400, hasItalic: true },
  { name: 'medium', weight: 500, hasItalic: true },
  { name: 'semi-bold', weight: 600, hasItalic: true },
  { name: 'bold', weight: 700, hasItalic: true },
  { name: 'extra-bold', weight: 800, hasItalic: true },
  { name: 'extra-bold', weight: 800, hasItalic: true },
];

function generateSourcePaths(cdnBaseUrl, name) {
  return availableFormats.map(format => ({
    url: `${cdnBaseUrl}/static/font/${format}/pjs-${name}.${format}`,
    format,
  }));
}

function generateFontDeclarations(cdnBaseUrl) {
  return availableStyles.map(({ name, weight, hasItalic }) =>
    hasItalic
      ? ['normal', 'italic'].map(mode => ({
          fontFamily: 'Plus Jakarta Sans',
          fontStyle: mode,
          fontWeight: weight,
          src: generateSourcePaths(
            cdnBaseUrl,
            mode === 'normal' ? name : `${name}-${mode}`
          ),
        }))
      : {
          fontFamily: 'Plus Jakarta Sans',
          fontStyle: 'normal',
          fontWeight: weight,
          src: generateSourcePaths(cdnBaseUrl, name),
        }
  );
}

module.exports = cdnBaseUrl => generateFontDeclarations(cdnBaseUrl);
