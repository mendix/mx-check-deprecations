# Mendix Deprecation checker for widgets

[![NPM](https://nodei.co/npm/mx-check-deprecations.svg?downloads=true&stars=true)](https://nodei.co/npm/mx-check-deprecations/)
[![DAVID](https://david-dm.org/mendix/mx-check-deprecations.svg)](https://david-dm.org/mendix/mx-check-deprecations)
[![npm version](https://badge.fury.io/js/mx-check-deprecations.svg)](http://badge.fury.io/js/mx-check-deprecations)

**This tool is in beta**

It will check your .MPK (widget) files for possible Javascript deprecations that will break your widget in the new [Mendix 6 release](https://world.mendix.com/display/ReleaseNotes/6.0.0). Check the [Mendix 6 client API](https://apidocs.mendix.com/6/client/), as well as the [documented deprecations](https://world.mendix.com/display/refguide6/Moving+from+5+to+6#Movingfrom5to6-RemovedDeprecatedFunctionality).

## Install

Make sure you have the [latest NodeJS LTS](https://nodejs.org/en/) version installed (this checker might have problems with Node v0.10.x and v0.12.x). At the moment it is v4.2.3 LTS.

Run:

```bash
	npm install mx-check-deprecations -g
```

This will install the checker globally.

## Usage

Run it in your folder where you have widget (.mpk) files:

```bash
	mx-check-deprecations
```

Or check a single widget / list of widgets:

```bash
	mx-check-deprecations WidgetFile.mpk WidgetFile2.mpk ...
```

## Further options

```
	> mx-check-deprecations -h

================ Mendix Check Deprecations for Mendix 6 ================

Usage : mx-check-deprecations [OPTIONS] [<file.mpk> <file.mpk> <file.mpk> ... ]

Either check individual files, or the whole folder

Options:
  -d, --update-deprecations  Update the list with deprecations from Github (not implemented yet)
  -u, --update               Checks if there is an update for mx-check-deprecations
  -e, --excel                Output to Excel file : deprecations.xlsx
  -h, --help                 Shows this help screen

```

## License

The MIT License (MIT)

Copyright (c) 2015 Mendix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
