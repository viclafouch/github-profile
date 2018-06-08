import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import lodash from 'lodash';

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
