/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 * Silesian University of Technology
 *
 *    File name: _tailwind.config.js
 *    Last modified: 7/24/23, 11:25 PM
 *    Project name: moonsphere
 *    Module name: moonsphere-base
 *
 * This project is a part of "MoonSphere" instant messenger system. This is a project completing a
 * engineers degree in computer science at Silesian University of Technology.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

"use strict";

module.exports = ({ content, plugins }) => ({
    darkMode: "class",
    content,
    plugins,
    theme: {
        extend: {
            fontFamily: {
                "sans": [ "Plus Jakarta Sans", "Arial", "sans-serif" ],
            },
            colors: {
                "msph-primary-light": "#fffcfc",
                "msph-primary-tint": "#ff5e4d",
                "msph-secondary-tint": "#ffe7e5",
                "msph-primary-dark": "#002731",
                "msph-secondary-dark": "#003544",
                "msph-google-background": "#ffffff",
                "msph-google-foreground": "#7c7c7c",
                "msph-facebook-background": "#3b5998",
                "msph-facebook-foreground": "#ffffff",
                "msph-twitter-background": "#3698d9",
                "msph-twitter-foreground": "#ffffff",
                "msph-danger-primary": "#bd3939",
                "msph-danger-secondary": "#ffa5a5",
            },
        },
    },
});

