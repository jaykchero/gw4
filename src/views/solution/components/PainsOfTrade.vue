/* eslint-disable */
<template>
     <div class="all">
      <div class="potheader">
     <h2 class="animated slideInUp h2">行业痛点</h2>
    <!--  <p class="pp animated slideInUp">Pains of Industry</p> -->
    <span class="pp animated slideInUp">Pains of Industry</span>
    <!-- <div class="liness slideInUp"></div> -->
      </div>
       <!-- Swiper -->
         <div class="swiper-container">
           <div class="swiper-wrapper">
             <div class="swiper-slide init ">
               <img class="img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/cheweinanqiu.png" alt="">
               <p class="desc init ">车位已满</p>
             </div>
             <div class="swiper-slide"><img class="img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/rengongshoufei.png" alt=""> <p class="desc init">人工收费频繁</p></div>
             <div class="swiper-slide"><img class="img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/cheliangluanting.png" alt=""><p class="desc init">车辆乱停</p></div>
             <div class="swiper-slide"><img class="img" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/dianchezhanwei.png" alt=""><p class="desc init">电动车占用车位</p></div>
           </div>
         <!-- <div class="swiper-pagination"></div> -->
         </div>
       </div>

</template>

<script>
  import Swiper from "swiper"
  import $ from "jquery";
  export default {
    mounted() {

      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
      console.log(this.screenHeight,this.screenWidth)
      if(this.screenWidth>1600||this.screenHeight>900){
        $('.pp,.divider').css("margin-left","50px");
        $('.swiper-container').css({"width":"1200px","overflow":"hidden"})
        $('.swiper-slide').css({"width":"700px","height":"500px"})
      }




      var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 100,
          centeredSlides: true,
          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          on: {
          	init: function() {
          		this.slides.removeClass('init');
          	},

          },


        });
    }
  }


</script>

<style scoped="scoped">
    .potheader{

      padding-left: 50px;
      padding-right: 50px;
    }

    .desc{
    display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
    }
    .init{
    	opacity: 1;
    }

  .h2{

    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
   }
   .pp{
    position: absolute;
    left: 210px;
    color: #555;
    text-align: left;
     font-size: 23px;
    line-height: 36px;
    font-family: "itcavantgardepro-bk";

   }
    p{
      letter-spacing: .009em;
      color: #111;
      font-size: 20px;
      position: absolute;
      top: 460px;
      opacity: 1;
      z-index: 999;
       }


    html, body {
      position: relative;
      height: 600px !important;
      width: 1200px;

    }
    body {
     /* background: #eee; */
    /* background:url("../../../assets/bg/hytd.jpg") no-repeat; */
     background-size: 100%;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;

    }
    .img{
      font-family: 'Nunito', sans-serif;
      background: linear-gradient(to left, #19bcb8, #2475a6);
      padding: 5px;
      width: 570px;
      height: 370px;

      list-style: none;
      border: 1px solid rgba(223,231,239, .7);
    }
    img{
      width: 550px;
      height: 350px;
    }

    .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
      position: relative;
      width: 600px;
      height: 500px;
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
	  transform: scale(0.5);
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);

	}

  .desc {

  	width: 80%;
  	text-align: center;
  	display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
  }
  .init .desc {
  	opacity: 1;


  }

 .swiper-slide-prev .desc {
  	transform: translateX(-70px);
  }
  .swiper-slide-next .desc {
  	transform: translateX(70px);
  }
  .swiper-slide-active .desc {
  	opacity: 1;
  	transform: translateX(0);
  }

</style>
