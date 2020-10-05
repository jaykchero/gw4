<template>
    <div class="container">
      <div >


      <div class="clearfix">
        <div class="li ">

          <div class="l-box">
            <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/news/news1.jpg"   alt="">
            <p class="news-context right">
              5月1日起，莆田在中心城区全面推广第四代智能化停车管理，通过统一的智能停车收费管理，杜绝了部分人因吃惯“免费的午餐”而将公共停车资源据为己有的陋习，盘活现有的停车资源，提高车位的使用率，道路通行和停车秩序得到明显改善。
            </p>
          </div>



        </div>
        <div class="li ">
          <div class="l-box2">
            <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/news/news4.jpg"  alt="">
            <p class="news-context right">
              停车位智能收费管理近3个月以来，莆田市停车秩序大有改观，道路车辆违停率明显降低，城区公共停车场的泊位使用率由原来的不足10%提升到现在的80%，城区道路通行能力逐步提高。
            </p>
          </div>


        </div>

        <div class="li ">

          <div class="l-box3">
            <img class="tl1" src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/news/news6.jpg" alt="">
            <p class="news-context right">
              为了保证高考期间，考点附近道路畅通，考生顺利出行，7月7日至8日，市国投易泊公司在市区莆田一中、莆田二中、莆田三中、莆田四中、哲理中学5个考场附近设立468个爱心助考道路停车泊位，为送考车辆提供免费停车服务，为考生们保驾护航。
            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
</template>

<script>

</script>

<style scoped>



  .li{
    width: 30%;
    height: auto;
    margin-right: 20px;
    background: -webkit-linear-gradient(right, #ffffff, #2475a6);
    background: linear-gradient(to left, white, white);
    padding: 20px;
    border: 1px solid rgba(223,231,239, .7);
    color: rgb(32,40,48);
    text-shadow: 0 1px 1px rgb(255,255,255);
    font-size: 14px;
    transition: all .2s ease;
  }


  .clearfix{
    display: flex;
    justify-content: center;
  }

  .li img{
    width: 100%;
    height: auto;
  }




  @media only screen and (max-width:751px) {
    .li{
      width: 100%;
    }


    .clearfix{
      display: flex;
      flex-direction: column;
    }

  }


  .news-context{
    font-size: 14px;
    color: #202830;
    line-height: 30px;
  }







  ul li:hover{
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.5);
    box-shadow: 0 -1px 10px rgba(0,0,0,.5);
  }

  ul li h4 {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid rgba(105, 105, 105, 0.7);
  }

  ul li p {
    text-align: center;
  }


  .page1 {

    text-align: center;
    height: 80px;

  }
  .h3,
  .p {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }


</style>
