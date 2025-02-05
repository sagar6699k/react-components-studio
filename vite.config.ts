import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import preload from "vite-plugin-preload";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";

export default defineConfig({
  plugins: [
    react(),
    preload(),  // Enable preloading of critical assets
    imagePresets({
      thumbnail: widthPreset({
        widths: [48, 96], // Generate images at these widths
        formats: {
          webp: { quality: 50 }, // Optimize WebP images
          jpg: { quality: 70 },  // Optimize JPG images
        },
      }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Clean imports using '@'
    },
  },
  server: {
    port: 4000, // Dev server port
  },
  build: {
    minify: true,
    commonjsOptions: { include: [] },
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: process.env.NODE_ENV !== "production", // Enable source maps for debugging
  },
  envPrefix: "VITE_", // Secure environment variables
  preview: {
    port: 5173,
  },
});
