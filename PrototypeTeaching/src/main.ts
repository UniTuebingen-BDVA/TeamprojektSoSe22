import { createApp } from 'vue';
import Frontpage from './Frontpage.vue';

import Level from './views/Levels/LevelStart.vue';
import Level1 from './views/Levels/Level01Start.vue';
import Level2 from './views/Levels/Level02Start.vue';
import Level3 from './views/Levels/Level03Start.vue';
import Level1_1 from './views/Levels/Level01FirstStep.vue';
import Level_right from './views/Levels/LevelCorrect.vue';
import Level_wrong from './views/Levels/LevelWrong.vue';
import Level_help from './views/Levels/LevelHelp.vue';
import score from './views/Levels/LevelScore.vue';

import Tutorial_BB_1 from './views/Tutorial/BioBackgroundRNA1.vue';
import Tutorial_BB_2 from './views/Tutorial/BioBackgroundRNA3.vue';
import Tutorial_BB_3 from './views/Tutorial/BioBackgroundRNA2.vue';
import Tutorial_3 from './views/Tutorial/NussinovStepperFirst.vue';
import Tutorial_4 from './views/Tutorial/NussinovStepperEnd.vue';
import Tutorial_Introduction from './views/Tutorial/NussinovIntroduction.vue';
import Tutorial_Initialization from './views/Tutorial/NussinovInitialization.vue';
import Tutorial_Recursion from './views/Tutorial/NussinovRecursion.vue';
import Tutorial_Traceback from './views/Tutorial/NussinovTraceback.vue';

import './common/tutorial.css';
import './common/style.css';

createApp(Frontpage).mount('#app');

createApp(Level).mount('#level');
createApp(Level1).mount('#level1');
createApp(Level2).mount('#level2');
createApp(Level3).mount('#level3');
createApp(Level1_1).mount('#level1_1');
createApp(Level_right).mount('#level_right');
createApp(Level_wrong).mount('#level_wrong');
createApp(Level_help).mount('#level_help');
createApp(score).mount('#score');

createApp(Tutorial_BB_1).mount('#tutorial_BB_1');
createApp(Tutorial_BB_2).mount('#tutorial_BB_2');
createApp(Tutorial_BB_3).mount('#tutorial_BB_3');
createApp(Tutorial_3).mount('#tutorial_3');
createApp(Tutorial_4).mount('#tutorial_4');

// Issue: Explain the Nussinov Algorithm
createApp(Tutorial_Introduction).mount('#tutorial_introduction');
createApp(Tutorial_Initialization).mount('#tutorial_initialization');
createApp(Tutorial_Recursion).mount('#tutorial_recursion');
createApp(Tutorial_Traceback).mount('#tutorial_traceback');
