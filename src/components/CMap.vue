<template>
    <div id="render-map"></div>
</template>
<script>
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
            new BMap.Marker(point);
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放 
            new BMap.Icon("images/icon/1.png", new BMap.Size(35, 45), {
                anchor: new BMap.Size(10, 30),
                infoWindowAnchor: new BMap.Size(10, 0)
            });
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
