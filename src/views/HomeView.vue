<template>
  <div class="home">
    <SlideShow class="slideShow" />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <p>{{ movies }}</p> -->
    <div class="movies" v-for="(movie, index) in movies" :key="index">
      <!-- <h1>{{ movies[0] }}</h1> -->

      <Movie :information="movies[index]" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import SlideShow from "../components/SlideShow.vue";
import Movie from "@/components/Movie.vue";
import axios from "axios";

// location.reload(true);

export default {
  name: "HomeView",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    // HelloWorld,
    Movie,
    SlideShow,
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/home/",
    }).then((response) => {
      console.log(response.data);
      // console.log(response.status);
      this.movies = response.data;
    });
  },
};
</script>

<style scoped>
.slideShow {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  height: 480px;
  /* border: 8px ridge blue; */
  padding-left: 450px;
  padding-right: 0px;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
