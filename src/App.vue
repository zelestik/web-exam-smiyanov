<template>
  <div id="app" class="page">
      <My_header></My_header>
      <router-view></router-view>
      <My_footer></My_footer>
  </div>
</template>

<script>

import My_header from "@/components/My_header";
import My_footer from "@/components/My_footer";
export default {
  name: 'App',
  components: {
      My_footer,
      My_header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
  *{
    font-family: 'Comfortaa', cursive;
  }
  .page{
    background-color: darkslategray;
  }
    @media print {
        *{
            background-color: white;
            color: black;
        }
        header{
            visibility: hidden;
        }
        footer{
            visibility: hidden;
        }
        .btn{
            visibility: hidden;
        }
    }
</style>
