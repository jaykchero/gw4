<template>

  <div>
    <div v-if="flag==false">
      <div class="mobile-1" style="margin-bottom: 30px">
        <SwiperIndexMoblie></SwiperIndexMoblie>
      </div>

      <div class="mobile-2" style="padding: 20px">
<!--        <div class="page1">-->
<!--          <p >项目经验</p>-->
<!--          <p >鼠标选中查看详情</p>-->
<!--        </div>-->
<!--        <Protecteds></Protecteds>-->
        <div  class="page1">
          <p style="color: #2e2e2e" class="p">莆田市道路停车分布图</p>
        </div>

        <ParkingDistribution></ParkingDistribution>
      </div>
      <div class="mobile-3 " style="margin-top: 50px">
        <div class="page1">
          <p>最新资讯</p>
          <p>Latest News</p>
        </div>
        <News style="height: 65%;margin-bottom: 50px"></News>
        <Bottom style="height: 40%"></Bottom>
      </div>
    </div>


    <div v-if="flag" class="home" v-loading="loading">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide slide-one" >
          <SwiperIndex ></SwiperIndex>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-two">
          <div @click="gotoAmap" class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
<!--            <div class="page1">-->
<!--              <p class="p">项目经验</p>-->
<!--              <p class="pp">鼠标选中查看详情</p>-->
<!--            </div>-->
                        <div class="page1">
                          <p class="p">莆田市道路停车分布图</p>
                        </div>

            <ParkingDistribution  style="z-index: 10000"></ParkingDistribution>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-three">
          <div class="ani home" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" >

            <div class="page2">
              <h3 class="p tl1">最新资讯</h3>
              <p class="p tl1">Latest News</p>
            </div>
            <News style="height: 65%;margin-bottom: 50px"></News>
            <Bottom style="height: 40%"></Bottom>
          </div>
        </swiper-slide>
      </swiper>

    </div>
  </div>



</template>

<script>
  import SwiperIndex from './componets/swiperIndex.vue'
  import myAdv from './componets/adv.vue'
  import * as swiperAni from '../../assets/js/animate.js' //根据自己的路径进行引入
  import Protecteds from '../about/componets/ProjectExperience'
  import News from "./componets/News";
  import Bottom from "../../components/Bottom";
  import SwiperIndexMoblie from "./componets/SwiperIndexMoblie";
  import ParkingDistribution from '../ParkingDistribution/ParkingDistribution'

  import axios from 'axios';


import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {

  components: {

    // Protecteds,
    SwiperIndex,
    swiper,
    swiperSlide,

    News,
    Bottom,
    SwiperIndexMoblie,
    ParkingDistribution,

  },
  data() {
    return {
      flag:true,
      cWidth:document.body.clientWidth,
      loading: true,
      caseList: [],
      newsList: [],
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
      //  grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
       // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        pagination: {
                el: '.swiper-pagination1',
                dynamicBullets: true,
                clickable :true,
              },

            on:{
              init: function(){
               swiperAni.swiperAnimateCache(this); //隐藏动画元素
               swiperAni.swiperAnimate(this); //初始化完成开始动画
                 },
                 slideChangeTransitionStart: function(){
                 swiperAni.swiperAnimate(this); //每个slide开始切换时也运行当前slide动画
                   this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
                    }
                },
      }
    };
  },

  mounted() {
    this.getHC();
   // this.cWidth=document.body.clientWidth;
    this.checkWidth()
    window.addEventListener("resize", this.checkWidth); // 横竖屏问题

  },

  methods:{

    getHC(){

      axios.get("http://localhost:8081/homecarousel/list").then((res)=>{
        console.log(res)
      })

    },

    gotoAmap(){
      this.$router.push({ path:'/putian'});
    },
    checkWidth(){
      this.cWidth=document.body.clientWidth;
      if(this.cWidth<821){
        this.flag=false;
      }else {
        this.flag=true;
      }
    },
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

};
</script>

<style lang="scss" scoped>

  .page2{
    margin-bottom: 30px;
  }

  mobile-3, mobile-2 .p{
    color: #5c5c5c;

  }
  mobile-3, mobile-2 .pp{
    color: #696969;
  }

  .slide-three {
    height: 1080px !important;
    background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/news.jpg) no-repeat center;
    background-size: cover;
  }


  .slide-one{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .slide-two{
    padding: 60px;
     width:100%;  height: 700px; background:url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choices.jpg) no-repeat center; background-size:cover;
  }



  .p {
    margin-top: 20px;
     font-size: 20px;
     font-weight: 400;
     color: #ffffff;
   }
  .pp {
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 20px;
  }

.swiper-slide {
  font-size: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;


  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}


.order {
  order: -1;
}
.order-img {
  order: 1;
}
</style>


