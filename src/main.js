import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import router from './router'
import store from './store'

import "../node_modules/primeflex/primeflex.css"             //flex
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

const app = createApp(App)

app.component('Dialog', Dialog);
app.component('Button', Button);

app.use(PrimeVue);
app.use(store).use(router).mount('#app')
