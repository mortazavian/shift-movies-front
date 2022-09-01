<template>
  <NavBar />
  <!-- <div>
    <img src="../../../DownloadMovie-BackEnd/DownloadMovie_BackEnd/MoviesPictures/20220606_192401.jpg" />
  </div> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App.vue",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  font-family: sans-serif;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(232, 232, 232);
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
