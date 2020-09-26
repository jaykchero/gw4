<template>

  <div class="test1">
    <div class="test2">
      <div class="adv " :class="{toleft:isToLeft}"  >
        <div class="left">
          <h2 class="h2 left1  animated slideInDown">{{title1}}</h2>
          <h3 class="lh3 animated slideInDown">{{englist}}</h3>
          <div class="animated slideInUp">
            <p class="pp left1" style="margin-bottom: 30px">{{info}}</p>
            <h3 class="h3 left1" >{{title2}}</h3>
            <!--  <h3 class="lh3">{{englist2}}</h3> -->
            <p class="pp left1" style="margin-bottom: 30px">{{info2}}</p>
            <h3 class="h3 left1">{{title3}}</h3>
            <!--  <h3 class="lh3">{{englist3}}</h3> -->
            <p class="pp left1">{{info3}}</p>
          </div>
        </div>

        <div class="right animated slideInRight " >
          <img v-lazy="img" >
        </div>

      </div>
    </div>
  </div>
</template>

<script>


  export default{
    props:["title1","englist","info","title2","englist2","info2","title3","englist3","info3","img","isToLeft"],
    data(){
      return {
        fadeInElements:[],
        left1:[],
        right:[]
      }

    },
    mounted () {
      // 先获取全部需要过渡效果的元素
      this.left1 = Array.from(document.getElementsByClassName('left'))
      this.right = Array.from(document.getElementsByClassName('right'))
    },

    methods: {


      // 判断元素距离窗口的位置
      isElemVisible (el) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top + 200 // 200 = buffer
        var elemBottom = rect.bottom
        return elemTop < window.innerHeight && elemBottom >= 0
      }

    },

  }

</script>

<style scoped="scoped">
  .right{
    float: right;
    width: 50%;

  }
  .toleft{
    flex-direction: row-reverse;
  }

  .adv{
    position: relative;
    padding-top: 100px;
    display: flex;

    height: 600px;
    margin: 0 auto;
    align-items: auto;
    justify-content: space-between;

  }

  .left{
    vertical-align: top;
    width: 50%;
  }


  .h2{
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
  }

  .pp{
    color: #605656;

    line-height: 30px !important;
    text-align: left;
  }

  .h3{
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
  }

  .ul{
    width:330px ;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .li{
    display: block;
    width: 10rem;
    height: 36px;
    text-align: center;
  }
  .lh3{
    color: #555;
    text-align: left;
    font-size: 23px;
    line-height: 36px;

    font-family: "itcavantgardepro-bk";
    position: relative;
    margin-bottom: 30px;
  }


  img{
    width: 400px;
    height: 497px;

  }

</style>
