<template>
    <div class="container-left">
        <transition name="fade" model="out-in">
            <div v-if="show">
                <div v-if="menuName === menuConstant.PRACTICE_CENTRE " key="Pc" style="margin-left: 15px;">
                    <div class="statis1">
                        <h2 class="statis-title">计划进度</h2>
                        <div class="statis1-plan-fixed">
                            <div class="fz16">固定计划</div>
                            <h1 class="lh100 statis1-percent-active" style="font-size: 36px;">4/10</h1>
                        </div>
                        <div class="statis1-plan-auto">
                            <div class="fz16">可选计划</div>
                            <h1 class="statis1-percent lh100" style="font-size: 36px;">2/8</h1>
                        </div>
                    </div>
                    <div class="statis2">
                        <h2 class="statis-title">特色活动占比</h2>
                        <div style="height: 80%;margin-top: 15px;margin-left: 30px" id="statistic">
                        </div>
                    </div>
                    <div class="statis3">
                        <h2 class="statis-title">介绍</h2>
                        <div class="statis-introduct">
                            党建工作职责指导做好党员的教育、管理和发展工作。研究和提出党员队伍建设的阶段性规划、意见和建议，督促基层党组织加强流动党员教育管理和服务工作。
                        </div>
                    </div>
                </div>
                <div v-if="menuName !== menuConstant.PRACTICE_CENTRE" key="pv" style="margin: 30px 30px;">
                    <el-button v-for="item in btnList" class="list-btn">{{item.name}}</el-button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ECharts from 'echarts';
import '@/style/common.css';
import lookup from '@/constant/lookup';

export default {
    name: "ContentLeft",
    data() {
        return {
            menuBtnMap: {
                SUB_CENTER: [
                    {
                        name: '理论宣讲分中心',
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ],
                PRACTICE_INSTITUTE: [
                    {
                        name: '花样街道',
                    },
                    {
                        name: '宝华镇',
                    },
                    {
                        name: '开发区',
                    },
                    {
                        name: '崇明街道',
                    }
                ],
                PRACTICE_STATION: [
                    {
                        name: '宝华镇：15个',
                        children: [
                            {
                                name: 'xx村',
                            },
                            {
                                name: 'xx村',
                            },
                            {
                                name: 'xx村',
                            },
                        ]
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ],
                PRACTICE_SITE: [
                    {
                        name: '理论宣讲分中心',
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ],
                VOLUNTEER_CORPS: [
                    {
                        name: '理论宣讲分中心',
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ],
                SPECIAL_ACTIVITIES: [
                    {
                        name: '理论宣讲分中心',
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ],
                PRACTICE_CENTRE: [
                    {
                        name: '理论宣讲分中心',
                    },
                    {
                        name: '教育服务分中心',
                    },
                    {
                        name: '问题服务分中心',
                    },
                    {
                        name: '科技科普分中心',
                    },
                    {
                        name: '健康咨询分中心',
                    }
                ]
            },
            show: true
        }
    },
    computed: {
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
        menuName() {
            /**
             * 太挫了，这个方式。。
             */
            this.show = false;
            setTimeout( ()=> {
                this.show = true;
                if (this.menuName === this.menuConstant.PRACTICE_CENTRE) {
                    this.$nextTick(() => {
                        this.initSpecialActivityChart();
                    });
                }
            }, 200)
        }
    },
    methods: {
        initSpecialActivityChart() {
            let option = {
                tooltip: {
                    show: true,
                    trigger: 'item',
                },
                color: ['#82c95d', '#f3b03c', 'yellow', 'blueviolet'],
                title: {
                    x: 'left',
                    textStyle: {
                        //文字颜色
                        color: '#ccc',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'bold',
                        //字体系列
                        fontFamily: 'sans-serif',
                        //字体大小
                        fontSize: 14
                    }
                },
                legend: {
                    orient: 'vertical',
                    data: ['其他活动', '特色活动'],
                    top: '10%',
                    left: '0',
                    itemWidth: 8, //图例的宽度
                    itemHeight: 8, //图例的高度
                    textStyle: { //图例文字的样式
                        color: 'black',
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
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
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
                series: [{
                    name: '数量',
                    type: 'pie',
                    label: { //饼图图形上的文本标签
                        normal: {
                            show: true,
                            position: 'outer', //标签的位置
                            textStyle: {
                                fontWeight: 300,
                                fontSize: 16 //文字的字体大小
                            },
                            formatter: '{d}%'
                        }
                    },
                    radius: ['50%', '70%'],
                    data: [{
                        value: 25,
                        name: "其他活动"
                    },
                        {
                            value: 75,
                            name: "特色活动"
                        }
                    ]
                }]
            };
            let chart = ECharts.init(document.getElementById('statistic'));
            chart.setOption(option);
        }
    },
    mounted() {
        this.initSpecialActivityChart();
    }
}
</script>

<style scoped>
.list-btn {
    background: url("../img/img_button_n.png");
    color: #fff;
    display: block;
    margin: 16px 20px;
}
.list-btn:active {
    border-radius: 10px 2px 2px 2px !important;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.container-left {
    flex: 2;
    display: inline-block;
    position: relative;
}

</style>
