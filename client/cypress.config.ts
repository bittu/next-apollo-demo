import { defineConfig } from "cypress";
import { loadEnvConfig } from '@next/env';

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: 'https://nextjs-apollo-demo-ui.herokuapp.com/',
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false,
    experimentalSessionAndOrigin: true,
  },
});
