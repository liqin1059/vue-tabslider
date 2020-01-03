import vueTabslider from './tabslider'

vueTabslider.install = Vue => Vue.component(vueTabslider.name, vueTabslider);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTabslider);
}

export default vueTabslider