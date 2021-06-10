<template>
  <div class="navbar">
    <div class="logo">LOGO</div>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-item">Home</li>
        <li class="nav-item"><a href="">Characters</a></li>
        <li class="nav-item">Comics</li>
      </ul>
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
