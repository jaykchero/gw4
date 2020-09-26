<template>
  <div class="all-pdb">
    <div id="test-map" />
    <div class="map-list">
      <h3 class="index-map-title">
        <img src="../../assets/img/data_image.png" alt="">
        莆田市区域泊位规划一览表
      </h3>
      <div

        class="demo-infinite-container"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
      >
        <a-list :data-source="data">
          <a-list-item @click="toShow(item)" slot="renderItem" slot-scope="item,index">

            <a-list-item-meta :description="item.address">

              <a slot="title" > <img style="margin-right: 5px" :src="iconImg" alt="">{{ item.parkName }}
                <br><span class="item-text"> 总车位(个)：  {{item.sumTruckSpace}}</span>
                <br>
                <span class="item-text2"> 剩余车位(个)： {{item.leisureTruckSpace}}</span>

              </a>
            </a-list-item-meta>

          </a-list-item>
          <div v-if="loading && !busy" class="demo-loading-container">
            <a-spin />
          </div>
        </a-list>
      </div>
    </div>
    <Bottom></Bottom>

  </div>
</template>

<script>
  import Bottom from "../../components/Bottom";
  import { lazyAMapApiLoaderInstance } from 'vue-amap'
  import greenStop from '../../assets/img/green.png'
  import redStop from '../../assets/img/red.png'
  import yellowStop from '../../assets/img/yello.png'

  import iconImg_on from '../../assets/img/data_image_on.png'

  export default {
    components:{
      Bottom
    },
    data() {
      return {

        iconImg:iconImg_on,
        timer:'',
        allListData:[],
        allListDatas:[
          {
            position:[],
            address:"",
            leisureTruckSpace:"",
            sumTruckSpace:"",
            parkName:"",
            rateInfo:"",
            standardName:"",

          }
        ],
        data: [],
        loading: false,
        busy: false,

        map: '' ,// 地图
        infowindow1:'',
        record:{},
        lnglat:[116.473188, 39.993253],


      }
    },

    mounted() {
      this.queryAllData();

      this.infowindow1 = new AMap.AdvancedInfoWindow({
        // content: "普行智能停车",
        walking:false,
        placeSearch:false,
        transit:false,
        offset: new AMap.Pixel(0, -30)
      });

    },
    methods:{

      getMap(){
        // if(this.data!=null){
        //   clearInterval(this.timer);
        // }
        lazyAMapApiLoaderInstance.load().then(() => {
          this.map = new AMap.Map('test-map', {
            zooms: [3, 18], // 地图缩放范围
            center: new AMap.LngLat(116.397428, 39.90923),

          })

          // 加载海量点组件
          AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
            if (!PointSimplifier.supportCanvas) {
              alert('当前环境不支持 Canvas！')
              return
            }
            // 创建组件实例
            var pointSimplifier = new PointSimplifier({
              zIndex:300,
              map: this.map,
              // data是海量点的坐标，下面是随机产生点坐标的方法
              data:this.allListData,
              // 返回要显示的点坐标
              getPosition: (dataItem) => {
                return [dataItem.coordinateX,dataItem.coordinateY]
              },

              getHoverTitle: function(dataItem, idx) {
                 return dataItem.parkName;
              },
              renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
              renderOptions: {

                //将经纬度进行分组
                getGroupId: function(item, idx) {
                  // 分组规则
                  // 这里会遍历每个数据
                  // 根据每个数据的参数进行分组
                  // 下面的判断是根据参数的下标进行分组
                  if (item.leisureTruckSpace>=10) {
                    return 'g2'
                  } else if(item.leisureTruckSpace>0 && item.leisureTruckSpace<10){
                    return 'g1'
                  } else if(item.leisureTruckSpace==0){
                    return 'g0'
                  }
                },

                pointHoverStyle:{
                  width: 31,
                  height: 31,
                  content: 'circle',
                  strokeStyle:"#477e9a",
                  lineWidth:3
                },
                // 为每组添加样式（两种方法）
                // 方法一
                groupStyleOptions: {
                  g0: {
                    //点的样式
                    pointStyle: {
                      //绘制点占据的矩形区域
                      content: PointSimplifier.Render.Canvas.getImageContent(
                        redStop,
                        function onload() {
                          pointSimplifier.renderLater();
                        },
                        function onerror(e) {
                          alert('图片加载失败！');
                        }),
                      //宽度
                      width: 30,
                      //高度
                      height: 30,
                      //定位点为底部中心
                      // offset: ['-50%', '-100%'],
                      fillStyle: null,
                      strokeStyle: null
                    },
                  },

                  g1: {
                    pointStyle: {
                      //绘制点占据的矩形区域
                      content: PointSimplifier.Render.Canvas.getImageContent(
                        yellowStop,
                        function onload() {
                          pointSimplifier.renderLater();
                        },
                        function onerror(e) {
                          alert('图片加载失败！');
                        }),
                      //宽度
                      width: 30,
                      //高度
                      height: 30,
                      //定位点为底部中心
                    //  offset: ['-50%', '-100%'],
                      fillStyle: null,
                      strokeStyle: null
                    },
                  },

                  g2: {
                    pointStyle: {
                      //绘制点占据的矩形区域
                      content: PointSimplifier.Render.Canvas.getImageContent(
                        greenStop,
                        function onload() {
                          pointSimplifier.renderLater();
                        },
                        function onerror(e) {
                          alert('图片加载失败！');
                        }),
                      //宽度
                      width: 30,
                      //高度
                      height: 30,
                      //定位点为底部中心
                    //  offset: ['-50%', '-100%'],
                      fillStyle: null,
                      strokeStyle: null
                    },
                  }
                },

              }
            })
            // 为海量点添加点击事件
            pointSimplifier.on('pointClick', this.infotext);
            // pointSimplifier.on('pointClick', function(e, record) {

            // });
          })
        })
      },

      queryAllData(){
        var obj={
          longitude:119.007558,
          latitude:25.431011
        }
        this.$http.post('/park/getParkList',obj)
          .then(res =>{
            this.allListData=res.data.data
            this.data=this.allListData;
            this.getMap()
          })

      },

      infotext(e, record){
        this.record=record;
        var info = [];
        // info.push("<div class='input-card content-window-card'><div><img style=\"float:left;width:67px;height:16px;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> ");
         info.push('<div class="info-title">当前停车点信息</div>');
         this.infowindow1.setContent(info.join("")+this.record.data.parkName+"<div style='margin-bottom: 5px'></div>"+this.record.data.address+"<div style='margin-bottom: 5px'></div>"+"泊位总数(个)："+this.record.data.sumTruckSpace +"<div style='margin-bottom: 5px'></div>"+"空余泊位(个)："+this.record.data.leisureTruckSpace);
         this.infowindow1.open(this.map,[record.data.coordinateX,record.data.coordinateY])  //allBerth:14,
      },
      toShow(item){

          this.record.data=item;
        this.map.setCenter([item.coordinateX,item.coordinateY])
        this.map.setZoom(20);
         this.infotext(1,this.record)

      }
    }
  }
</script>

<style>
  .ant-list-item-meta:hover
  {
    background-color: #eeeeee !important;
  }

  .index-map-title{
    background: #0e1d34;
    color: #ffffff;
    font-size: 16px;
    line-height:40px ;
    height: 40px;
  }

  .info-title {
    color: white;
    font-size: 14px;
    background-color: #25A5F7;
    line-height: 26px;
    padding: 0px 0 0 6px;
    font-weight: lighter;
    letter-spacing: 1px
  }
</style>

<style scoped>
  .all-pdb{
    position: relative;
  }

  .item-text{
  color: #1e7e34;
  }

  .item-text2{
    color: #ff1719;
  }
  .ant-list-item-meta-title a{
    color: #F79646 !important;
    font-size: 16px;

  }

  .demo-infinite-container {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: auto;
    padding: 8px 24px;
    height: 490px;
  }
  .demo-loading-container {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }

  .map-list {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 272px;
    height: 500px;
    box-shadow: 0 0 10px #ccc;
    background-color: #fff;
    z-index: 100;
    bottom: 10px;
    overflow: hidden;
  }

  #test-map{
    height:550px;
  }

</style>
