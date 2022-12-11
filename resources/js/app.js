require('./bootstrap');
window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('index', require('./components/index.vue').default);
Vue.component('nav-header', require('./components/nav-header.vue').default);


const app = new Vue({
    el: '#app',
});
