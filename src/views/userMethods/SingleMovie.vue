<template>
  <div>
    <h1>{{ id }}kir</h1>
    <!-- <h1>kir kochooloo</h1> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.query,
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/film/" + this.id.id + "/",
    }).then((response) => {
      console.log(response);
    });
  },
};
</script>

<style scoped></style>
