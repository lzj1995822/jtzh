<template>
    <div class="main-content">
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
    padding: 10px 10px 0 10px;
    position: relative;
    display: inline-block;
    transition:flex .5s linear;
}
</style>
