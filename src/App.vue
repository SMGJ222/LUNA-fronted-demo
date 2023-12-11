<script setup>
import NavBar from './components/NavBar.vue';
import Page0 from './Page0.vue';
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';
import Page3 from './Page3.vue';
import Page4 from './Page4.vue';
import Page5 from './Page5.vue';
import Page6 from './Page6.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <NavBar/>
  <Page0></Page0>
  <Page1></Page1>
  <Page2></Page2>
  <Page3></Page3>
  <Page4></Page4>
  <Page5></Page5>
  <Page6></Page6> 
  <Footer></Footer>
  
</template>  

<style scoped>
  .search-button {
    background-color: #edeef2;
    border-radius: 20px;
    height: 36px;
    margin: 10px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 900;
    color: #000000;
  }

  .search-button:hover {
    background-color: #e0e0e0;
  }

  .slide_button{
    background-color: black; 
    color: white;
    border-radius: 9999px;
    width:20px;
    height:20px;
    text-align: left;
    padding-left: 4px;
    padding-right: 4px; 
    padding-top: 0px;
    padding-bottom: 20px;/*todo为什么不居中啊*/
    /* todo 选中时形状异常 */
  }
  .slide_button:hover{
    background-color: #cbd5e1; 
  }

</style>
