import { createApp } from 'vue';
import Tutorial_1 from './Tutorial_1.vue';
import Tutorial_2 from './Tutorial_2.vue';
import Tutorial_3 from './Tutorial_3.vue';
import Tutorial_4 from './Tutorial_4.vue';
import '../../src/assets/tutorial.css';

//reduces requires files, but returns vue errors
createApp(Tutorial_1).mount('#tutorial_1');
createApp(Tutorial_2).mount('#tutorial_2');
createApp(Tutorial_3).mount('#tutorial_3');
createApp(Tutorial_4).mount('#tutorial_4');