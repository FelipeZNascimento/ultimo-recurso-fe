import './styling/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import ProgressBar from 'primevue/progressbar';
import Divider from 'primevue/divider';
import DeferredContent from 'primevue/deferredcontent';

import { router } from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
});
app.component('PrimeKnob', Knob);
app.component('PrimeCard', Card);
app.component('PrimeDeferredContent', DeferredContent);
app.component('PrimeProgressBar', ProgressBar);
app.component('PrimeDivider', Divider);
app.mount('#app');
