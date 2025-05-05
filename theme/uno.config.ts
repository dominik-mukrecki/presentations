import { defineConfig, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        script: "Caveat",
      },
    }),
  ],
});
