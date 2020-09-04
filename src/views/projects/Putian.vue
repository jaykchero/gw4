<template>
    <div>
      <div class="h-b">
        <img v-lazy="hb">
      </div>

      <div class="Choices">
        <div class="Choices_text">
          <div class="Choices_head animated backInDown">莆田</div>
          <div class="Choices_content">
            <div class="Choicesnext"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/test/Choicesnext.png" width="100%"></div>
            <div class="Choices_banner">
              <ul>
                <li>
                  <div class="Choices_left"><img src="https://jaykchero.oss-cn-shenzhen.aliyuncs.com/protect/putian.jpg" width="100%"></div>
                  <div class="Choices_right">
                    <h1>普行智能停车（深圳）有限公司莆田分公司</h1>
                    <h2></h2>
                    <p>普行智能停车(深圳)有限公司莆田分公司成立于2020年04月02日，注册地位于福建省莆田市城厢区凤凰山街道龙平街67号</p>
                    <div class="Choicesbut"><a href="https://aiqicha.baidu.com/company_detail_30684142241006?rq=ef&pd=ee&from=ps" target="_blank">了解更多</a></div>
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
                    <div class="Choicesbut"><a href="https://aiqicha.baidu.com/company_detail_30684142241006?rq=ef&pd=ee&from=ps" target="_blank">了解更多</a></div>
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

        this.header = Array.from(document.getElementsByClassName('Choices_head'))
        this.left = Array.from(document.getElementsByClassName('Choices_left'))
        this.right = Array.from(document.getElementsByClassName('Choices_right'))
        //  console.log("hah"+this.left)
        // 监听鼠标滚动事件
        document.addEventListener('scroll', this.handleScroll3)
        document.addEventListener('scroll', this.handleScroll2)
        document.addEventListener('scroll', this.handleScroll)


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

        handleScroll (evt) {
          for (var i = 0; i < this.header.length; i++) {
            var elem = this.header[i]
            //console.log(elem.className)
            var cN=elem.className
            if (this.isElemVisible(elem)) {
              elem.className=cN+" "+"animated fadeInDown"
              // console.log(elem.className)
              this.header.splice(i, 1) // 只让它运行一次
            }
          }
        },


        handleScroll3 (evt) {
          for (var i = 0; i < this.right.length; i++) {
            var elem = this.right[i]
            //console.log(elem.className)
            var cN=elem.className
            if (this.isElemVisible(elem)) {
              elem.className=cN+" "+"animated fadeInRight"
              // console.log(elem.className)
              this.right.splice(i, 1) // 只让它运行一次
            }
          }
        },


        handleScroll2 (evt) {
          for (var i = 0; i < this.left.length; i++) {
            var elem = this.left[i]
            //console.log(elem.className)
            var cN=elem.className
            if (this.isElemVisible(elem)) {

              elem.className=cN+" "+"animated slideInLeft"
              //console.log(elem.className)
              this.left.splice(i, 1) // 只让它运行一次
            }
          }
        },

        // 判断元素距离窗口的位置
        isElemVisible (el) {
          var rect = el.getBoundingClientRect()
          var elemTop = rect.top  // 200 = buffer
          var elemBottom = rect.bottom
          return elemTop < window.innerHeight && elemBottom >= 0
        },


        Choices(){
          $(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {
            $(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));
            $(".Choices_banner ul").css('marginLeft','0px');
          });
          $(".Choicestel ul").css('marginLeft','-1184px');
          $(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));
          $(".Choicestel ul").css({marginLeft:"0px"},600);
        },
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
