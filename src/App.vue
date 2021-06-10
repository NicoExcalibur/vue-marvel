<template>
  <div id="app">
    <Header></Header>
    <img
      alt="Marvel logo"
      src="https://logos-marques.com/wp-content/uploads/2021/03/Logo-Marvel.png"
    />
    <Home msg="Bienvenue sur la page Marvel" />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Home,
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
}

img {
  width: 300px;
}
</style>
