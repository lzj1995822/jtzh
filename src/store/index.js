import lookup from '@/constant/lookup';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuName: lookup.menuConstant.PRACTICE_CENTRE
    },
    mutations: {
        updateMenuName(state, data) {
            state.menuName = data;
        }
    }
})
