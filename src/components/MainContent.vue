<template>
    <div class="main-content">
        <c-map v-if="type==1" ></c-map>
        <el-tabs v-if="type==2" type="border-card">
            <el-tab-pane label="年度计划">年度计划</el-tab-pane>
            <el-tab-pane label="人员">人员</el-tab-pane>
            <el-tab-pane label="文明实践点">文明实践点</el-tab-pane>
        </el-tabs> 
    </div>
</template>
<script>
import CMap from "./CMap";
import lookup from "@/constant/lookup";

export default {
  name: "MainContent",
  data() {
    return {
      leftActiveindex: "",
      type: 1
    };
  },
  computed: {
    leftActive() {
      this.leftActiveindex = this.$store.state.leftActive;
      return this.$store.state.leftActive;
    },
    menuName() {
      return this.$store.state.menuName;
    },
    menuConstant() {
      return lookup.menuConstant;
    },
    btnList() {
      return this.menuBtnMap[this.menuName];
    }
  },
  watch: {
    leftActive() {
      setTimeout(() => {
        this.init();
      }, 100);
    },
    menuName() {
      /**
       * 太挫了，这个方式。。
       */
      if (this.menuName === this.menuConstant.PRACTICE_CENTRE) {
        this.styleName = "container-left";
      } else {
        this.styleName = "container-left with-btn";
      }
      // setTimeout(() => {
      //   if (this.menuName === this.menuConstant.PRACTICE_CENTRE) {
      //     this.styleName = "container-left";
      //   } else {
      //     this.styleName = "container-left with-btn";
      //   }
      // }, 100);
    }
  },
  methods: {
    init() {
      console.log(this.leftActive);
      if (this.leftActive === 0) {
        this.type = 1;
      } else {
        this.type = 2;
      }
    }
  },
  mounted() {
    this.init();
  },
  components: {
    CMap
  }
};
</script>
<style>
.main-content {
  flex: 7;
  padding: 10px 10px 0 10px;
  position: relative;
  display: inline-block;
  transition: flex 0.5s linear;
}
</style>
