import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faS, faTrash, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'


library.add(faS, faTrash, faListCheck)


const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")