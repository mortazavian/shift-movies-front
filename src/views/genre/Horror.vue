<template>
  <div>
    <div class="movies" v-for="(movie, index) in movies" :key="index">
      <!-- <h1>{{ movies[0] }}</h1> -->

      <Movie :information="movies[index]" />
    </div>
  </div>
</template>
<script>
import Movie from "../../components/Movie.vue";
import axios from "axios";
export default {
  name: "Horror",
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
      url: "http://127.0.0.1:8000/category/horror",
    }).then((response) => {
      this.movies = response.data;
    });
  },
};
</script>
<style scoped></style>
