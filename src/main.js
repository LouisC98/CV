import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

// Icones FontAwesome
import "./assets/fontawesome/css/all.min.css"

// SASS
import "./assets/sass/main.scss";

createApp(App)
.use(router)
.mount("#app")