<template>
    <div :class="styleName">
        <c-map></c-map>
    </div>
</template>
<script>
import CMap from './CMap';
import lookup from '@/constant/lookup';

export default {
    name: 'MainContent',
    data() {
        return {
            styleName: 'main-content'
        }
    },
    computed: {
        menuConstant() {
            return lookup.menuConstant;
        }
    },
    watch: {
        '$store.state.menuName': function (newMenuName) {
            /**
             * 太挫了，这个方式。。
             */
            if (newMenuName === this.menuConstant.PRACTICE_CENTRE) {
                this.styleName = 'main-content';
            } else {
                this.styleName = 'main-content flex-to-eight';
            }
        }
    },
    methods: {

    },
    components: {
        CMap
    }
}
</script>
<style>
.main-content {
    flex: 7;
    padding: 11px 10px 0 10px;
    position: relative;
    display: inline-block;
    transition:flex 1s linear;
}
.flex-to-eight {
    flex: 11;
}
</style>
