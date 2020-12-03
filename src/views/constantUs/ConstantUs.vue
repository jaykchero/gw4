<template>
  <div>
    <div class="h-b">
      <img v-lazy="hb">
    </div>
    <div class="cs-all">

      <div class="cus-header">
        <div class="ch-left">
          <h2 class="ch-01 ch tl1">
            Hi, are you ready?
          </h2>
          <p class="ch-02 ch tl1">
            准备好开始了吗？那就与我们取得联系吧
          </p>
          <p class="ch-03 ch tl1">
            有项目想和我们谈谈吗？您可以通过以下的联系方式直接拨打电话与我们取得联系，或把您的需求发送我们的邮箱，我们会尽快与您联系，提供一个全面的解决方案！您也可以根据地址亲临参观了解。
          </p>
        </div>
        <div class="ch-rigth">

        </div>

      </div>

      <div class="cu-context">
      <div class="left">
        <div class="ch-context">

          <p class="tl1">
            <strong>
            <span style="font-size: 24px;">
                普行智能停车（深圳）有限公司
            </span>
            </strong>

          </p>
          <p class="tl1">
            <strong>
              电话： 0755-23286587
            </strong>

          </p>
          <p class="tl1">
            <strong>
              地址： 广东省深圳市宝安区西乡街道宝田一路嘉皇源科技园A栋三楼305室
            </strong>

          </p>
          <p class="tl1">
            <strong>
              E-mail： puxing@pxznkj.com
            </strong>

          </p>
        </div>

      </div>
      <div class="right tl2">
        <div id="allmap"></div>
      </div>

      </div>
    </div>
    <div>
      <Bottom></Bottom>
    </div>

  </div>
</template>

<script>

  import Bottom from "../../components/Bottom.vue";


  export default {

    components:{
      Bottom
    },
    name: "ConstantUs",
    data () {
      return {
        hb:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/constant.jpg",
      }

    },
    mounted(){
      // 百度地图API功能
      var sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.1em 0; color:#f8ab00; font-size:16px;'>普行智能停车（深圳）有限公司</h4>" +
        "<p style='margin:0;line-height:1.5;font-size:12px;'> 广东省深圳市宝安区西乡街道宝田一路嘉皇源科技园A栋三楼305室</p>" +
        "</div>";
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.895594,22.605488);
      var marker = new BMap.Marker(point);
      var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
      map.openInfoWindow(infoWindow,point); //开启信息窗口
      map.centerAndZoom(point, 19);
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addOverlay(marker);
      marker.addEventListener("click", function () {
        this.openInfoWindow(infoWindow);
        //图片加载完毕重绘infowindow
        document.getElementById('imgDemo').onload = function () {
          infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        }
      });

      this.fadeInElements = Array.from(document.getElementsByClassName('tl1'))
      this.fadeInElements1 = Array.from(document.getElementsByClassName('tl2'))

      // 监听鼠标滚动事件
      document.addEventListener('scroll', this.handleScroll)
      document.addEventListener('scroll', this.handleScroll1)
    },

    methods:{
      handleScroll1(evt){
        for (var i = 0; i < this.fadeInElements1.length; i++) {
          var elem = this.fadeInElements1[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated slideInLeft"

          }
        }

      },

      handleScroll (evt) {
        for (var i = 0; i < this.fadeInElements.length; i++) {
          var elem = this.fadeInElements[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated slideInUp"

            this.fadeInElements.splice(i, 1) // 只让它运行一次
          }
        }
      },
      // 判断元素距离窗口的位置
      isElemVisible (el) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top

        var elemBottom = rect.bottom

        return elemTop < window.innerHeight && elemBottom >= 0
      }
    }

  }
</script>

<style scoped>

  @media only screen and (max-width: 1445px) {
    .ch {
      padding: 25px 0 0 !important;
    }
    .ch-01 ,.ch-02{
      line-height: 35px !important;
      font-size: 25px !important;
    }
    .ch-03{
      line-height: 30px !important;
      font-size: 16px !important;
    }
    .cu-context{
      margin-bottom: 50px;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .left{
      width: 100% !important;

    }
    .right{
      width: 100% !important;

    }
    #allmap{
      height: 200px !important;
    }
  }

  body{
    text-align: center;
  }



  .cu-context{
    display: flex;
    justify-content: space-between;
    height: 400px;
  }


  .cs-all{
    width: 80%;
    margin: 0 auto;
    height: auto;
  }

  #allmap{
    width: 100%;
    height: 400px;

  }

  .left{
    margin-top: 10px;

    width: 30%;
  }
  .right{
    width: 70%;

  }
  .ch-context{
    text-align: left;
  }


  .tl1{
    line-height: 2em;
  }
  .ch-01{
    font-size: 36px;
    color: #477e9a;
    text-align: center;
    padding: 10px 0;
  }
  .ch-02{
    font-size: 36px;
    line-height: 46px;
    color: #333339;
    text-align: center;
    padding: 10px 0;
  }
  .ch-03{
    font-size: 16px;
    color: #666;
    line-height: 30px;
    text-align: center;
    margin: 25px 0;
  }

  .h-b img {
    width: 100%;
    height: 100%;
  }
  .h-b{
    margin-bottom: 80px;
    width: 100%;
    height:auto;
    overflow: hidden;
  }

</style>
