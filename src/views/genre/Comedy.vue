<template>
    <h1>This is Comedy Page</h1>
    <div class="home">
    <div class="movies" v-for="(movie, index) in movies" :key="index">
      <Movie :information="movies[index]" />
    </div>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
import axios from "axios";

export default {
  name: "Comedy",
  data() {
    return {
      movies: [],
    };
  },
  components: {
    Movie,
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:8000/category/comedy/",
    }).then((response) => {
      this.movies = response.data;
    });
  },
};
</script>