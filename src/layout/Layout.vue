<template>
    <div class="app-wrapper">
          <nav-bar></nav-bar>
          <app-main></app-main>
    </div>
</template>

<script>
import AppMain from './components/AppMain';
import NavBar from './components/Navbar';

export default {
    name: 'layout',
    components: {
        AppMain,
        NavBar
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.drawer-bg {
    background: #fff;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 1;
}

.sidebar-container {
    transition: width 0.28s;
    width: 200px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

// 主体区域
.main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 200px;
}
</style>
