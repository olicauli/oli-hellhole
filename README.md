# oli's hellhole

an early 2000s themed personal website written using HTML, CSS, and a tiny amount of javascript.
jekyll is used to generate static site pages.

## table of contents

1. [access the website](#access-the-website)
2. [set up for development](#set-up-for-development)
3. [building the site](#building-the-site)
4. [deployment](#deployment)
5. [support](#support)
6. [license](#license)

## access the website

this website is currently being hosted on neocities:

<https://olicauli.neocities.org/>

## set up for development

### set-up

1. before proceeding, make sure:
    - [ruby](https://www.ruby-lang.org/en/) is installed
    - a ruby development environment (``ruby-dev`` or ``ruby-devel``) is installed
    - [bundler](https://bundler.io/) is installed
2. clone the repository.
3. navigate to the root folder for this repo and run the command `bundle install` to install the necessary gems.

the `/src` folder contains all the source code.

### development build

to run a test version of the website, do the following:

1. run `bundle exec jekyll serve` in your terminal in the repo's root directory.
2. open `http://localhost:4000` in your browser to access the website.

## building the site

1. run `bundle exec jekyll build` in your terminal
2. the built site files will all be located in the `/dist` folder.

## deployment

this repo uses the [Deploy to Neocities github action](https://github.com/marketplace/actions/deploy-to-neocities) to deploy to neocities on any push to the main branch! [this action can also be manually dispatched.](https://github.com/olicauli/oli-hellhole/actions/workflows/deploy.yml)

if this method of deployment does not work for you, you can [build](#build) the `/dist` folder and upload the files inside that folder manually or using a neocities cli tool.

## support

if you encounter a bug or problem with the website, you can [create a new issue](https://github.com/olicauli/oli-bot/issues).

if you would prefer to more privately report the bug, you can email me at <olicauli@pm.me>.

## license

MIT License

Copyright (c) 2022 olicauli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
