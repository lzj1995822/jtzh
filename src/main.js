// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/index.scss';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import store from "@/store";
import axios from 'axios'

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.prototype.serviceheader = 'http://47.254.44.188:8088'
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
