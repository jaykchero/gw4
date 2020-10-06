
<template>
  <div>
    <header class="cd-morph-dropdown">
<!--      <a href="#0" class="nav-trigger">Open Nav<span aria-hidden="true"></span></a>-->
      <router-link to="/0" class="nav-trigger">Open Nav<span aria-hidden="true"></span></router-link>
      <nav class="main-nav" v-bind:class="{'header-fixd animated fadeInDown ':isScroll=='1',' ':isScroll==0}">

       <i class="logo"></i>

        <ul>
          <li>
            <router-link to="/home">首页</router-link>
          </li>

          <li class="has-dropdown gallery" data-content="about">
            <router-link to="/about">关于我们</router-link>
          </li>

          <li class="has-dropdown links" data-content="solution">
            <router-link to="/solution">解决方案</router-link>
          </li>

          <li class="has-dropdown button" data-content="pxparking">
            <router-link to="/puxingSmartParking">普行停车</router-link>
          </li>
          <li class="has-dropdown button" data-content="constantUs">
            <router-link to="/constantUs">联系我们</router-link>
          </li>
        </ul>
      </nav>

      <div class="morph-dropdown-wrapper">
        <div class="dropdown-list">
          <ul>
            <li id="home" class="dropdown links" @click="changNav">
              <router-link to="/home" class="label">首页</router-link>
            </li>


            <li id="about" class="dropdown links">
              <router-link to="/about" class="label">关于我们</router-link>
              <div class="content">
                <ul>
                  <li>
                    <ul class="links-list">
                      <li><a :href="'#/about?maodian=about1'">公司介绍</a></li>
                      <li> <a :href="'#/about?maodian=culture'">企业文化</a></li>
                      <li> <a :href="'#/about?maodian=ProjectExperience'">项目经验</a></li>
                      <li> <a :href="'#/about?maodian=DevelopmentHistory'">发展历程</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li id="solution" class="dropdown links">
              <router-link to="/solution" class="label">解决方案</router-link>
              <div class="content">
                <ul>
                  <li>
                    <ul class="links-list">
                      <li>  <a :href="'#/solution?maodian=PainsOfTrade'">行业痛点</a></li>
                      <li> <a :href="'#/solution?maodian=ProjectConstructionIdeas'">建设思考</a></li>
                      <li> <a :href="'#/solution?maodian=Comparisonschemes'">方案对比</a></li>
                      <li> <a :href="'#/solution?maodian=EquipmentDisplay'">设备展示</a></li>

                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li id="pxparking" class="dropdown links">
              <router-link to="/puxingSmartParking" class="label">普行停车</router-link>
              <div class="content">
                <ul class="links-list">
                  <li>  <a :href="'#/puxingSmartParking?maodian=t1'">停车系统</a></li>
                  <li>   <a :href="'#/puxingSmartParking?maodian=t2'">社会效益</a></li>
                  <li> <a :href="'#/puxingSmartParking?maodian=t3'">经济效益</a></li>
                  <li> <a href="http://www.ptyibo.com/#/login" target="_blank">员工登录</a></li>
                </ul>
              </div>
            </li>

            <li id="constantUs" class="dropdown links">
              <router-link to="/constantUs" class="label">联系我们</router-link>
              <div class="content">

              </div>

            </li>

          </ul>
          <div class="bg-layer" aria-hidden="true"></div>
        </div> <!-- dropdown-list -->
      </div> <!-- morph-dropdown-wrapper -->

    </header>

  </div>

</template>

