<template>
  <div class="home">
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
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/home/",
    }).then((response) => {
      console.log("KIR1");
      console.log(response.data);
      console.log("KIR2");
      console.log(response.status);
      this.movies = response.data;
    });
    // .catch((error) => console.log("KIRI"));
  },
};
</script>
