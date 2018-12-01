<template>
    <section class="app-main" style="min-height: 100%">
        <content-left></content-left>
    </section>
</template>

<script>
import ContentLeft from '@/components/ContentLeft';

export default {
    name: 'AppMain',
    computed: {
    },
    components: {
        ContentLeft
    }
}
</script>
