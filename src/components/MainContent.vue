<template>
    <div class="main-content">
        <c-map></c-map>
    </div>
</template>
<script>
import CMap from './CMap';
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
    padding: 12px 10px 0 12px;
    position: relative;
    display: inline-block;
}
</style>
