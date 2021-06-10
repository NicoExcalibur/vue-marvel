<template>
  <div class="characters">
    <h1>Bienvenue sur la page des personnages</h1>
    <ul class="list-inline list-unstyled">
      <li
        v-bind:key="index"
        v-for="(hero, index) in allHeroes"
        class="list-inline-item"
      >
        <div class="card" style="width: 16rem;">
          <h3>{{ hero.name }}</h3>
          <img
            :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            :alt="'Image de ' + hero.name"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Champions",
  data() {
    return {
      allHeroes: [],
    };
  },
  methods: {},
  created() {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=60ff9ad3613bf0403fd8fdf7f8c7b195&hash=89cd51a10baf6dbb67e2b6225a8690e6"
      )
      .then((response) => {
        // console.log(response.data.data.results);
        let listOfHeroes = Object(response.data.data.results);
        for (const item of listOfHeroes) {
          this.allHeroes.push(item);
        }
        console.log(listOfHeroes);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
