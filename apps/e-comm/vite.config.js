import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      mode === "analyze" &&
        visualizer({
          open: true,
        }),
    ].filter(Boolean),

    server: {
      port: 4200,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
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
