import "webextension-polyfill";
import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "download") {
    chrome.downloads
      .download({
        url: message.url,
        filename: message.filename,
        saveAs: message.saveAs ?? false,
      })
      .then(sendResponse);
    return true; // Keep message channel open
  }
  if (message?.type === "check_progress") {
    Promise.all(
      message.downloadIds.map((id: number) =>
        chrome.downloads.search({ id }).then((res) => res[0])
      )
    ).then(sendResponse);
    return true; // Keep message channel open
  }
});
