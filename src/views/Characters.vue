<template>
  <div class="characters">
    <h1>Bienvenue sur la page des personnages</h1>
    <ul class="list-inline list-unstyled">
      <li
        v-bind:key="index"
        v-for="(hero, index) in allHeroes"
        class="list-inline-item"
      >
        <div class="card">
          <img
            :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            :alt="'Image de ' + hero.name"
          />
          <h3>
            <router-link :to="{ name: 'hero', params: { id: hero.name } }">{{
              hero.name
            }}</router-link>
          </h3>
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
<style>
.characters {
  margin: 1em 2em;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
