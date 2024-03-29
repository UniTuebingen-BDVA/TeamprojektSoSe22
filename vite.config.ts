import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const levels_path = "./teaching/src/pages/Levels/";
const tutorial_path = "./teaching/src/pages/Tutorial/";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TeamprojektSoSe22/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        rna: "./rna/game.html",
        legal: "./common/legalNotice.html",

        // importing levels
        Level01Start: levels_path + "Level1.html",
        Level02Start: levels_path + "Level2.html",
        Level03Start: levels_path + "Level3.html",
        LevelStart: levels_path + "Start.html",

        // importing tutorial
        BioBackgroundRNA1: tutorial_path + "BioBackgroundRNA1.html",
        BioBackgroundRNA2: tutorial_path + "BioBackgroundRNA2.html",
        BioBackgroundRNA3: tutorial_path + "BioBackgroundRNA3.html",
        NussinovInitialization: tutorial_path + "NussinovInitialization.html",
        NussinovIntroduction: tutorial_path + "NussinovIntroduction.html",
        NussinovRecursion: tutorial_path + "NussinovRecursion.html",
        NussinovStepperFirst: tutorial_path + "NussinovStepperFirst.html",
        NussinovTraceback: tutorial_path + "NussinovTraceback.html",
      },
    },
  },
  plugins: [vue(), vueJsx()],
  assetsInclude: ["**/*.PNG"],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
