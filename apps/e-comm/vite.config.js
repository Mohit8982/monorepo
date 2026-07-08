import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),

      mode === "analyze" &&
        visualizer({
          open: true,
        }),
    ].filter(Boolean),

    server: {
      port: 4200,
    },

    // IMPORTANT for deployment
    base: "/",

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react-router")) return "router";
            if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) {
              return "redux";
            }
            if (id.includes("react-icons")) return "icons";
          },
        },
      },
    },
  };
});
