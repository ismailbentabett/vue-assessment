import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import VueCompositionAPI from '@vue/composition-api'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueCompositionAPI)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
