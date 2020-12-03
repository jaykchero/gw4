<template>
  <div>
    <div id="container"></div>
    <div class="input-card" style="width: auto;">
      <div class="input-item">
        <button class="btn" @click="heatmap.show()">显示热力图</button>
      </div>
      <div class="input-item">
        <button class="btn" @click="heatmap.hide()">关闭热力图</button>
      </div>
    </div>
  </div>
</template>

<script>
  // https://a.amap.com/jsapi_demos/static/resource/heatmapData.js
  import {heatmapData} from '../../../assets/js/data';
  export default {
    mounted() {
      this.queryAllData();
      // 延迟加载，防止出现AMap not defined
      // setTimeout(() => {
      //   this.initMap();
      //   this.createHeatMap();
      // }, 1000);
    },
    beforeDestroy() {
      this.map && this.map.destroy();
    },
    data() {
      return {
        map: null,
        heatmap: null,
        allListData:[],
        data:[],
        heatmapDatas:[],

      };
    },
    methods: {

      queryAllData(){
        var obj={
          longitude:119.007558,
          latitude:25.431011
        }
        this.$http.post('/park/getParkList',obj)
          .then(res =>{
            this.allListData=res.data.data
            this.data=this.allListData;
            let data=[];
            this.allListData.forEach((item)=>{
              let obj ={};
              obj.lng=item.coordinateX;
              obj.lat=item.coordinateY;
              obj.count=(item.sumTruckSpace-item.leisureTruckSpace);
              data.push(obj)
            })
            this.heatmapDatas=data;
            this.initMap();
            this.createHeatMap();
          //  console.log("this.heatmapDatas",this.heatmapDatas)
          })



      },

      initMap() {
        this.map = new AMap.Map("container", {
          resizeEnable: true,
          zoom:14, // 地图缩放范围
          center: new AMap.LngLat(119.007558, 25.431011),
          mapStyle: 'amap://styles/darkblue', // 极夜蓝
          //自定义地图样式：https://lbs.amap.com/dev/mapstyle/index
        });
      },
      //判断浏览区是否支持canvas
      isSupportCanvas() {
        let elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"));
      },
      createHeatMap() {
        if (!this.isSupportCanvas()) {
          return this.$msg.error(
            "热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试。"
          );
        }
        let __this = this;
        let data=this.heatmapDatas;
        console.log(data)
        this.map.plugin(["AMap.Heatmap"], function() {
          //初始化heatmap对象
          __this.heatmap = new AMap.Heatmap(__this.map, {
            visible: false,
            radius: 30, //给定半径
            opacity: [0, 0.8],
            gradient:{
              0.5: 'blue',
              0.65: 'rgb(117,211,248)',
              0.7: 'rgb(0, 255, 0)',
              0.9: '#ffea00',
              1.0: 'red'
            }
          });
          //设置数据集：该数据为北京部分“公园”数据
          __this.heatmap.setDataSet({
            data:data,
            max: 40,
            min:5
          });
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import url("https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css");

  #container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 700px;
  }
  .input-card .btn {
    margin-right: 1.2rem;
    width: 9rem;
  }
</style>
