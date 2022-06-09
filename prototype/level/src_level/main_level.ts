import { createApp } from 'vue';
import Level from './Level.vue';
import Level1 from './Level1.vue';
import Level1_1 from './Level1_1.vue';
import Level_right from './Level_right.vue';
import Level_wrong from './Level_wrong.vue';
import Level_help from './Level_help.vue';
import score from './Score.vue';


createApp(Level).mount('#level');
createApp(Level1).mount('#level1');
createApp(Level1_1).mount('#level1_1');
createApp(Level_right).mount('#level_right');
createApp(Level_wrong).mount('#level_wrong');
createApp(Level_help).mount('#level_help');
createApp(score).mount('#score');
