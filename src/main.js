import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('appendLength', function (value) {
  return `${value} (${value.length})`
});

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
