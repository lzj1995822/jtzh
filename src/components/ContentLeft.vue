<template>
    <div :class="styleName" style="min-height:100%">
        <transition name="fade" model="out-in" style="height:100%">
            <div v-if="show" style="height: 100%">
                <div v-if="menuName === menuConstant.PRACTICE_CENTRE " key="Pc" style="margin-left: 10px;height: 100%">
                    <div class="statis1">
                        <h2 class="statis-title">计划进度</h2>
                        <div class="statis1-plan-fixed">
                            <div class="fz16">固定计划</div>
                            <h1 class="lh100 statis1-percent-active" style="font-size: 36px;">{{inforarry.passPlanResultTotal}}/{{inforarry.planResultTotal}}</h1>
                        </div>
                        <div class="statis1-plan-auto">
                            <div class="fz16">可选计划</div>
                            <h1 class="statis1-percent lh100" style="font-size: 36px;">{{inforarry.selfPlanTotal}}/{{inforarry.planResultTotal}}</h1>
                        </div>
                    </div>
                    <div class="statis4">
                        <h2 class="statis-title">实践点数量</h2>
                        <div style="width:100%; height: 100%;" id="statistic2">
                        </div>
                    </div>
                    <div class="statis2">
                        <h2 class="statis-title">特色活动占比</h2>
                        <div style="width:100%; height: 100%;margin-top: 15px;" id="statistic">
                        </div>
                    </div>
                    <div class="statis3">
                        <h2 class="statis-title">实践中心介绍</h2>
                        <div class="statis-introduct">
                            党建工作职责指导做好党员的教育、管理和发展工作。研究和提出党员队伍建设的阶段性规划、意见和建议，督促基层党组织加强流动党员教育管理和服务工作。
                        </div>
                    </div>
                </div>
                <div v-if="menuName !== menuConstant.PRACTICE_CENTRE" style="margin: 16px;">
                    <el-button @click="updateLeftActive($event,index)" :key="index"  style="width:100%" v-for="(item,index) in leftList" class=""  :class="item.className">{{item.name}}</el-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ECharts from "echarts";
import "@/style/common.css";
import lookup from "@/constant/lookup";

