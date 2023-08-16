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
const fontsConfig = [
  {
    name: 'Plus Jakarta Sans',
    cdnDir: 'pjs',
    formats: ['woff', 'woff2'],
    styles: [
      { id: 'extra-ligth', weight: 200, hasItalic: true },
      { id: 'light', weight: 300, hasItalic: true },
      { id: 'regular', weight: 400, hasItalic: true },
      { id: 'medium', weight: 500, hasItalic: true },
      { id: 'semi-bold', weight: 600, hasItalic: true },
      { id: 'bold', weight: 700, hasItalic: true },
      { id: 'extra-bold', weight: 800, hasItalic: true },
    ],
  },
  {
    name: 'Maven Pro',
    cdnDir: 'mvnp',
    formats: ['woff', 'woff2'],
    styles: [
      { id: 'regular', weight: 400, hasItalic: false },
      { id: 'medium', weight: 500, hasItalic: false },
      { id: 'semi-bold', weight: 600, hasItalic: false },
      { id: 'bold', weight: 700, hasItalic: false },
      { id: 'extra-bold', weight: 800, hasItalic: false },
      { id: 'black', weight: 900, hasItalic: false },
    ],
  },
];

function generateSourcePaths(cdnBaseUrl, cdnDir, formats, id) {
  return formats.map(format => ({
    url: `${cdnBaseUrl}/${format}/${cdnDir}-${id}.${format}`,
    format,
  }));
}

function generateFontDeclarations(cdnBaseUrl) {
  return fontsConfig
    .map(({ name, cdnDir, formats, styles }) => {
      const cdnFontUrl = `${cdnBaseUrl}/static/font/${cdnDir}`;
      return styles.map(({ id, weight, hasItalic }) =>
        hasItalic
          ? ['normal', 'italic'].map(mode => ({
              fontFamily: name,
              fontStyle: mode,
              fontWeight: weight,
              src: generateSourcePaths(
                cdnFontUrl,
                cdnDir,
                formats,
                mode === 'normal' ? id : `${id}-${mode}`
              ),
            }))
          : {
              fontFamily: name,
              fontStyle: 'normal',
              fontWeight: weight,
              src: generateSourcePaths(cdnFontUrl, cdnDir, formats, id),
            }
      );
    })
    .reduce((acc, current) => acc.concat(current));
}

module.exports = cdnBaseUrl => generateFontDeclarations(cdnBaseUrl);
