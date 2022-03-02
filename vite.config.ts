import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:3001",
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: "/src"
      }
    }
  })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
