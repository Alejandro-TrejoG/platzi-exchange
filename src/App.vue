<template>
  <main>
    <px-header :links="links"/>

    <router-view class="container px-5 sm:px-20 py-20 flex justify-center"/>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader"
export default {
  name: "App",
  components: {
    PxHeader,
  },
  data(){
    return{
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'ripple' } }
        }
      ]
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
main{
  background: linear-gradient(180deg, white, #d1d1d1);
  min-height: 100vh;
}

body::-webkit-scrollbar{
  width: 8px;
}

body::-webkit-scrollbar-thumb{
  width: 8px;
  border-radius: 10px;
  background-color: #40af5c;
}
</style>
