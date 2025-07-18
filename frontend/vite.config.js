import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  define: {
    global: 'globalThis',
    process: {
      env: {},
    },
  },
  optimizeDeps: {
    include: ['@solana/web3.js', '@solana/wallet-adapter-base', '@solana/wallet-adapter-react', '@coral-xyz/anchor'],
  },
  // Configure environment variables
  envPrefix: 'VITE_',
  // Log mode for debugging
  logLevel: mode === 'mock' ? 'info' : 'warn',
}));
