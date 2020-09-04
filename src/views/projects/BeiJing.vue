<template>
    <div>
      <div class="h-b">
        <img v-lazy="hb">
      </div>

      <div class="Choices">
        <div class="Choices_text">
          <div class="Choices_head">北京</div>
          <div class="Choices_content">
            <div class="Choicesnext"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choicesnext.png" width="100%"></div>
            <div class="Choices_banner">
              <ul>
                <li>
                  <div class="Choices_left"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choices1.jpg" width="100%"></div>
                  <div class="Choices_right">
                    <h1>项目已经落地</h1>
                    <h2>随时随地轻松学</h2>
                    <p>采用直播互动课堂加录播的方式，课程界面显示PPT和板书，错过直播可以看回放，随时随地上课，不必担心错过重要知识点。</p>
                    <div class="Choicesbut"><a onclick="interactive.openNtkf('0','')">了解站长素材</a></div>
                  </div>
                </li>
                <li>
                  <div class="Choices_left"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choices2.jpg" width="100%"></div>
                  <div class="Choices_right">
                    <h1>师资力量雄厚</h1>
                    <h2></h2>
                    <p>站长素材机构13年起便推进教师全职化，吸纳北京广州优秀师资力量，提升教学团队硬实力，专注课程服务自升级，构建标准化课程体系，致力于让每一个学员都爱上学习并从中受益。</p>
                    <div class="Choicesbut"><a onclick="interactive.openNtkf('0','')">了解站长素材</a></div>
                  </div>
                </li>
                <li>
                  <div class="Choices_left"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choices3.jpg" width="100%"></div>
                  <div class="Choices_right">
                    <h1>精良课程模块</h1>
                    <h2></h2>
                    <p>优质课程设计，基础知识点详解，精选题库训练点拨，高频知识点切片解析，考前精编模拟题演练。</p>
                    <div class="Choicesbut"><a onclick="interactive.openNtkf('0','')">了解站长素材</a></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="Choicestel">
              <ul>
                <li><01/03></li>
                <li><02/03></li>
                <li><03/03></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "Putian",
      data () {
          return {
            hb:'http://qexz4xnye.hn-bkt.clouddn.com/h-b1.jpg',
          }
      },
      mounted() {
        $('.Choicesnext').click(function () {
          $(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {
            $(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));
            $(".Choices_banner ul").css('marginLeft','0px');
          });
          $(".Choicestel ul").css('marginLeft','-1184px');
          $(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));
          $(".Choicestel ul").css({marginLeft:"0px"},600);
        })

        setInterval("this.Choices()","3000");
        var tabChange = setInterval(Choices,3000);
        //鼠标悬停暂停切换
        $('.Choicesnext').mouseover(function(){
          clearInterval(tabChange);
        });
        $('.Choicesnext').mouseout(function(){
          tabChange = setInterval(Choices,3000);
        });

      },
      methods:{
        Choices(){
          $(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {
            $(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));
            $(".Choices_banner ul").css('marginLeft','0px');
          });
          $(".Choicestel ul").css('marginLeft','-1184px');
          $(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));
          $(".Choicestel ul").css({marginLeft:"0px"},600);
        }
      }
    }


</script>

<style scoped>
  .h-b img {
    width: 100%;
    height: 100%;
  }
  .h-b{
    margin-bottom: -50px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }


  a{ cursor:pointer; text-decoration: none;}
  ul li{ list-style:none;}
  /*选择尚德开始*/
  .Choices{ width:100%; float:left; height:819px; background:url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choices.jpg) no-repeat center; background-size:cover;}
  .Choices_text{ width:1200px; height:819px; margin:0 auto;}
  .Choices_head{ width:100%; float:left; height:55px; margin-top:50px; line-height:55px; letter-spacing:2px; font-weight:bold; text-align:center; font-size:48px; color:#FFF; display:block; position:relative;}
  .Choices_head:before,.Choices_head:after{content: ''; position: absolute;top: 30px;background: #FFF;width:265px;height: 2px;}
  .Choices_head:before{ left:175px;}
  .Choices_head:after{ right:175px;}

  .Choices_content{ width:1184px; height:594px; float:left; margin-left:3px;}
  .Choicesnext{ width:38px; height:37px; float:left; margin-left:1136px; margin-top:24px; cursor:pointer;}
  .Choices_banner{ width:1184px; height:399px; float:left; margin-top:39px; overflow: hidden;}
  .Choices_banner ul{ width: 12000px;  overflow: hidden;}
  .Choices_banner ul li{ width:1184px; height:399px; float:left;}
  .Choices_left{ width:594px; height:399px; float:left;}
  .Choices_right{ width:590px; height:399px; float:left; background-color: rgba(255,255,255,0.93)}
  .Choices_right h1{ width:590px; height:30px; line-height:30px; float:left; text-align:center; font-size:28px; margin-top:70px; color:#464646;}
  .Choices_right h2{ width:590px; height:30px; line-height:30px; float:left; text-align:center; font-size:28px; margin-top:10px; color:#464646;}
  .Choices_right p{ width:450px; height:70px; float:left; margin-left:70px; text-align:center; font-size:18px; color:#606060; margin-top:20px;}
  .Choicesbut{ width:197px; height:49px; float:left; border:1px solid #bfbfbf; background-color:rgba(255,255,255,0.7); text-align:center; line-height:49px; color:#606060; font-size:22px; margin-left:195px; margin-top:57px;}
  .Choicestel{ width:1184px; height:38px; text-align:center; line-height:38px; font-size:36px; float:left; font-family:"Arial"; overflow:hidden; color:#FFF; margin-top:100px;
    -webkit-user-select:none;/*谷歌 /Chrome*/
    -moz-user-select:none; /*火狐/Firefox*/
    -ms-user-select:none;    /*IE 10+*/
    user-select:none;}
  .Choicestel ul{ width:12000px; overflow:hidden;}
  .Choicestel ul li{ width:1184px; height:38px; float:left;}
</style>
