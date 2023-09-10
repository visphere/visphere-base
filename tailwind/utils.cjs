'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

module.exports = {
  parseTwdApply: function (twdClasses) {
    return {
      [`@apply ${twdClasses.join(' ')}`]: {},
    };
  },
};
