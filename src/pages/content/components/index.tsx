import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content");

function mount(playerWrapper: Element) {
  const root = document.createElement("div");
  root.id = "grateful-grabber-root";
  playerWrapper.insertAdjacentElement("afterend", root);
  createRoot(root).render(<App />);
}

function waitForElement(selector: string, callback: (el: Element) => void) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
    return;
  }
  const observer = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement("#theatre-ia-wrap", mount);
