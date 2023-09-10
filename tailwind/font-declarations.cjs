'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
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
  {
    name: 'Retro Gaming',
    cdnDir: 'rg',
    formats: ['woff', 'woff2'],
    styles: [{ id: 'regular', weight: 400, hasItalic: false }],
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
