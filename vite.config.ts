import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const levels_path = "./PrototypeTeaching/src/pages/Levels/";
const tutorial_path = "./PrototypeTeaching/src/pages/Tutorial/";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TeamprojektSoSe22/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        rna: "./rna/game.html",

        // importing levels
        Level01Start: levels_path + "Level01Start.html",
        Level02Start: levels_path + "Level02Start.html",
        Level03Start: levels_path + "Level03Start.html",
        LevelStart: levels_path + "LevelStart.html",

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
