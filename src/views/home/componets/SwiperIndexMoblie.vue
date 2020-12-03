<template>
    <div>
      <swiper  ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img  v-lazy="img8" >
        </swiper-slide>
        <swiper-slide>
          <img v-lazy="img2" >
        </swiper-slide>
        <swiper-slide>
          <img v-lazy="img3" >
        </swiper-slide>
        <swiper-slide>
          <img v-lazy="img5" >
        </swiper-slide>
<!--        <swiper-slide>-->
<!--          <img  v-lazy="img8" >-->
<!--        </swiper-slide>-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "SwiperIndexMoblie",
      data () {
          return {
            img8:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner1.png",
            img2:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner2.png",
            img3:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner3.png",
            img5:"https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner4.png",

            swiperOptions: {
              autoplay:true,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,

              },

              keyboard: true,

            }
          }
      }
    }
</script>

<style scoped>
  @media only screen and (max-width:821px) {
    .swiper-slide img {
      width: 100% !important;
      height:400px !important;
    }

    .swiper-slide {
      margin-top: 0px;
      height: 400px !important;
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

  }
</style>
