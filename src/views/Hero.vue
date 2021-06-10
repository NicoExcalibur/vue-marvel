<template>
  <div class="hero">
    Hero Page {{ $route.params.id }}

    <div class="hero-container">
      <h2>{{ this.name }}</h2>
      <p></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Hero",
  data() {
    return {
      allHeroes: [],
      id: $route.params.id,
    };
  },
  methods: {},
  created() {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters/" +
          this.id +
          "?ts=1&apikey=60ff9ad3613bf0403fd8fdf7f8c7b195&hash=89cd51a10baf6dbb67e2b6225a8690e6"
      )
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
