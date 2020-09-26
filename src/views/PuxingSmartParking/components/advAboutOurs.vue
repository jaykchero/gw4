<template>



  <div class="adv"   >
    <div class="left">


      <h3 class="h3 left1">{{adv1.title2}}</h3>
     <!--  <h3 class="lh3">{{englist2}}</h3> -->
       <p class="p left1" >{{adv1.info2}}</p>
       <h3 class="h3 left1" >{{adv1.title3}}</h3>
        <p class="p left1">{{adv1.info3}}</p>
      <p class="p left1" >{{adv1.info5}}</p>
      <h3 class="h3 left1" style="margin-top: 30px">{{adv1.title4}}</h3>
      <p class="p left1">{{adv1.info4}}</p>
      <h3 class="h3 left1" style="margin-top: 30px">{{adv1.title5}}</h3>
      <p class="p left1">{{adv1.info6}}</p>
    </div>

    <div class="right" >

      <ul>
        <li>
          <img v-lazy="adv1.img" >
        </li>
      </ul>

    </div>

  </div>

</template>

<script>


  import $ from "jquery";

  export default{

          data(){
            return {
              fadeInElements:[],
              fadeInElements1:[],

              adv1:{
                title2:"仰视角度的车牌识别",
                info2:"目前中国国内唯一一家能够进行仰视角度的车牌识别，行业内领先的识别技术",
                info3:'我们采集路边、雨天、雾天、朝阳等各\n' + '种场景的图片超过10万张，在算法端进\n' + '行图像的深度学习和训练',
                info5:'目前系统车牌识别率达到95%以上，最终我们的目标是99.99%的识别率。',
                title4:'实时监测车位',
                info4:'实时监测车位占用情况\n' +
                  '提供准确的占用及引导信息，缓解拥堵\n' +
                  '，减少找车位时间\n' +
                  '降低了油耗和污染排放，改善城市空气。',

                title5:"大数据积累，资源整合",
                info6:'采用先进的物联网+云系统技术，\n' +
                  '整合所有路侧停车资源，打通停车信息\n' +
                  '流通环节。\n' +
                  '为车主带来方便快捷的停车体验\n' +
                  '大大提高车位管理效率，真正打造高效\n' +
                  '、智能化的停车体验。',
                img:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%AF%86%E5%88%AB/sb1.png",

              },
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

      if(this.screenWidth>1600||this.screenHeight>900){
        $('.adv').css("width","1600px");

      }


      this.fadeInElements = Array.from(document.getElementsByClassName('left1'))
      this.fadeInElements1 = Array.from(document.getElementsByClassName('right'))



      // 监听鼠标滚动事件
      document.addEventListener('scroll', this.handleScroll)
      // 监听鼠标滚动事件
      document.addEventListener('scroll', this.handleScroll1)


    },
    methods:{
      // 循环判断是否要触发过渡
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
      // 循环判断是否要触发过渡
      handleScroll1 (evt) {
        for (var i = 0; i < this.fadeInElements1.length; i++) {
          var elem = this.fadeInElements1[i]
          var cN=elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated fadeInRight"

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

<style scoped="scoped">

  ul li {

      transition: all .5s ease;


    }

  ul li:hover{



    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);

  }



  .adv{
    display: flex;
    width: 1200px;

    height: 600px !important;
    margin: 0 auto;
    align-items:  center ;
   justify-content: space-between;

  }

  .left{
    vertical-align: top;
    width: 50%;
  }
  .right{
    width: 50%;
    margin-right: 50px;
  }




  .p{
  color: #605656;
  margin-top: 10px;
  line-height: 24px !important;
  text-align: left;
  }

  .h3{
  text-align: left;
  display: block;
  color: #F79646;
  letter-spacing: 0;
  font-size: 18px;
  }





    img{

      width: 500px;
      height: 400px;

    }






</style>
