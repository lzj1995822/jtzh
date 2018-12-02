<template>
    <div id="render-map"></div>
</template>
<script>
import imgBgCenter from '@/img/img_bg_center.png';
import imgCenter from '@/img/img_center.png';

export default {
    name: 'CMap',
    data() {
        return {

        }
    },
    methods: {
        initMap() {
            let map = new BMap.Map("render-map");
            let point = new BMap.Point(119.175146, 31.967351); //定位句容市
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            let icon = new BMap.Icon(imgCenter, new BMap.Size(40, 40), {
                anchor: new BMap.Size(10, 30),
                infoWindowAnchor: new BMap.Size(10, 0)
            });
            let marker = new BMap.Marker(point, { icon: icon });
            map.addOverlay(marker);
            icon = new BMap.Icon(imgBgCenter, new BMap.Size(100, 100), {
                anchor: new BMap.Size(10, 30),
                imgOffset:  new BMap.Size(0, 200),
                infoWindowAnchor: new BMap.Size(10, 0)
            });
            marker = new BMap.Marker(point, { icon: icon });
            map.addOverlay(marker);
        }
    },
    mounted() {
        this.initMap();
    }
}
</script>
<style>
#render-map{
    height: 600px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.15);
    position: relative;
}
</style>
