<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

img {
  width: 300px;
}
</style>
