## Table of Contents

- [Future Features & Improvements](#features)
- [Installation](#installation)
- [Map](#map)

## Future Features <a name="features"></a>
1. [Range request for retries/continuing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests)
2. Playwright tests

## Installation & Running <a name="installation"></a>
1. Run `yarn install` (check your node version >= 16.6, recommended >= 18)
2. Run `yarn build && yarn dev`
3. Load Extension on Chrome
   1. Open your [chrome extensions](chrome://extensions)
   2. Turn on developer mode
   3. Load unpacked extension
   4. Select the `dist` folder in this project (after dev or build)
4. If you want to build for production, run `yarn build` before deploying.

## Map <a name="Map"></a>
- [Main page content](/src/pages/content)
- [Extension icon content](/src/pages/popup)
- [Background](/src/pages/background)


## Publishing URLS
- [Mozilla](https://addons.mozilla.org/en-US/developers/addon/gratefulgrabber/edit)
- [Chrome](https://chrome.google.com/webstore/devconsole/dcd03685-26db-4395-878f-2cdbd0bfc445/oaodbbeaklbdmjcghbkcfgmioafnjbfe/edit/listing)