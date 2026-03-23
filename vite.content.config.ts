import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import addHmr from "./utils/plugins/add-hmr";

const browser = (process.env.BROWSER ?? "chrome") as "chrome" | "firefox";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist", browser);

const isDev = process.env.__DEV__ === "true";
const isProduction = !isDev;

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [react(), addHmr({ view: true })],
  // Don't copy public assets — the main build handles that
  publicDir: false,
  build: {
    outDir,
    // Don't wipe what the main build already output
    emptyOutDir: false,
    minify: isProduction,
    reportCompressedSize: isProduction,
    rollupOptions: {
      input: resolve(pagesDir, "content", "index.ts"),
      output: {
        // Single self-contained IIFE — no external chunks, no dynamic imports.
        // Content scripts are injected into web pages so they can't resolve
        // extension-relative paths; bundling everything inline avoids the issue.
        format: "iife",
        entryFileNames: "src/pages/content/index.js",
      },
    },
  },
});
