
<template>
  <div>
    <div class="head ">
      <div class="cont">
        <div class="head-left"><a href="#"><img src="../assets/logo.png" alt="" /></a></div>
        <div class="nav">
          <!--导航条-->
          <ul class="nav-main">
            <li>网站首页</li>
            <li id="li-1">关于我们<span></span></li>
            <li id="li-2">成功案例<span></span></li>
            <li id="li-3">我们服务<span></span></li>
            <li id="li-4">联系我们<span></span></li>
          </ul>
          <!--隐藏盒子-->
          <div id="box-1" class="hidden-box hidden-loc-index">
            <ul>
              <li>公司简介</li>
              <li>公司荣誉</li>
            </ul>
          </div>
          <div id="box-2" class="hidden-box hidden-loc-us">
            <ul>
              <li>金属字</li>
              <li>发光字</li>
              <li>灯箱</li>
              <li>水晶</li>
              <li>LED显示屏</li>
              <li>导视系统</li>
            </ul>
          </div>
          <div id="box-3" class="hidden-box hidden-loc-info">
            <ul>
              <li>金属字</li>
              <li>发光字</li>
              <li>灯箱</li>
              <li>水晶</li>
              <li>LED显示屏</li>
              <li>导视系统</li>
              <li>消费者服务</li>
            </ul>
          </div>
          <div id="box-4" class="hidden-box hidden-loc-info box04">
            <ul>
              <li>联系我们</li>
              <li>加入我们</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="yanse"></div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'

  export default{

    mounted() {
      //    nav-li hover e
      var num;
      $('.nav-main>li[id]').hover(function(){
        /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(300);
      },function(){
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-'+num).hide();
      });
//    hidden-box hover e
      $('.hidden-box').hover(function(){
        /*保持图标向上*/
        $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
      },function(){
        $(this).slideUp(200);
        $('#li-'+num).children().removeClass().addClass('hover-down');
      });

    }


  }



</script>

<style scoped>
  a{text-decoration:none;color:#040404;blr:expression(this.onFocus=this.blur())}/*去掉a标签的虚线框，避免出现奇怪的选中区域*/
  html{height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}
  body{background-color:#fff;color:#040404;min-height:100%;height:auto!important;height:100%}
  body,button,input,select,textarea,h1,h2,h3,h4,h5,h6{font:14px "微软雅黑","Microsoft Yahei",arial,simhei}
  table{border-collapse:collapse;border-spacing:0}
  img,fieldset{border:0;vertical-align:middle}
  ul,li,ol{list-style:none}
  em,i{font-style:normal}
  iframe{display:block}
  .clear{display:block;overflow:hidden;clear:both;height:0;line-height:0;font-size:0;}
  .cont{width:80%;margin:0px auto;
  }
  .textcent{ text-align:center}

  .head {height: 70px;width: 100%; }
  .yanse{ background:#be4355; width:50%; position: absolute;  right:0px;z-index:-1px; float:right;height:70px }
  .head-left {float: left;height: 41px;width: 135px;margin-left: 47px;padding-top: 15px;}
  /*nav导航盒子*/
  .nav{width:730px;height:54px;line-height:54px;text-align:center;font-size:16px;position:relative;background:#be4355  url(../assets/nav/nav_bg.jpg) no-repeat left bottom ;padding-top:16px;  padding-left:150px;float:right; font-weight:bold; font-family:"微软雅黑";z-index:1000}
  /*nav-main*/
  ul.nav-main{width:100%;height:100%;list-style-type:none}
  ul.nav-main span{display:inline-block;margin-left:18px;width:12px;height:9px; background:url(../assets/nav/sj1.png) no-repeat center center}

  /*图标向上旋转*/
  .hover-up{transition-duration:.5s;transform:rotate(180deg);-webkit-transform:rotate(180deg); }
  /*图标向下旋转*/
  .hover-down{transition-duration:.5s;transform:rotate(0);-webkit-transform:rotate(0)}
  /*导航条设置*/
  ul.nav-main>li{width:133px;height:100%;display:block;float:left;color:#fff;margin-right:1px;cursor:pointer}
  ul.nav-main>li:hover{background:#fff ; color:#be4355 }
  ul.nav-main>li:hover span{ background:url(../assets/nav/sg3.jpg)  no-repeat center center; z-index:100000 }
  /*隐藏盒子设置*/
  div.hidden-box{width:133px;position:absolute;display:none;background:#315565 url(../assets/nav/sj2.png) no-repeat  top center;top:70px;filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;}
  .hidden-box>ul{list-style-type:none;color:#fff;cursor:pointer; padding-top:12px;padding-bottom:15px}
  .hidden-box>ul li{ line-height:30px; height:30px; font-weight:500}
  /*.hidden-box li:hover{background:#643519;color:#fff}*/

  /*隐藏盒子位置设置*/
  .hidden-loc-index{left:284px}
  .hidden-loc-us{left:417px}
  .hidden-loc-info{left:550px}
  .box04{left:683px}


</style>
