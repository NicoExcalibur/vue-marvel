<template>
  <div class="navbar">
    <div class="logo">LOGO</div>
    <div class="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/characters" class="nav-item">Characters</router-link>
      <router-link to="/comics" class="nav-item">Comics</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: red;
  padding: 2em;
  color: white;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-left: 1em;
}
</style>
