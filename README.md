# Grateful Grabber

A modern, fast browser extension for seamlessly downloading entire shows from Archive.org. Built simultaneously for both Chrome and Firefox, Grateful Grabber utilizes native parallel downloads to fetch audio tracks and metadata concurrently into clean, automatically organized folders.

## Development & Installation

Getting the development server running is simple:

1. Run `npm ci` to install project dependencies.
2. Run `npm run dev:chrome` or `npm run dev:firefox` to start the hot-reloading development server.
3. Load the Extension into your browser:
    - **Chrome:** Open `chrome://extensions`, toggle **Developer Mode** in the top right, click **Load unpacked**, and select the `dist/chrome` folder.
    - **Firefox:** Open `about:debugging` -> **This Firefox**, click **Load Temporary Add-on**, and select the `dist/firefox/manifest.json` file.

## Available Scripts

- `npm run build` : Builds production bundles for both Chrome and Firefox into the `dist/` directory.
- `npm run package` : Generates perfectly bundled `.zip` files ready for deployment to the Chrome and Firefox storefronts, alongside compiling a `.zip` artifact of the React source code for Mozilla Add-on verification.
- `npm run lint` : Lints the TypeScript/React codebase.
- `npm run test` : Runs the Jest tests.

## Store Packaging & Releases

When you are ready to release a new version:

1. Bump the `version` field in `package.json`.
2. Run `npm run package`.
3. The script will safely generate the following perfectly formatted artifacts in the root directory:
   - `grateful-grabber-chrome.zip`: Upload directly to the Chrome Web Store.
   - `grateful-grabber-firefox.zip`: Upload directly to Firefox AMO.
   - `grateful-grabber-source.zip`: Upload to Firefox AMO as the required attached Source Code.

### Publishing URLs Reference
- **Mozilla AMO**: [Edit Firefox Listing](https://addons.mozilla.org/en-US/developers/addon/gratefulgrabber/edit)
- **Chrome Web Store**: [Edit Chrome Listing](https://chrome.google.com/webstore/devconsole/dcd03685-26db-4395-878f-2cdbd0bfc445/oaodbbeaklbdmjcghbkcfgmioafnjbfe/edit/listing)

## Project Architecture

- **`src/pages/content`**: The React UI component injected seamlessly into target Archive.org pages. This handles parsing complete show metadata and polling the background script for parallel download progress.
- **`src/pages/background`**: The background service worker managing native browser downloads (`chrome.downloads`) and reporting deterministic network bytes-received progress back to the UI.
- **`src/pages/popup`**: The lightweight extension dropdown UI.