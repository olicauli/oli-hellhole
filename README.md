# oli's hellhole
an early 2000s themed personal website written using HTML, CSS, and a tiny amount of javascript.
jekyll is used to generate static site pages.

### table of contents
1. [access the website](#access-the-website)
2. [set up for testing](#set-up-the-website-for-testing-on-your-machine)
3. [deployment](#deployment)
4. [support](#support)
5. [license](#license)

## access the website

this website is currently being hosted on neocities:

https://olicauli.neocities.org/

## set up for testing

1. fork or clone the repo.
2. navigate to the folder for this repo and run the command `bundle install` to install the necessary gems. (make sure [ruby](https://www.ruby-lang.org/en/) and [bundler](https://bundler.io/) are installed.)
2. run `bundle exec jekyll serve` in your terminal in the repo's directory.
3. open `http://localhost:4000` in your browser to access the website.

the `src` folder is where all the source code is located. `dist` contains the final compiled files.

## deployment
1. run `bundle exec jekyll build` in your terminal
2. the final files will all be located in the `dist` folder. push that folder to neocities or wherever to deploy the website.

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
