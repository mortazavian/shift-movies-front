<template>
  <div>
    <!-- <h1>{{ id }}kir</h1> -->
    <!-- <h1>kir kochooloo</h1> -->

    <SingleMovieComponentVue :information="info" />
  </div>
</template>

<script>
import axios from "axios";
import SingleMovieComponentVue from "@/components/SingleMovieComponent.vue";
export default {
  components: {
    SingleMovieComponentVue,
  },
  data() {
    return {
      id: this.$route.query,
      info: {},
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/film/" + this.id.id + "/",
    }).then((response) => {
      this.info = response.data;
      console.log(this.info);
      console.log(response);
    });
  },
};
</script>

<style scoped></style>
