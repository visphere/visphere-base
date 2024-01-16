'use strict';
/*
 * Copyright (c) 2023 by Visphere & Vsph Technologies
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

module.exports = {
  parseTwdApply: function (twdClasses) {
    return {
      [`@apply ${twdClasses.join(' ')}`]: {},
    };
  },
  hslaFromHsl: function (hslString, alpha) {
    alpha = alpha || 1;
    const hslValues = hslString.replace(/[^\d,]/g, '').split(',');
    return `hsla(${hslValues[0]}, ${hslValues[1]}%, ${hslValues[2]}%, ${alpha})`;
  },
};