export default {
  name: "ContentLeft",
  data() {
    return {
      menuBtnMap: {
        SUB_CENTER: [
          {
            name: "返回地图"
          },
          {
            name: "理论宣讲分中心"
          },
          {
            name: "教育服务分中心"
          },
          {
            name: "问题服务分中心"
          },
          {
            name: "科技科普分中心"
          },
          {
            name: "健康咨询分中心"
          }
        ],
        PRACTICE_INSTITUTE: [
          {
            name: "返回地图"
          },
          {
            name: "花样街道"
          },
          {
            name: "宝华镇"
          },
          {
            name: "开发区"
          },
          {
            name: "崇明街道"
          }
        ],
        PRACTICE_STATION: [
          {
            name: "宝华镇：15个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "崇明街道：10个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "宝华镇：15个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "花样街道：5个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "开发区：8个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          }
        ],
        PRACTICE_SITE: [
          {
            name: "返回地图"
          },
          {
            name: "理论宣讲分中心"
          },
          {
            name: "教育服务分中心"
          },
          {
            name: "问题服务分中心"
          },
          {
            name: "科技科普分中心"
          },
          {
            name: "健康咨询分中心"
          }
        ],
        VOLUNTEER_CORPS: [
          {
            name: "组织架构"
          },
          {
            name: "服务队伍"
          }
        ],
        SPECIAL_ACTIVITIES: [
          {
            name: "宝华镇：15个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "崇明街道：10个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "宝华镇：15个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "花样街道：5个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          },
          {
            name: "开发区：8个",
            children: [
              {
                name: "xx村"
              },
              {
                name: "xx村"
              },
              {
                name: "xx村"
              }
            ]
          }
        ],
        PRACTICE_CENTRE: [
          {
            name: "返回地图"
          },
          {
            name: "理论宣讲分中心"
          },
          {
            name: "教育服务分中心"
          },
          {
            name: "问题服务分中心"
          },
          {
            name: "科技科普分中心"
          },
          {
            name: "健康咨询分中心"
          }
        ]
      },
      show: true,
      styleName: "container-left",
      leftList: [],
      inforarry: ""
    };
  },
  computed: {
    menuName() {
      console.log(this.$store.state.menuName);
      return this.$store.state.menuName;
    },
    menuConstant() {
      return lookup.menuConstant;
    }
  },
  watch: {
    // btnList() {
    //     this.leftList = this.menuBtnMap[this.menuName];
    // },
    menuName() {
      /**
       * 太挫了，这个方式。。
       */
      this.show = false;
      setTimeout(() => {
        this.show = true;
        this.leftList = [];
        this.btnList();
        if (this.menuName === this.menuConstant.PRACTICE_CENTRE) {
          this.styleName = "container-left";
        } else {
          this.styleName = "container-left with-btn";
        }
      }, 100);
    }
  },
  methods: {
    //获取左侧列表
    getLeftList(url) {
      this.axios
        .post(
          this.serviceheader + url,
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          }
        )
        .then(res => {
          var list =[{name: "返回地图"}].concat(res.data.contents) 
          list.forEach((item, index) => {//this.menuBtnMap[this.menuName]
            if (index === 0) {
              item.className = "list-btn-active";
            } else {
              item.className = "list-btn";
            }
            this.leftList.push(item);
          });
        })
        .catch(err => {
          if (err.response) {
            console.log(err.response);
            //控制台打印错误返回的内容
          }
        });
    },
    updateLeftActive(e, index) {
      //debugger
      this.leftList.forEach((item, index1) => {
        var name = item.name;
        if (index1 == index) {
          item.className = "list-btn-active";
          item.name = "";
          item.name = name;
        } else {
          item.className = "list-btn";
          item.name = "";
          item.name = name;
        }
      });
      this.$store.commit("updateLeftActive", index);
    },
    //特色活动占比
    initChartpoint() {
      let option = {
        tooltip: {
          show: true,
          trigger: "item"
        },
        color: ["#82c95d", "#f3b03c", "yellow", "blueviolet"],
        title: {
          x: "left",
          textStyle: {
            //文字颜色
            color: "#ccc",
            //字体风格,'normal','italic','oblique'
            fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "bold",
            //字体系列
            fontFamily: "sans-serif",
            //字体大小
            fontSize: 14
          }
        },
        legend: {
          orient: "vertical",
          data: ["其他活动", "特色活动"],
          top: "10%",
          left: "0",
          width: 150,
          itemWidth: 8, //图例的宽度
          itemHeight: 8, //图例的高度
          textStyle: {
            //图例文字的样式
            color: "black",
            fontSize: 14
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: false
            },
            dataView: {
              show: false,
              readOnly: true
            },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "52%",
                  width: "70%",
                  funnelAlign: "left",
                  max: 1548
                }
              }
            },
            restore: {
              show: false
            },
            saveAsImage: {
              show: false
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "数量",
            type: "pie",
            label: {
              //饼图图形上的文本标签
              normal: {
                show: true,
                position: "outer", //标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16 //文字的字体大小
                },
                formatter: "{d}%"
              }
            },
            radius: ["50%", "70%"],
            data: [
              {
                value: this.inforarry.commonRadio,
                name: "其他活动"
              },
              {
                value: this.inforarry.featureRadio,
                name: "特色活动"
              }
            ]
          }
        ]
      };
      let chart = ECharts.init(document.getElementById("statistic"));
      chart.setOption(option);
    },
    //实践点数量
    initChartpersent() {
      //实践点
      let name = [];
      let count = [];
      let practiceDTO = this.inforarry.practiceDTO;
      for (var i in practiceDTO) {
        name.push(practiceDTO[i].centerName);
        count.push(practiceDTO[i].count);
      }
      let option3 = {
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          data: ["数量"],
          top: "10%",
          left: "0",
          width: 150,
          itemWidth: 8, //图例的宽度
          itemHeight: 8 //图例的高度
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: false },
            dataView: { show: false, readOnly: false },
            magicType: { show: false, type: ["line", "bar"] },
            restore: { show: false },
            saveAsImage: { show: false }
          }
        },
        calculable: false,
        xAxis: [
          {
            type: "category",
            data: name
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            min: 0,
            scale: false,
            minInterval: 2, //均值
            // max: 18,
            splitNumber: 8,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            data: count,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      };
      let chart2 = ECharts.init(document.getElementById("statistic2"));
      chart2.setOption(option3);
    },
    initSpecialActivityChart() {
      this.axios
        .post(
          this.serviceheader + "/getLeftInfoForJRCenter",
          // {
          //   params: {
          //     userId: window.localStorage.getItem("userIdAdmin"),
          //     pageIndex: 1,
          //     pageSize: 10000000
          //   }
          // },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          }
        )
        .then(res => {
          //console.log(res.data.content);
          this.inforarry = res.data.content;
          this.initChartpoint();
          this.initChartpersent();
        })
        .catch(err => {
          if (err.response) {
            console.log(err.response);
            //控制台打印错误返回的内容
          }
        });
    },
    changeClass(index) {
      return list - btn;
    },
    btnList() {
      //console.log(this.menuName);
      if (this.menuName === "SUB_CENTER") {//分中心
        this.getLeftList("/queryCenter");
      }else if (this.menuName === "PRACTICE_INSTITUTE") {//实践所-镇
        this.getLeftList("/queryTown");
      }else if (this.menuName === "PRACTICE_STATION") {//实践站
        this.getLeftList("/queryTown");
      }else {//实践点
        this.menuBtnMap[this.menuName].forEach((item, index) => {//
            if (index === 0) {
              item.className = "list-btn-active";
            } else {
              item.className = "list-btn";
            }
            this.leftList.push(item);
          });
      }
      // else if (this.menuName === "VOLUNTEER_CORPS") {//志愿服务队
      //   this.menuBtnMap[this.menuName].forEach((item, index) => {//
      //       if (index === 0) {
      //         item.className = "list-btn-active";
      //       } else {
      //         item.className = "list-btn";
      //       }
      //       this.leftList.push(item);
      //     });
      // }else if (this.menuName === "SPECIAL_ACTIVITIES") {//特色活动
      //   this.menuBtnMap[this.menuName].forEach((item, index) => {//
      //       if (index === 0) {
      //         item.className = "list-btn-active";
      //       } else {
      //         item.className = "list-btn";
      //       }
      //       this.leftList.push(item);
      //     });
      // }
    }
  },
  updated() {
      if (this.menuName === this.menuConstant.PRACTICE_CENTRE) {
          setTimeout(() => {
              this.initChartpoint();
              this.initChartpersent();
          }, 1000);
      }
  },
  created() {
    this.btnList();
  },
  mounted() {
    setTimeout(() => {
      this.initSpecialActivityChart();
    }, 1000);
  }
};
</script>

<style scoped>
.list-btn-active {
  background: url("../img/img_button_h.png");
  background-size: cover;
  color: #fff;
  display: block;
  margin: 16px 0;
  width: 150px;
}
.list-btn {
  background: url("../img/img_button_n.png");
  background-size: cover;
  color: #fff;
  display: block;
  margin: 16px 0;
  width: 150px;
}
.list-btn:active {
  border-radius: 10px 2px 2px 2px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container-left {
  flex: 2;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: flex 0.5s linear;
}
.with-btn {
  flex: 1;
}
</style>
