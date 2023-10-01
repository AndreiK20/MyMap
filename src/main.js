import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
// import Button from 'primevue/button';
// import YmapPlugin from "vue-yandex-maps";


// const settings = {
//   apiKey: "dbce3460-d1df-40bb-a4fe-b12ffed9ac66",
//   lang: "ru_RU",
//   coordorder: "latlong",
//   enterprise: false,
//   version: "2.1",
//   use(YmapPlugin, settings)
// };

const app = createApp(App);
app.mount("#app"); 
app.use(PrimeVue); 
app.component('Dialog', Dialog); // eslint-disable-line
 