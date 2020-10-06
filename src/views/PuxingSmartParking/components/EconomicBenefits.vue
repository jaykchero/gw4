<template>

  <div class="i-all">
    <div class="i-header">
      <h2 class="h2 tl1">经济效益</h2>
      <h3 class="lh3 tl1">Economic Benefits</h3>
    </div>
    <div class="e-content">

      <div class="eb-left tl11">
        <div class="left-img">
          <img class="eb " v-lazy="eb" alt="">
        </div>

      </div>
      <div class="eb-right ">
        <h2 class="h3 tl2" >{{h2}}</h2>
        <p class="tl2">一天24小时此图为中午12：00左右</p>
        <p class="tl2">平均1个车已经收费接近20元</p>
        <p class="tl2">按照某三级市的收费标准：</p>
        <p class="tl2">一辆车一天收费封顶30元</p>
        <p class="tl2">每车位月收入至少为</p>
        <p class="tl2">30元*30元=900元</p>
        <p class="tl2">每个车位的年收入为：900*12=10800元</p>
        <h3 class="h3 tl2">一倍投资至少三倍回收</h3>
        <p class="tl2">按照一个车位一年平均投资3000元</p>

      </div>


    </div>

  </div>


</template>

<script>
  import $ from "jquery";

  export default {
    name: "SocialEffect",
    data() {
      return {
        h2:"以左图为例",
        fadeInElements1:[],
        fadeInElements:[],
        eb: 'https://jaykchero.oss-cn-shenzhen.aliyuncs.com/Economic.png',
      }

    },
    mounted() {


      this.checkWidth();
      window.addEventListener("resize", this.checkWidth); // 横竖屏问题

      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };

      if(this.screenWidth>1600||this.screenHeight>900){
        $('.tl2').css({"font-size":"30px","line-height":"25px"});

      }

      this.fadeInElements = Array.from(document.getElementsByClassName('tl11'))
      this.fadeInElements1 = Array.from(document.getElementsByClassName('tl2'))

      // 监听鼠标滚动事件
      document.addEventListener('scroll', this.handleScroll)
      document.addEventListener('scroll', this.handleScroll1)


    },
    methods:{
      // 循环判断是否要触发过渡

      checkWidth(){

        if (document.body.clientWidth<900){
          this.h2="以上图为例"
        }else {
          this.h2="以左图为例"
        }
      },

      handleScroll1(evt){
        for (var i = 0; i < this.fadeInElements1.length; i++) {
          var elem = this.fadeInElements1[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated slideInUp"

          }
        }

      },

      handleScroll (evt) {
        for (var i = 0; i < this.fadeInElements.length; i++) {
          var elem = this.fadeInElements[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated zoomIn"

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
    },

  }
</script>

<style scoped>



  @media only screen and (max-width:900px) {

    .e-content{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .left-img{
      padding: 5px !important;
    }

    .h2{

      font-size: 20px!important;

    }
    .lh3{
      font-size: 16px!important;
    }

    .eb-right {
      width: 100% !important;
    }
  }

  .tl2{
    margin-bottom: 15px;
    font-size: 15px;
    text-align: left;
    margin-left: 20px;
  }


  .h3{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
  }

  .left-img {
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(to left, #2475a6, #ffffff);
    padding: 10px;
    width:100%;
    height: auto;
    list-style: none;
    border: 1px solid rgba(223,231,239, .7);
    transition: all .2s ease;
  }

  .eb-right {
    width: 50%;
  }

  .e-content {
   display: flex;
    justify-content: space-between;
  }

  .eb {
    width:100%;
    height: auto;
  }

  .i-all {
    padding-left: 50px;
    padding-right: 50px;
  }

  .h2 {
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }


  .lh3 {
    color: #555;
    text-align: left;
    font-size: 23px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";
    position: relative;
  }




</style>
