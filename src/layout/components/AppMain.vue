<template>
    <section class="app-main" style="min-height: 100%">
        <content-left style="min-height: 100%"></content-left>
        <main-content style="min-height: 100%"></main-content>
    </section>
</template>

<script>
import ContentLeft from '@/components/ContentLeft';
import MainContent from '@/components/MainContent';

export default {
    name: 'AppMain',
    computed: {
    },
    components: {
        ContentLeft,
        MainContent
    }
}
</script>
<style>
.app-main {
    width: 100%;
    display: flex;
    position: relative;
}
</style>
