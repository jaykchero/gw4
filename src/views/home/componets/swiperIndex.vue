<template>
<div>
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
         <div class="swiper-slide slide-one">

           <div class="ani"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">

             <div class="toptitleup" style="transform: scale(0.5);">
               <div class="mouse">

               </div>
               <p class="mousep" >鼠标滚动</p>
             </div>
           </div>

         </div>
        <div class="swiper-slide slide-two">
           <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
<!--             <h3>普行智能停车</h3>-->
           </div>
        </div>
        <div class="swiper-slide slide-three">
            <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
<!--               <h3>普行智能停车</h3>-->
             </div>
        </div>
        <div class="swiper-slide slide-four">
          <div class="page ani home"  swiper-animate-effect="slideInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
<!--              <h3>普行智能停车</h3>-->
            </div>

        </div>

      </div>
      <div class="swiper-pagination"></div>

    </div>

</div>

</template>

<script>
  import Swiper from "swiper"

  import $ from 'jquery'
  export default {

     components:{
       //pro
     },

    date () {
      return {
        left:{},
        screenWidth:'',
        screenHeight:'',
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
        $('.swiper-pagination').css("top","950px");

      }

      this.left = Array.from(document.getElementsByClassName('.swiper-pagination'))
      document.addEventListener('scroll', this.handleScroll3)




      var swiper = new Swiper('.banner-swiper',{
      		  autoplay: {
      			delay: 5000,
      			disableOnInteraction: false,
      		  },
      		  speed: 1000,
      		  //allowTouchMove: false,
      		  lazy: {
      			loadPrevNext: true,
      			loadPrevNextAmount: 3,
      		  },
      		  centeredSlides: true,
      		  loop: true,
      		  slidesPerView : 'auto',

      		  pagination: {
      		  			el: '.swiper-pagination',
      		  			clickable :true,
      		  		  },
      		  navigation: {
      			nextEl: '.swiper-button-next',
      			prevEl: '.swiper-button-prev',
      		  },
      		});

      $('.banner-swiper').hover(function(){
        swiper.autoplay.stop();
      },function(){
        swiper.autoplay.start();
      });
      		window.onresize=function(){
      		  swiper.update();
      		}
    },
    methods:{

      // 循环判断是否要触发过渡
      handleScroll3 (evt) {
        for (var i = 0; i < this.left.length; i++) {
          var elem = this.left [i]
          var cN =elem.className
          if (this.isElemVisible(elem)) {
            elem.className=cN+" "+"animated slideInUp"
            this.left.splice(i, 1) // 只让它运行一次
          }
        }
      },
      // 判断元素距离窗口的位置
      isElemVisible (el) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top + 200 // 200 = buffer
        var elemBottom = rect.bottom
        return elemTop < window.innerHeight && elemBottom >= 0
      }
    }


  }
</script>

<style scoped="scoped">
@import url('../../../assets/css/swiper.min.css');

.page {
  text-align: center;
  height: 100px;
  width: 60px;
  overflow: hidden;
  margin-top: 300px;
}

h3,
p {
  font-size: 40px;
  font-weight: 400;
  color: #fff;
}



.slogan {
  text-align: center;
  font-size: 50px;
  color: #fff;
  padding: 30px 0;
}


    h3{
      margin-top: 60px;
      font-size: 40px;
      font-weight: 400;
      color: #fff;
    }
    .swiper-pagination{

        position: absolute;
        top: 850px;
        z-index: 999;
    }

    .slide-one {
      height: 1080px !important;
      background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner1.png) no-repeat center;
      background-size: cover;
    }
    .slide-two {
       height: 1080px !important;
      background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner2.png) no-repeat center;
      background-size: cover;
    }
    .slide-three {
       height: 1080px !important;
      background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner3.png) no-repeat center;
      background-size: cover;
    }
    .slide-four {
      height: 1080px !important;
      background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E9%A6%96%E9%A1%B5/banner4.png) no-repeat center;
      background-size: cover;
    }


    img{
      width: 100%;
      height: 700px !important;
    }

body {
      margin: 0;
    }
	h2{
	  font-family: -webkit-pictograph;
	  font-size:30px;
	  font-style:italic;
	  text-align:center;
    }
    .swiper-container {
	    padding-bottom:40px;
    }

    .swiper-slide {
	    width:100%;
		transition-timing-function:linear;
    }
	@media only screen and (max-width:1200px){
	    .swiper-slide {
	        width:770px;
        }
	}
	@media only screen and (max-width:980px){
	    .swiper-slide {
	        width:471px;
        }
	}
	@media only screen and (max-height:480px){
	    .swiper-slide {
	        width:471px;
        }
	}
	.swiper-slide img{
		width:100%;
		border-radius: 4px;}
	.swiper-slide .title{
		position:absolute;
		transform:rotate(90deg);
		transform-origin:left top;
		left:-3px;
		font-size:11px;
		color: rgb(102, 102, 102);}
   .swiper-button-next, .swiper-button-prev{
  		width:86px;
  		height:112px;
  		background-size:86px 112px;
  		margin-top:-56px;
  		outline:none;}


</style>