<script>
  import $ from 'jquery'

  export default{
    data(){
      return {
        goUp:false,
        timer3:"",
        isScroll:0,
        flag:false,
        cWidth:'',
      }
    },

    mounted() {

      document.addEventListener('scroll', this.handleScroll1)

      function morphDropdown( element ) {
        this.element = element;
        this.mainNavigation = this.element.find('.main-nav');
        this.mainNavigationItems = this.mainNavigation.find('.has-dropdown');
        this.dropdownList = this.element.find('.dropdown-list');
        this.dropdownWrappers = this.dropdownList.find('.dropdown');
        this.dropdownItems = this.dropdownList.find('.content');
        this.dropdownBg = this.dropdownList.find('.bg-layer');
        this.mq = this.checkMq();
        this.bindEvents();
      }

      morphDropdown.prototype.checkMq = function() {
        //check screen size
        var self = this;
        return window.getComputedStyle(self.element.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
      };

      morphDropdown.prototype.bindEvents = function() {
        var self = this;
        //hover over an item in the main navigation
        this.mainNavigationItems.mouseenter(function(event){
          //hover over one of the nav items -> show dropdown
          self.showDropdown($(this));
        }).mouseleave(function(){
          setTimeout(function(){
            //if not hovering over a nav item or a dropdown -> hide dropdown
            if( self.mainNavigation.find('.has-dropdown:hover').length == 0 && self.element.find('.dropdown-list:hover').length == 0 ) self.hideDropdown();
          }, 50);
        });

        //hover over the dropdown
        this.dropdownList.mouseleave(function(){
          setTimeout(function(){
            //if not hovering over a dropdown or a nav item -> hide dropdown
            (self.mainNavigation.find('.has-dropdown:hover').length == 0 && self.element.find('.dropdown-list:hover').length == 0 ) && self.hideDropdown();
          }, 50);
        });

        //click on an item in the main navigation -> open a dropdown on a touch device
        this.mainNavigationItems.on('touchstart', function(event){
          var selectedDropdown = self.dropdownList.find('#'+$(this).data('content'));
          if( !self.element.hasClass('is-dropdown-visible') || !selectedDropdown.hasClass('active') ) {
            event.preventDefault();
            self.showDropdown($(this));
          }
        });

        //on small screens, open navigation clicking on the menu icon
        this.element.on('click', '.nav-trigger', function(event){
          this.goUp=!this.goUp;
          if(this.goUp==false){
            window.location.href="javascript:history.go(-1)";
          }
          event.preventDefault();
          self.element.toggleClass('nav-open');
        });
      };

      morphDropdown.prototype.showDropdown = function(item) {
        this.mq = this.checkMq();
        if( this.mq == 'desktop') {
          var self = this;
          var selectedDropdown = this.dropdownList.find('#'+item.data('content')),
            selectedDropdownHeight = selectedDropdown.innerHeight(),
            selectedDropdownWidth = selectedDropdown.children('.content').innerWidth(),
            selectedDropdownLeft = item.offset().left + item.innerWidth()/2 - selectedDropdownWidth/2;

          //update dropdown position and size
          this.updateDropdown(selectedDropdown, parseInt(selectedDropdownHeight), selectedDropdownWidth, parseInt(selectedDropdownLeft));
          //add active class to the proper dropdown item
          this.element.find('.active').removeClass('active');
          selectedDropdown.addClass('active').removeClass('move-left move-right').prevAll().addClass('move-left').end().nextAll().addClass('move-right');
          item.addClass('active');
          //show the dropdown wrapper if not visible yet
          if( !this.element.hasClass('is-dropdown-visible') ) {
            setTimeout(function(){
              self.element.addClass('is-dropdown-visible');
            }, 10);
          }
        }
      };

      morphDropdown.prototype.updateDropdown = function(dropdownItem, height, width, left) {
        this.dropdownList.css({
          '-moz-transform': 'translateX(' + left + 'px)',
          '-webkit-transform': 'translateX(' + left + 'px)',
          '-ms-transform': 'translateX(' + left + 'px)',
          '-o-transform': 'translateX(' + left + 'px)',
          'transform': 'translateX(' + left + 'px)',
          'width': width+'px',
          'height': height+'px'
        });

        this.dropdownBg.css({
          '-moz-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
          '-webkit-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
          '-ms-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
          '-o-transform': 'scaleX(' + width + ') scaleY(' + height + ')',
          'transform': 'scaleX(' + width + ') scaleY(' + height + ')'
        });
      };

      morphDropdown.prototype.hideDropdown = function() {
        this.mq = this.checkMq();
        if( this.mq == 'desktop') {
          this.element.removeClass('is-dropdown-visible').find('.active').removeClass('active').end().find('.move-left').removeClass('move-left').end().find('.move-right').removeClass('move-right');
        }
      };

      morphDropdown.prototype.resetDropdown = function() {
        this.mq = this.checkMq();
        if( this.mq == 'mobile') {
          this.dropdownList.removeAttr('style');
        }
      };

      var morphDropdowns = [];
      if( $('.cd-morph-dropdown').length > 0 ) {
        $('.cd-morph-dropdown').each(function(){
          //create a morphDropdown object for each .cd-morph-dropdown
          morphDropdowns.push(new morphDropdown($(this)));
        });

        var resizing = false;

        //on resize, reset dropdown style property
        updateDropdownPosition();
        $(window).on('resize', function(){
          if( !resizing ) {
            resizing =  true;
            (!window.requestAnimationFrame) ? setTimeout(updateDropdownPosition, 300) : window.requestAnimationFrame(updateDropdownPosition);
          }
        });

        function updateDropdownPosition() {
          morphDropdowns.forEach(function(element){
            element.resetDropdown();
          });

          resizing = false;
        };
      }
    },

    methods:{

      changNav(){

        //$(".nav-trigger").removeClass("nav-open");

      },

      //实现导航吸顶
      handleScroll1 (evt) {

        this.timer3 = setTimeout(()=>{

          var swidth=document.body.clientWidth
         console.log(swidth)
        if(swidth>750){
          //设置延迟执行
          var currentTop  = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if( currentTop > 72){
            $('.cd-morph-dropdown .morph-dropdown-wrapper').css('top',currentTop+72+'px')
            this.isScroll=1;

          } else if (currentTop === 0) {
            $('.cd-morph-dropdown .morph-dropdown-wrapper').css('top',72+'px')
            this.isScroll=0;
          }

          else {
            this.isScroll=0;

          }
        }

        },10);

      },
    }


  }



</script>

<style scoped >
  @import url('../assets/css/nav.css');

  /*dropdown{*/
  /*  z-index: 999;*/
  /*}*/

  .links-list a{
    color: #696969;
  }

  .links-list a:hover{
    color: #10a6a2;
  }

  .router-link-exact-active{
    color: #477e9a!important
  }

  .label{
    width: 40%;
    margin: 0 auto;
    font-size: 30px;
  }

   .label:hover {

    color: #eeeeee;
    background: #10a6a2;
  }


  .main-nav ul :hover{
  background: #696969;
  color: snow!important;
}


  .header-fixd{
    width: 100%;
    height: 80px;
    position:fixed !important;
    left:0px;
    background-color: #ffffff;
    z-index: 10;
  }


  .logo{
    display: inline-block;
    width: 160px;
    background: url(https://jaykchero.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7/logo2.1e9151c5.png) 0 30%/100% no-repeat scroll;
    height: 60px;
  }


</style>
