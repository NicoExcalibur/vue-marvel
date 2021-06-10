<template>
  <div class="home">
    <img
      alt="Marvel logo"
      src="https://logos-marques.com/wp-content/uploads/2021/03/Logo-Marvel.png"
    />
    <h1>Bienvenue sur la base de données des comics Marvel !</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

img {
  display: block;
}
</style>
