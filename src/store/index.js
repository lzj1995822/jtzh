import lookup from '@/constant/lookup';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuName: lookup.menuConstant.PRACTICE_CENTRE,
        leftActive: 0
    },
    mutations: {
        updateMenuName(state, data) {
            state.menuName = data;
        },
        updateLeftActive(state, data) {
            state.leftActive = data;
        }
    }
})
