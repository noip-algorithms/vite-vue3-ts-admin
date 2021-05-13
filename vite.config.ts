import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { resolve } = require("path");

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src")
    },
  },
  optimizeDeps: {
    exclude: ["vuex"],
  },
  build:{
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser"
  },
  server: {
    cors: true,
    open: true,
    host: "localhost",
    proxy: {
      "^/api": {
        target: "http://localhost:5000/admin",
        changeOrigin: true,   // 
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
