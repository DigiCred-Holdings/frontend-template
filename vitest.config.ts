/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {},
    resolve: {
      alias: {},
    },
    plugins: [],
  }),
);
