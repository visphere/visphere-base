'use strict';
/*
 * Copyright (c) 2023 by MoonSphere Systems
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const { parseTwdApply } = require('../utils.cjs');

const arrowDirections = ['top', 'right', 'bottom', 'left'];
const animationMap = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const generateTooltipArrowStyles = theme =>
  arrowDirections.reduce((acc, dir) => {
    const dirLetter = dir.charAt(0);
    return {
      ...acc,
      [`.tippy-box[data-theme~="${theme}"][data-placement^="${dir}"] > .tippy-arrow`]:
        parseTwdApply([
          `before:border-${dirLetter}-msph-dark-900`,
          `before:dark:border-${dirLetter}-msph-light-100`,
        ]),
    };
  }, {});

const generateTooltipAnimationStyles = name =>
  Object.keys(animationMap).reduce(
    (acc, key) => ({
      ...acc,
      [`.tippy-box[data-animation="${name}"][data-placement^="${key}"]`]:
        parseTwdApply([`origin-${animationMap[key]}`]),
    }),
    {}
  );

module.exports = {
  '.tippy-box': parseTwdApply([
    'relative',
    'rounded-md',
    'text-center',
    'pt-1.5 pb-2 px-2',
    'leading-[15px]',
    'shadow-lg',
    'text-sm',
  ]),
  '.tippy-box[data-theme~="msph-auth"]': parseTwdApply([
    'bg-msph-dark-900 dark:bg-msph-light-100',
    'text-msph-light-100 dark:text-msph-dark-900',
  ]),
  '.tippy-arrow': parseTwdApply([
    'w-[16px] h-[16px]',
    'before:absolute',
    'before:border-msph-transparent',
  ]),
  '.tippy-box[data-placement^="top"] > .tippy-arrow': parseTwdApply([
    'bottom-0',
    'before:left-0 before:-bottom-[7px]',
    'before:border-t-8 before:border-r-8 before:border-l-8',
    'before:origin-[center_top]',
  ]),
  '.tippy-box[data-placement^="bottom"] > .tippy-arrow': parseTwdApply([
    'top-0',
    'before:left-0 before:-top-[7px]',
    'before:border-r-8 before:border-b-8 before:border-l-8',
    'before:origin-[center_bottom]',
  ]),
  '.tippy-box[data-placement^="left"] > .tippy-arrow': parseTwdApply([
    'right-0',
    'before:-right-[7px]',
    'before:border-t-8 before:border-b-8 before:border-l-8',
    'before:origin-[center_left]',
  ]),
  '.tippy-box[data-placement^="right"] > .tippy-arrow': parseTwdApply([
    'left-0',
    'before:bottom-0 before:-left-[7px]',
    'before:border-r-8 before:border-t-8 before:border-b-8',
    'before:origin-[center_right]',
  ]),
  ...generateTooltipArrowStyles('msph-auth'),
  ...generateTooltipAnimationStyles('scale-subtle'),
  '.tippy-box[data-animation="scale-subtle"][data-state="hidden"]':
    parseTwdApply(['scale-[0.8]', 'opacity-0']),
};
