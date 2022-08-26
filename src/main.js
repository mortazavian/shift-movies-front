import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store/index";

// - - - - - - - PrimeVue Importing - - - - - - - -
import "../node_modules/primeflex/primeflex.css"; //flex
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Menubar from "primevue/menubar"; //menubar
import Button from "primevue/button"; //button
import Dialog from "primevue/dialog"; //dialog
import InputText from "primevue/inputtext"; //inputText
import Textarea from "primevue/textarea"; //inputTextArea
import Listbox from "primevue/listbox"; //listBox
import InputNumber from "primevue/inputnumber"; //inputNumber for score
import Calendar from "primevue/calendar"; //input date for year of publication

const app = createApp(App);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("TextArea", Textarea);
app.component("ListBox", Listbox);
app.component("InputNumber", InputNumber);
app.component("Calendar", Calendar);

app.use(PrimeVue);
app.use(store).use(router);

app.mount("#app");
