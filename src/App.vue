<template>
  <div id="app">
    <Header class="header"></header>
    <div class="lines"></div>
    <backtop></backtop>

       <transition >
      <router-view/>
    </transition>

  </div>
</template>

<script>
   import Header from './components/Header.vue'
  import home from './views/home/home.vue'
  import backtop from './views/backtop/backtop.vue'

   export default{
   //  name:'Header',
     components:{
       Header,
       backtop,

     },

  }

</script>



<style lang="less">
  .header{

    height: 68px;
  }
  .lines{
    height: 1.5px;
    width: 100%;
    background-color: #477e9a;
  }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



</style>
