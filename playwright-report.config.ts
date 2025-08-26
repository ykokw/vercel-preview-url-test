import { defineConfig
  
 } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["github"], ["html"], ["json", { outputFile: "results.json" }]],
});
