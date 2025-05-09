import { defineConfig, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      light: "var(--color-slate-200)",
      dark: "var(--color-slate-800)",
    },
  },
  presets: [
    presetWebFonts({
      fonts: {
        script: "Caveat",
      },
    }),
  ],
});
