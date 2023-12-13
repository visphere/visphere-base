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
  rgbaFromRgb: function (rgbString, alpha) {
    alpha = alpha || 1;
    const match = rgbString.match(/\d+/g);
    if (match && match.length === 3) {
      return `rgba(${match[0]}, ${match[1]}, ${match[2]}, ${alpha})`;
    }
    return rgbString;
  },
};
