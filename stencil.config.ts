import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'evb-components',
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
  ],
  testing: {
    coverageReporters: [
      'json',
      'lcov',
      'text-summary'
    ],
    coverageThreshold: {
      global: {
        statements: 60,
        branches: 50,
        functions: 50,
        lines: 60
      }
    },
  }
};
