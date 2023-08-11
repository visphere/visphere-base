/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * Silesian University of Technology
 *
 *   File name: auth.cjs
 *   Created at: 2023-08-09, 23:44:58
 *   Last updated at: 2023-08-11, 20:38:05
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

'use scrict';

const { parseTwdApply } = require('../utils.cjs');

module.exports = {
  '.msph_auth-container': parseTwdApply([
    'w-full',
    'md:rounded-lg',
    'md:shadow-md',
    'md:mx-5',
  ]),
  '.msph_auth-header': parseTwdApply([
    'mt-4 mb-2',
    'text-3xl',
    'font-bold',
    'text-center',
    'text-msph-secondary-dark dark:text-msph-primary-light',
    'md:text-msph-primary-light md:dark:text-msph-secondary-dark',
  ]),
  '.msph_container-inv-colors': parseTwdApply([
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'text-msph-primary-dark dark:text-msph-primary-light',
    'md:bg-msph-primary-dark md:dark:bg-msph-primary-light',
    'md:text-msph-primary-light md:dark:text-msph-primary-dark',
  ]),
  '.msph_google-oauth-button': parseTwdApply([
    'msph_regular-button',
    'font-bold',
    'bg-msph-google-background',
    'text-msph-google-foreground',
  ]),
  '.msph_facebook-oauth-button': parseTwdApply([
    'msph_regular-button',
    'bg-msph-facebook-background',
    'text-msph-facebook-foreground',
  ]),
  '.msph_twitter-oauth-button': parseTwdApply([
    'msph_regular-button',
    'bg-msph-twitter-background',
    'text-msph-twitter-foreground',
  ]),
  '.msph_auth-input': parseTwdApply([
    'rounded-lg',
    'p-3 py-2.5',
    'shadow-md',
    'border-b-2 border-b-msph-primary-tint',
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
  ]),
  '.msph_auth-checkbox': parseTwdApply([
    'form-checkbox',
    'rounded',
    'w-[18px] h-[18px]',
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
    'cursor-pointer',
    'hover:checked:bg-msph-primary-tint',
    'border-gray-500 dark:border-transparent',
    'md:border-transparent md:dark:border-gray-500',
    'focus:outline-black focus:checked:bg-msph-primary-tint',
    'checked:bg-msph-primary-tint checked:border-none dark:checked:bg-msph-primary-tint',
  ]),
  '.msph_auth-invalid-input': parseTwdApply([
    'border-2',
    'text-msph-danger-primary md:text-msph-danger-secondary',
    'dark:text-msph-danger-secondary dark:md:text-msph-danger-primary',
    'border-msph-danger-primary md:border-msph-danger-secondary',
    'dark:border-msph-danger-secondary dark:md:border-msph-danger-primary',
  ]),
  '.msph_auth-invalid-text': parseTwdApply([
    'text-msph-danger-primary md:text-msph-danger-secondary',
    'dark:text-msph-danger-secondary dark:md:text-msph-danger-primary',
  ]),
  '.msph_auth-link': parseTwdApply([
    'cursor-pointer',
    'text-msph-primary-tint',
    'font-medium',
    'hover:underline',
  ]),
  '.msph_auth-separator': parseTwdApply([
    'border-gray-300 dark:border-gray-500',
    'md:border-gray-500 md:dark:border-gray-300',
  ]),
  '.msph_login-form-edit-button': parseTwdApply([
    'text-sm',
    'text-msph-primary-tint dark:text-gray-400',
    'md:text-gray-400 md:dark:text-msph-primary-tint',
    'hover:bg-msph-secondary-tint dark:hover:bg-msph-primary-dark',
    'md:hover:bg-gray-600 md:dark:hover:bg-msph-secondary-tint',
    'px-1.5 pt-0.5 pb-1',
    'rounded-md',
  ]),
  '.msph_form-out-text': parseTwdApply([
    'text-sm',
    'mt-1',
    'text-gray-500 dark:text-gray-400',
    'sm:text-gray-400 sm:dark:text-gray-500',
  ]),
  '.msph_auth-info-card-container': parseTwdApply([
    'rounded-md',
    'text-sm',
    'p-3',
    'leading-4',
    'text-opacity-80',
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'text-msph-primary-tint dark:text-gray-300',
    'md:bg-msph-secondary-dark md:dark:bg-msph-secondary-tint',
    'md:text-gray-300 md:dark:text-msph-primary-tint',
  ]),
  '.msph_auth-password-strenght-meter-color': parseTwdApply([
    'bg-msph-secondary-tint dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-msph-secondary-tint',
  ]),
  '.msph_auth-password-strenght-meter-bg': parseTwdApply([
    'bg-msph-primary-light dark:bg-msph-primary-dark',
    'md:bg-msph-primary-dark md:dark:bg-msph-primary-light',
  ]),
  '.msph_auth-single-select-spinner-list-container': parseTwdApply([
    'absolute',
    'left-0 bottom-full',
    'w-full max-h-[200px]',
    'mb-1 p-1.5',
    'rounded-md',
    'border-b-2 border-t-2 border-msph-primary-tint',
    'overflow-y-auto',
    'bg-white dark:bg-msph-secondary-dark',
    'md:bg-msph-secondary-dark md:dark:bg-white',
    'scrollbar-rounded',
    'scrollbar-thumb:bg-msph-secondary-tint dark:scrollbar-thumb:bg-msph-primary-dark',
    'md:scrollbar-thumb:bg-msph-primary-dark md:dark:scrollbar-thumb:bg-msph-secondary-tint',
  ]),
  '.msph_auth-single-select-spinner-list-element': parseTwdApply([
    'rounded-md',
    'px-2 py-1 pb-1.5',
    'leading-5',
    'w-full',
  ]),
};
