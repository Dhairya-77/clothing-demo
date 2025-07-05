import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve} from 'path';
import path from 'path';
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:'/clothing-demo/',
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  historyApiFallback: true,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fallback: resolve(__dirname, 'index.html') // fallback for 404
      }
    }
  }
}));
