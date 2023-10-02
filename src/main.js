import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';

const app = createApp(App);

app.mount("#app"); 

// ты пытался подключить плагин глобально, но он в отличие от PrimeVue на всем проекте не нужен
// поэтому его лучше держать на уровне компонента. + settings можно у каждой карты держать свой
app.use(PrimeVue); 

app.component('Dialog', Dialog); // eslint-disable-line
