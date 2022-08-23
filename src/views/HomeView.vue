<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ movies }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      movies: {},
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/home/",
    }).then((response) => {
      this.movies = response;
    });
    // .catch((error) => console.log("KIRI"));
  },
};
</script>
