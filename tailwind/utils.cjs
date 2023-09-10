'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Milosz Gilga <https://miloszgilga.pl>
 */

module.exports = {
  parseTwdApply: function (twdClasses) {
    return {
      [`@apply ${twdClasses.join(' ')}`]: {},
    };
  },
};