<style>
  .swiper-pagination-bullet {
       width: 15px !important;
       height: 15px !important;
       text-align: center  !important;
       line-height: 20px  !important;
       font-size: 12px  !important;
        opacity: 1  !important;

      /*background: -webkit-linear-gradient(right, #2475a6, dodgerblue) !important;*/
    background: linear-gradient(to left, #696969, #696969)  !important
     }

      .swiper-pagination-bullet-active {
       color: #fff  !important;
       background: #2475a6 !important;
        border: 1px solid #fff;
        transform: scale(1.1);
     }
</style>
<style scoped>

  .toptitleup {
    /* animation-name: bounceInUp;
    animation-duration: 1s; */
    margin-top: 300px;
    transform: scale(0.5);
  }

  p.mousep {
     font-size: 50px;
    font-weight: 300;

    /* margin-top: 50px; */
    font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
    letter-spacing: 12px;
    text-indent: 12px;
    color: #ffffff;
    -webkit-animation: colorText 5s ease-out infinite,
    nudgeText 5s ease-out infinite;
    animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
  }

  .mouse {
    margin: 0 auto;

    background: #4e5559 -webkit-linear-gradient(transparent 0%, transparent 50%, #ffffff
    50%, #ffffff 100%);
    background: #4e5559
    linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
    position: relative;
    width: 52px;
    height: 88px;
    background-size: 100% 100%;
    border-radius: 100px;
    background-size: 225%;
    -webkit-animation: colorSlide 5s linear infinite,
    nudgeMouse 5s ease-out infinite;
    animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
  }
  .mouse:before,
  .mouse:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .mouse:before {
    width: 46px;
    height: 82px;
    background-color: #222a30;
    border-radius: 100px;
  }
  .mouse:after {
    background-color: #ffffff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    -webkit-animation: trackBallSlide 5s linear infinite;
    animation: trackBallSlide 5s linear infinite;
  }


  @-webkit-keyframes colorSlide {
    0% {
      background-position: 0% 100%;
    }
    20% {
      background-position: 0% 0%;
    }
    21% {
      background-color: #4e5559;
    }
    29.99% {
      background-color: #ffffff;
      background-position: 0% 0%;
    }
    30% {
      background-color: #4e5559;
      background-position: 0% 100%;
    }
    50% {
      background-position: 0% 0%;
    }
    51% {
      background-color: #4e5559;
    }
    59.99% {
      background-color: #ffffff;
      background-position: 0% 0%;
    }
    60% {
      background-color: #4e5559;
      background-position: 0% 100%;
    }
    80% {
      background-position: 0% 0%;
    }
    81% {
      background-color: #4e5559;
    }
    89.99%,
    100% {
      background-color: #ffffff;
    }
  }

  @keyframes colorSlide {
    0% {
      background-position: 0% 100%;
    }
    20% {
      background-position: 0% 0%;
    }
    21% {
      background-color: #4e5559;
    }
    29.99% {
      background-color: #ffffff;
      background-position: 0% 0%;
    }
    30% {
      background-color: #4e5559;
      background-position: 0% 100%;
    }
    50% {
      background-position: 0% 0%;
    }
    51% {
      background-color: #4e5559;
    }
    59.99% {
      background-color: #ffffff;
      background-position: 0% 0%;
    }
    60% {
      background-color: #4e5559;
      background-position: 0% 100%;
    }
    80% {
      background-position: 0% 0%;
    }
    81% {
      background-color: #4e5559;
    }
    89.99%,
    100% {
      background-color: #ffffff;
    }
  }
  @-webkit-keyframes trackBallSlide {
    0% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    6% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    14% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    15%,
    19% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    28%,
    29.99% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    30% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    36% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    44% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    45%,
    49% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    58%,
    59.99% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    66% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    74% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    75%,
    79% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    88%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
  }
  @keyframes trackBallSlide {
    0% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    6% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    14% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    15%,
    19% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    28%,
    29.99% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    30% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    36% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    44% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    45%,
    49% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    58%,
    59.99% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
    66% {
      opacity: 1;
      -webkit-transform: scale(0.9) translateY(5px);
      transform: scale(0.9) translateY(5px);
    }
    74% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(40px);
      transform: scale(0.4) translateY(40px);
    }
    75%,
    79% {
      opacity: 0;
      -webkit-transform: scale(0.4) translateY(-20px);
      transform: scale(0.4) translateY(-20px);
    }
    88%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1) translateY(-20px);
      transform: scale(1) translateY(-20px);
    }
  }
  @-webkit-keyframes nudgeMouse {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    30% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    60% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    80% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes nudgeMouse {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    30% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    60% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    80% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @-webkit-keyframes nudgeText {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    30% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    60% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    80% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes nudgeText {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    30% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    60% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    80% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @-webkit-keyframes colorText {
    21% {
      color: rgba(255, 255, 255, 0);
    }
    30% {
      color: #ffffff;
    }
    51% {
      color: rgba(255, 255, 255, 0);
    }
    60% {
      color: #ffffff;
    }
    81% {
      color: rgba(255, 255, 255, 0);
    }
    90% {
      color: #ffffff;
    }
  }
  @keyframes colorText {
    21% {
      color: rgba(255, 255, 255, 0);
    }
    30% {
      color: #ffffff;
    }
    51% {
      color: rgba(255, 255, 255, 0);
    }
    60% {
      color: #ffffff;
    }
    81% {
      color: rgba(255, 255, 255, 0);
    }
    90% {
      color: #ffffff;
    }
  }

</style>
