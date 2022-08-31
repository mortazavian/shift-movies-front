<template>
  <div class="container">You Logged Out Successfully :)</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: null,
    };
  },
  methods: {
    logOut() {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/logout/",
        headers: {
          Authorization: "Token " + this.token,
        },
      }).then((response) => {
        localStorage.removeItem("token");
        this.$router.push("/");
      });
    },
  },
  mounted() {
    // this.token = localStorage.getItem("token");
    this.token = localStorage.getItem("token");
    console.log(this.token);
    setTimeout(() => {
      this.logOut();
    }, 3000);
  },
};
</script>

<style scoped>
.container {
  font-size: 80px;
  text-align: center;
}
</style>
