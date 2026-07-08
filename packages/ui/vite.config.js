/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const entry = fileURLToPath(new URL("./src/index.js", import.meta.url));
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry,
      name: "MohitUI",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") return "index.js";
        return "index.cjs";
      },
    },
    rollupOptions: {
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^react-redux($|\/)/,
        /^react-router-dom($|\/)/,
        /^react-icons($|\/)/,
      ],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-redux": "ReactRedux",
          "react-router-dom": "ReactRouterDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "react-icons": "ReactIcons",
          "react-icons/fa": "ReactIconsFa",
          "react-icons/md": "ReactIconsMd",
        },
      },
    },
  },
});
