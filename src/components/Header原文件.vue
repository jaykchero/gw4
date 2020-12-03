/* eslint-disable */
<template>
  <div  class="container">
  <div  v-bind:class="{'header-fixd animated fadeInDown all-background-color':isScroll=='1',' ':isScroll==0}">
<div class="h-all row" v-bind:class="{'animated fadeInDown':isReadyonly=='1',' ':isReadyonly!='1'}">
<div class="h-top " >

   <div class="h-logo col-md-4 col-sm-6" >

      <i class="logo"></i>
   </div>

   <div class="h-header col-md-4 col-sm-6">
 <a-menu v-model="current" mode="horizontal" router :default-active="$route.path" v-bind:class="{'header-menu':isScroll=='1',' ':isScroll==0}">
      <a-sub-menu index="1">
        <span slot="title" class="submenu-title-wrapper " @click="dhcli"
          > <router-link to="/home">首页</router-link></span
        >

      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"  @click="dhcli"
          > <router-link to="/about">关于我们</router-link></span
        >
        <a-menu-item-group >
           <a-menu-item key="setting:1">
              <a :href="'#/about?maodian=about1'">公司介绍</a>
           </a-menu-item>
           <a-menu-item key="setting:2">
               <a :href="'#/about?maodian=culture'">企业文化</a>
           </a-menu-item>

          <a-sub-menu>
             <span slot="title" @click="dhcli"
             >  <a :href="'#/about?maodian=ProjectExperience'" style="color: #4e4e4e">项目经验</a></span
             >
            <a-menu-item-group >
            <a-menu-item key="1" @click="dhcli">
              <li><router-link to="/putian">莆田</router-link></li>
            </a-menu-item>
              </a-menu-item-group >
          </a-sub-menu>

          <a-menu-item key="setting:3">

              <a :href="'#/about?maodian=DevelopmentHistory'">发展历程</a>

          </a-menu-item>

         </a-menu-item-group>

      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper" @click="dhcli"
          > <router-link to="/solution">解决方案</router-link></span>
        <a-menu-item-group >
           <a-menu-item key="setting:1">

               <a :href="'#/solution?maodian=PainsOfTrade'">行业痛点</a>

           </a-menu-item>
           <a-menu-item key="setting:2">

             <a :href="'#/solution?maodian=ProjectConstructionIdeas'">建设思考</a>

           </a-menu-item>

           <a-menu-item key="setting:3">

             <a :href="'#/solution?maodian=Comparisonschemes'">方案对比</a>

           </a-menu-item>

           <a-menu-item key="setting:4">

             <a :href="'#/solution?maodian=EquipmentDisplay'">设备展示</a>

           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper" @click="dhcli"
          > <router-link to="/puxingSmartParking">普行停车</router-link></span>
        <a-menu-item-group >

           <a-menu-item key="setting:1">
             <a :href="'#/puxingSmartParking?maodian=t1'">停车系统</a>
           </a-menu-item>
           <a-menu-item key="setting:2">
              <a :href="'#/puxingSmartParking?maodian=t2'">社会效益</a>
           </a-menu-item>

           <a-menu-item key="setting:3">
             <a :href="'#/puxingSmartParking?maodian=t3'">经济效益</a>
           </a-menu-item>
           <a-menu-item key="setting:4">
             <a href="http://www.ptyibo.com/#/login" target="_blank">员工登录</a>
           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>

   <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper" @click="dhcli"
        > <router-link to="/constantUs">联系我们</router-link></span>
   </a-sub-menu>

    </a-menu>

   </div>



</div>
</div>
</div>
  </div>
</template>

<script>

  export default{


      data() {
          return {
            current: ['mail'],
            allDH:[] ,//动画
            isReadyonly:0,
            timer:0,
            timer1:0,
            timer2:0,
            timer3:0,
            header:[],
           // $header:{},
            isScroll:0,
          };
        },

        mounted() {

          // 监听鼠标滚动事件
          document.addEventListener('scroll', this.handleScroll)
          document.addEventListener('scroll', this.handleScroll1)

          this.isReadyonly=0;
           this.allDH = Array.from(document.getElementsByClassName('h-all'))

           document.addEventListener('scroll', this.handleScroll3)
             for (var i = 0; i < this.allDH.length; i++) {
               var elem = this.allDH[i]
               var cN=elem.className
               if (this.isElemVisible(elem)) {
                 elem.className=cN+" "+"animated slideInDown"

                  this.allDH.splice(i, 1) // 只让它运行一次

               }
             }

             clearTimeout(this.timer1);  //清除延迟执行

              this.timer1 = setTimeout(()=>{   //设置延迟执行
                  this.isReadyonly=1;
              },100);

        },
        methods:{
                      //实现导航吸顶
                      handleScroll1 (evt) {

                        this.timer3 = setTimeout(()=>{   //设置延迟执行

                        var currentTop  = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                        if( currentTop > 72){

                                    this.isScroll=1;
                              //  },10);

                             } else if (currentTop === 0) {
                                this.isScroll=0;
                             }

                             else {
                                    this.isScroll=0;

                             }
                               },10);

                      },

          // 判断元素距离窗口的位置
             isElemVisible (el) {
               var rect = el.getBoundingClientRect()
               var elemTop = rect.top + 200 // 200 = buffer
               var elemBottom = rect.bottom
               return elemTop < window.innerHeight && elemBottom >= 0
             },



             dhcli(){
               this.isReadyonly=0;
               clearTimeout(this.timer);  //清除延迟执行
               this.timer = setTimeout(()=>{   //设置延迟执行
                   this.isReadyonly=1;
               },100);

             }


        }


  }



</script>

<style>

  .logo{
    display: inline-block;
    visibility: inherit;
    width: 160px;
    background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/logo2.1e9151c5.png) 0 30%/100% no-repeat scroll;
    height: 110px;
  }

.header-menu{
  background-color: snow !important;
}

.header-fixd{
    width: 100%;
    height: 70px;
    position:fixed !important;
    top:0px;
    left: 0px;
    background-color: snow;
    z-index: 10;
    margin-bottom: 150px;
  }

  .h-top{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  }

  .h-logo{
    font-size: 30px;
    display: flex;
    float: right;

  }

  .h-top ul{
    display: flex;
    float: right;
  }


 .h-top ul li:first-child{
    margin-left: 0px;

  }

  a{
     color: #4e4e4e ;
  }

  .ant-menu-submenu-open , .ant-menu-submenu-active,.ant-menu-submenu-selected{
     border-bottom: 0px !important;

   }

  .ant-menu-submenu:hover{
    background: linear-gradient(to left, #a1a1a1, #979797);
  }

 .submenu-title-wrapper a:hover{
   color: snow;
  }


  .submenu-title-wrapper a{
      color:  #4e4e4e;
    font-size: 15px;
    display: block;
    height: 50px;
    width: 70px;
  }
  .submenu-title-wrapper .active{
    color: #477e9a!important;
    height: 50px;
    font-size: 16px;
  }




</style>
