<template>
    <section class="app-main" style="min-height: 100%">
        <content-left></content-left>
        <main-content></main-content>
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
