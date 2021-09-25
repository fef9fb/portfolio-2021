import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import TitleColor from './mixin/TitleColor';
Vue.config.productionTip = false

Vue.mixin(TitleColor);

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


new Vue({
  vuetify,
  router,
  render: h => h(App, {el: '#app'}),
}).$mount('#app')
