import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts' 

module.exports = defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir:'dist/@types'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'vue-ts-component-lib',
      fileName: (format) => `vue-ts-comp-lib.${format}.js`
    },
    outDir: "dist",
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
