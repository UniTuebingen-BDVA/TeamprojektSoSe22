import { createApp } from "vue";
import Frontpage from "./Frontpage.vue";
import Game from "./rna/src/App.vue";
import legalNotice from "./common/legalNotice.vue";

import Level from "./teaching/src/views/Levels/Start.vue";
import Level1 from "./teaching/src/views/Levels/Level1.vue";
import Level2 from "./teaching/src/views/Levels/Level2.vue";
import Level3 from "./teaching/src/views/Levels/Level3.vue";

import Tutorial_BB_1 from "./teaching/src/views/Tutorial/BioBackgroundRNA1.vue";
import Tutorial_BB_2 from "./teaching/src/views/Tutorial/BioBackgroundRNA2.vue";
import Tutorial_BB_3 from "./teaching/src/views/Tutorial/BioBackgroundRNA3.vue";
import Tutorial_3 from "./teaching/src/views/Tutorial/NussinovStepperFirst.vue";
import Tutorial_Introduction from "./teaching/src/views/Tutorial/NussinovIntroduction.vue";
import Tutorial_Initialization from "./teaching/src/views/Tutorial/NussinovInitialization.vue";
import Tutorial_Recursion from "./teaching/src/views/Tutorial/NussinovRecursion.vue";
import Tutorial_Traceback from "./teaching/src/views/Tutorial/NussinovTraceback.vue";

import "./teaching/src/common/tutorial.css";
import "./teaching/src/common/style.css";

createApp(Frontpage).mount("#app");
createApp(Game).mount("#game");
createApp(legalNotice).mount("#legalNotice");

createApp(Level).mount("#level");
createApp(Level1).mount("#level1");
createApp(Level2).mount("#level2");
createApp(Level3).mount("#level3");

createApp(Tutorial_BB_1).mount("#tutorial_BB_1");
createApp(Tutorial_BB_2).mount("#tutorial_BB_2");
createApp(Tutorial_BB_3).mount("#tutorial_BB_3");
createApp(Tutorial_3).mount("#tutorial_3");

createApp(Tutorial_Introduction).mount("#tutorial_introduction");
createApp(Tutorial_Initialization).mount("#tutorial_initialization");
createApp(Tutorial_Recursion).mount("#tutorial_recursion");
createApp(Tutorial_Traceback).mount("#tutorial_traceback");
