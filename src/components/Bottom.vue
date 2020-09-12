
<template>
  <div class="b-all">
  <div class="container">
    <div class="row b-header">
      <div class="col-md-4 col-sm-6">
        <p class="b-title af">联系我们</p>
        <p class="b-englist  af" style="line-height: 0px">Contact Us</p>
      </div>
      <div class="col-md-4 col-sm-6">
        <div >
          <img class="cc-img af" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/1598768066%281%29.png" alt="">
          <img class="cc-img af" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/xcx.png" alt="">
        </div>
      </div>

    </div>

    <div class="row b-center">
      <div class="col-md-4 col-sm-6">
        <div class="b-left  af">
          <a href="#" class="c-logo"><img style="width: 160px;height: 55px" src="../assets/logo.png" alt=""></a>
          <br>
          <span>普行智能停车（深圳）有限公司</span>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="b-content af">

          <p>地址：广东省深圳市宝安区西乡街道宝田一路嘉皇源科技园A栋三楼305室</p>
          <p>电话：0755-23286587</p>
          <p>手机：88888888888</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="c-right af">
          <p>路线：88888888888</p>
          <p>邮编：518000</p>
          <p>E-mail：puxing@pxznkj.com</p>
        </div>
      </div>
    </div>

    <div class="row b-bottom af">
      <div class="col-sm">
        <span class="center af">©2017-2020普行智能停车<a href="#" target="_blank" style="color:#696969;"> 闽ICP备8888888888号</a></span>
      </div>

    </div>
  </div>
  </div>
</template>

<script>

  import $ from "jquery";

  export default {

    date () {
      return {
        left:[],
        officialAccount:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/1598768066%281%29.png',
        xcx:'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/xcx.png'
      }

    },

    mounted() {

      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
      console.log(this.screenHeight)
      if(this.screenWidth>1600||this.screenHeight>900){
        $('.b-center,.bottom-b').css("width","1600px");
        $('.c-center').css({"position":"absolute","left":"750px"});
        $('.c-right').css({"position":"absolute","left":"1600px"});


      }

      this.left = Array.from(document.getElementsByClassName('af'))
      document.addEventListener('scroll', this.handleScroll4)
    },

    methods:{
      // animated fadeInUp

      handleScroll4 (evt) {
        for (var i = 0; i < this.left.length; i++) {
          var elem = this.left[i]
          //console.log(elem.className)
          var cN=elem.className
          if (this.isElemVisible(elem)) {

            elem.className=cN+" "+"animated fadeInUp"
            // console.log(elem.className)
            this.left.splice(i, 1) // 只让它运行一次
          }
        }
      },

      // 判断元素距离窗口的位置
      isElemVisible (el) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top  // 200 = buffer
        var elemBottom = rect.bottom
        return elemTop < window.innerHeight && elemBottom >= 0
      }
    }

  }

</script>

<style scoped>
  body{
    text-align: center;
  }

  .container{
    width: 1200px !important;
    margin: 0 auto;
  }
  .b-bottom{
    display: block;
    color: #ffffff;
  }
  .c-right{
    color: #f3f3f3;
  }
  .b-all{
    max-width:100%;
    background-color: #323943;
  }


  .b-title{
    color: #f3f3f3;
    margin-top: 60px;
    font-size: 24px;
    font-weight: bolder;
    float: left;

  }
  .b-englist{
    color: #c2c2c2;
    font-size: 14px;
    font-weight: normal;
    float: left;
    margin-left: 10px;
    margin-top: 80px;
  }
  .b-left{
    color: #f3f3f3;
    width: 140px;
    height: 65px;
    float: left;
    margin-top: -30px;
  }

  .cc-img {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    margin-left: 30px;
  }
  .b-content{
    color: #f3f3f3;
  }
  p{
    line-height: 20px;

  }
  .center{
    line-height: 58px;
  }
</style>
