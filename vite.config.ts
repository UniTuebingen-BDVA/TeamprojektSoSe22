import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

let levels_path = './PrototypeTeaching/src/pages/Levels/';
let tutorial_path = './PrototypeTeaching/src/pages/Tutorial/';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        rna:'./rna/game.html',

        // importing levels
        level01FirstStep: levels_path + 'Level01FirstStep.html',
        Level01Start: levels_path + 'Level01Start.html',
        Level02Start: levels_path + 'Level02Start.html',
        Level03Start: levels_path + 'Level03Start.html',
        LevelCorrect: levels_path + 'LevelCorrect.html',
        LevelHelp: levels_path + 'LevelHelp.html',
        LevelScore: levels_path + 'LevelScore.html',
        LevelStart: levels_path + 'LevelStart.html',
        LevelWrong: levels_path + 'LevelWrong.html',

        // importing tutorial
        BioBackgroundRNA1: tutorial_path + 'BioBackgroundRNA1.html',
        BioBackgroundRNA2: tutorial_path + 'BioBackgroundRNA2.html',
        BioBackgroundRNA3: tutorial_path + 'BioBackgroundRNA3.html',
        NussinovInitialization: tutorial_path + 'NussinovInitialization.html',
        NussinovIntroduction: tutorial_path + 'NussinovIntroduction.html',
        NussinovRecursion: tutorial_path + 'NussinovRecursion.html',
        NussinovStepperEnd: tutorial_path + 'NussinovStepperEnd.html',
        NussinovStepperFirst: tutorial_path + 'NussinovStepperFirst.html',
        NussinovTraceback: tutorial_path + 'NussinovTraceback.html'

      }
    }
  },
  plugins: [vue(), vueJsx()],
  assetsInclude: ['**/*.PNG'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
