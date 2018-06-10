import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash';
import moment from 'moment';

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
