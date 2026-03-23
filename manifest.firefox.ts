import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `about:debugging`
 */
const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  browser_specific_settings: {
    gecko: {
      id: "grateful-grabber@chrisbendel.com",
      strict_min_version: "128.0",
      data_collection_permissions: { required: ["none"] },
    },
  },
  background: {
    scripts: ["src/pages/background/index.js"],
    type: "module",
  },
  action: {
    default_title: "Grateful Grabber",
    default_popup: "src/pages/popup/index.html",
    default_icon: "stealie-128.png",
  },
  permissions: ["downloads"],
  icons: {
    "128": "stealie-128.png",
  },
  content_scripts: [
    {
      matches: ["*://*.archive.org/*", "*://archive.org/*"],
      js: ["src/pages/content/index.js"],
      // KEY for cache invalidation
      css: ["assets/css/contentStyle<KEY>.chunk.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css", "stealie-128.png"],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
