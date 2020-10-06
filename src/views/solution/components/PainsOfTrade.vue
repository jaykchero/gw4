/* eslint-disable */
<template>
     <div class="all">
      <div class="potheader">
     <h2 class="animated slideInUp h2">行业痛点</h2>

    <span class="lh3 animated slideInUp">Pains of Industry</span>
      </div >
        <div v-if="flag==false">
       <swiper  ref="mySwiper" :options="swiperOptions">
         <swiper-slide>
           <img  v-lazy="img1" >
           <p class="haha ">车位已满</p>
         </swiper-slide>
         <swiper-slide>
           <img v-lazy="img2" >
           <p class="haha ">人工收费频繁</p>
         </swiper-slide>
         <swiper-slide>
           <img v-lazy="img3" >
           <p class="haha ">车辆乱停</p>
         </swiper-slide>
         <swiper-slide>
           <img v-lazy="img4" >
           <p class="haha ">电动车占用车位</p>
         </swiper-slide>

         <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
        </div>

         <div v-if="flag" class="swiper-container swiper-banner3">
           <div class="swiper-wrapper">
             <div class="swiper-slide init ">
               <img class="img" v-lazy="img1" >
               <p class="desc init ">车位已满</p>
             </div>
             <div class="swiper-slide"> <img class="img" v-lazy="img2" > <p class="desc init">人工收费频繁</p></div>
             <div class="swiper-slide"> <img class="img" v-lazy="img3" ><p class="desc init">车辆乱停</p></div>
             <div class="swiper-slide"> <img class="img" v-lazy="img4" ><p class="desc init">电动车占用车位</p></div>
           </div>
         </div>
       </div>

</template>

<script>
  import Swiper from "swiper"
  import $ from "jquery";
  export default {

    data(){
      return {
        img1:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/cheweinanqiu.png",
        img2:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/rengongshoufei.png",
        img3:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/cheliangluanting.png",
        img4:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E8%A1%8C%E4%B8%9A%E7%97%9B%E7%82%B9/dianchezhanwei.png",
        flag:true,
        cWidth:document.body.clientWidth,
        swiperOptions: {

          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,

          },
          mousewheel: true,
          keyboard: true,

        }
      }
    },

    mounted() {

      this.createSwiper()
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
        $('.pp,.divider').css("margin-left","50px");
        $('.swiper-container').css({"width":"1200px","overflow":"hidden"})
        $('.swiper-slide').css({"width":"700px","height":"500px"})
      }



    },
    methods:{
      checkWidth(){
        this.cWidth=document.body.clientWidth;
        if(this.cWidth<821){
          this.flag=false;
        }else {

          this.createSwiper()
          this.flag=true;
        }
      },

      createSwiper(){
        var swiper = new Swiper('.swiper-banner3', {
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
  }


</script>

<style scoped="scoped">

  @media only screen and (max-width:751px) {
    .haha{
      letter-spacing: .009em;
      color: #111;
      font-size: 16px !important;
      position: absolute;
      top: 20px !important;
      opacity: 1;
      z-index: 1000;
    }
    .swiper-slide img {
      width: 80% !important;
      height:200px !important;
    }

    .swiper-slide {
      margin-top: 100px;
      height: 300px !important;
      text-align: center !important;
      font-size: 18px !important;
      background: #fff !important;
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: -webkit-flex !important;
      display: flex !important;
      -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
      -webkit-justify-content: center !important;
      justify-content: center !important;
      -webkit-box-align: center !important;
      -ms-flex-align: center !important;
      -webkit-align-items: center !important;
      align-items: center !important;
    }


    .h2{
      font-size: 20px !important;
    }
    .lh3{
      font-size: 16px!important;
     margin-bottom: -100px;
    }


    p{
      letter-spacing: .009em;
      color: #111;
      font-size: 16px !important;
      position: absolute;
      top: 330px !important;
      opacity: 1;
      z-index: 999;
    }
    .img{
      font-family: 'Nunito', sans-serif;
      background: linear-gradient(to left, #19bcb8, #2475a6);
      padding: 2px;
      width: 600% !important;
      height: auto;
      list-style: none;
      border: 1px solid rgba(223,231,239, .7);
    }
    img{
      width: 310% !important;
      height: auto;
    }

  }

  .swiper-banner2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

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
   .lh3{
    display: block;
    color: #555;
    text-align: left;
     font-size: 23px;
    line-height: 36px;

   }
    p{
      letter-spacing: .009em;
      color: #111;
      font-size: 20px;
      position: absolute;
      top: 520px;
      opacity: 1;
      z-index: 999;
       }


    .img{
      font-family: 'Nunito', sans-serif;
      background: linear-gradient(to left, #19bcb8, #2475a6);
      padding: 5px;
      width: 150%;
      height: auto;
      list-style: none;
      border: 1px solid rgba(223,231,239, .7);
    }
    img{
      width: 150%;
      height: auto;
    }

    .swiper-slide {
      position: relative;
      width: 600px;
      height: 600px;
      text-align: center;
      font-size: 18px;
      background: #fff;
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
