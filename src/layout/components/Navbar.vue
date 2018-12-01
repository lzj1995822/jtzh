<template>
    <section class="nav-bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo layout-center" mode="horizontal" active-text-color="#fff" @select="updateMenuName">
            <el-menu-item  v-for="(item,index) in menuMap" :key="index" :index="index">{{item}}</el-menu-item>
        </el-menu>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: this.$store.state.menuName,
            menuMap: {
                PRACTICE_CENTRE: '实践中心',
                SUB_CENTER: '分中心',
                PRACTICE_INSTITUTE: '实践所',
                PRACTICE_STATION: '实践站',
                PRACTICE_SITE: '实践点',
                VOLUNTEER_CORPS: '支援服务队',
                SPECIAL_ACTIVITIES: '特色活动'
            }
        }
    },
    methods: {
        updateMenuName(index) {
            this.$store.commit('updateMenuName', index);
        }
    }
}
</script>

<style scoped>
.nav-bar {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.15);
    text-align: center;
}
.nav-bar ul {
  background-image: url("../../img/img_menu_bg.png");
}
.layout-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
<style>
.el-menu--horizontal>.el-menu-item {
  height: 52px;
  line-height: 52px;
  margin: 0 18px;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
}
.el-menu--horizontal>.el-menu-item.is-active {
  background-size: 82px auto;
  background: url("../../img/img_menu_actived.png") no-repeat;
}
.el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: transparent;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: white;
}
</style>
