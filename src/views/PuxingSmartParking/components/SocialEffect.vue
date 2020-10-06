<template>
    <div>
      <div class="i-all">
        <div class="i-header">
          <h2 class="h2 tl1">社会效益</h2>
          <h3 class="lh3 tl1">Socical Effect</h3>
        </div>
        <div class="clearfix">
          <div class="se-info">
            <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/tingche.jpg"   alt="">
            <p  class="tl1" style="margin-top: 20px">
              有效解决交通拥堵</p>
            <p  class="tl1">车辆车牌识别，助力公安系统、交警系统。</p>
            <a  class="tl1 bb">解决开放式停车难问题</a>
<!--            <a class="light-btn tl1" href="">解决开放式停车难问题</a>-->
          </div>


            <div class="se-info">
              <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/yejing.jpg"  alt="">
              <p class="tl1" style="margin-top: 30px"> 改善百姓出行</p>
              <a class="tl1 bb"> 提升城市管理水平</a>
<!--              <a class="light-btn tl1" href="">提升城市管理水平</a>-->
            </div>

            <div class="se-info">
              <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/dashuj.jpg" alt="">
              <p class="tl1" style="margin-top: 20px">各路段停车数据汇总，如车位 置换率、车位有效利用率等</p>
              <p class="tl1 ">车主出行，诱导系统，方便快 捷</p>
              <a class="tl1 bb">实现大数据互通共享</a>
<!--              <a class="light-btn tl1" href="">实现大数据互通共享</a>-->
            </div>


        </div>

        </div>

    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "SocialEffect",
      data () {
          return{
            fadeInElements:[],
            fadeInElements1:[],
            flag:true,
            cWidth:document.body.clientWidth,
          }
      },
      mounted() {

        this.checkWidth()
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
          $('.clearfix').css("width","1600px");
           $('.clearfix li').css("margin-left","120px");
        }


        this.fadeInElements = Array.from(document.getElementsByClassName('left1'))
        this.fadeInElements1 = Array.from(document.getElementsByClassName('right'))

        // 监听鼠标滚动事件
        document.addEventListener('scroll', this.handleScroll)
        // 监听鼠标滚动事件
        document.addEventListener('scroll', this.handleScroll1)


      },
      methods:{

        checkWidth(){
          this.cWidth=document.body.clientWidth;
          if(this.cWidth<821){
            this.flag=false;
          }else {
            this.flag=true;
          }
        },

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

<style scoped>

  @media only screen and (max-width:751px) {
   .clearfix{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
    .se-info{
      width: 100% !important;
      margin-top: 10px;
    }

    .h2{
      font-size: 20px!important;
    }
    .lh3{
      font-size: 16px!important;
    }
  }

  .bb{
    display: inline-block;
    margin-top: 50px;
    background: linear-gradient(90deg, #ffffff, #a1a1a1);
    border-radius: 50px;
    font-size: 15px;
    color: #5c5c5c;
    padding: 12px;

  }

  .bb:hover{
    background: linear-gradient(90deg, #19bcb8, #1da1bc);
    color: snow;
  }

   img{
    width: 100%;
    height: auto;
  }
  .i-all{
    padding-left: 50px;
    padding-right: 50px;
  }

  .h2{
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }


  .lh3{
    color: #555;
    text-align: left;
    font-size: 23px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";
    position: relative;
  }


  .clearfix:before, .clearfix:after {content: "";display: block;}
  .clearfix:after{clear:both;overflow: hidden;}
  .clearfix {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }

  body {
    font-family: Arial;

  }



  .clearfix .se-info {
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
    background: -webkit-linear-gradient(right, #ffffff, #2475a6);
    background: linear-gradient(to left, #eeeeee, #eeeeee);
    width: 30%;
    padding: 20px;
    list-style: none;
    height: auto;
    border: 1px solid rgba(223,231,239, .7);
    color: rgb(32,40,48);
    text-shadow: 0 1px 1px rgb(255,255,255);
    font-size: 14px;
    transition: all .2s ease;
  }

  .clearfix .se-info:hover{
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    /*-webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.5);*/
    /*-moz-box-shadow: 0 -1px 10px rgba(0,0,0,.5);*/
    /*box-shadow: 0 -1px 10px rgba(0,0,0,.5);*/
  }

  .clearfix .se-info h4 {
    height: auto;
    margin-bottom: 15px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid rgba(223,231,239, .7);
  }

  .clearfix .se-info p {
    text-align: center;
  }

  .clearfix .se-info p.btn a {
    display: inline-block;
    padding: 10px 40px;
    margin-top: 15px;

  color: #ffffff !important;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    transition: all .2s ease;
  }

  .clearfix .se-info p.btn a:hover {
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    box-shadow: 0 -1px 10px rgba(0,0,0,.5);
  }


  /*.bb {*/
  /*  display: inline-block;*/
  /*  width: 100%;*/
  /*  font-size: 18px;*/
  /*  padding: 10px;*/
  /*  margin-left: 150px;*/
  /*  margin-top: 100px;*/
  /*  transform: translate(-50%, -50%);*/
  /*  background: linear-gradient(90deg, #03a9f4, #696969, #ffeb3b, #696969);*/
  /*  background-size: 400%;*/
  /*  color: #fff;*/
  /*  text-align: center;*/
  /*  border-radius: 50px;*/
  /*  z-index: 1;*/
  /*}*/

  /*.bb:hover::before,*/
  /*.bb:hover {*/
  /*  animation: sun 8s infinite;*/
  /*}*/

  /*.bb::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  left: -5px;*/
  /*  right: -5px;*/
  /*  top: -5px;*/
  /*  bottom: -5px;*/
  /*  background: linear-gradient(90deg, #03a9f4, #c058ff, #ffeb3b, #03a9f4);*/
  /*  background-size: 400%;*/
  /*  border-radius: 50px;*/
  /*  filter: blur(10px);*/
  /*  z-index: -1;*/
  /*}*/

  /*@keyframes sun {*/
  /*  100%{*/
  /*    background-position: -400% 0;*/
  /*  }*/
  /*}*/


</style>
