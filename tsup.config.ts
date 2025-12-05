import { defineConfig } from 'tsup';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  onSuccess: async () => {
    // Copy .wasm file to dist
    const wasmFile = 'ermis_call_node_wasm_bg.wasm';
    const srcWasm = path.join(__dirname, 'src', wasmFile);
    const distWasm = path.join(__dirname, 'dist', wasmFile);
    
    if (fs.existsSync(srcWasm)) {
      if (!fs.existsSync(path.join(__dirname, 'dist'))) {
         fs.mkdirSync(path.join(__dirname, 'dist'));
      }
      fs.copyFileSync(srcWasm, distWasm);
      console.log('✅ Copied .wasm file to dist folder');
    } else {
      console.warn('⚠️ WARNING: .wasm file not found in src folder.');
    }
  },
});