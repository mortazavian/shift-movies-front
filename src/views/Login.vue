<template>
  <div class="test">THis is login page</div>
  <hr />
  <div class="container">
    <div class="username-form">
      <label>Username</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your Username"
        v-model="currentUser.username"
      />
    </div>

    <div class="password-form">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter Your Password"
        v-model="currentUser.password"
      />
    </div>

    <div>
      <button class="btn" @click="logIn">Log-In</button>
    </div>
  </div>
  <hr />
  <Button>bus</Button>
</template>

<script>
import axios from "axios";
import Button from "primevue/button";
export default {
  // name: "LogIn",
  data() {
    return {
      currentUser: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/login/",
        data: {
          username: this.currentUser.username,
          password: this.currentUser.password,
          tooken: "",
        },
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        // },
      })
        .then((response) => {
          // if (response.status == 200) {
          //   console.log("KIR");
          // } else {
          //   console.log("SAlam");
          // }
          console.log("kir");
          // console.log(response);

          // if (response.ok) {
          console.log(response.data.token);
          // this.tooken = localStorage.getItem("token");
          const TOKEN = response.data.auth_token;
          this.$store.commit("saveToken", TOKEN);
          localStorage.setItem("token", TOKEN);

          // }

          // if (
          //   response ===
          //   { non_field_errors: ["Unable to log in with provided credentials."] }
          // ) {
          //   console.log("KIR");
          // } else {
          //   console.log(response.data.token);
          // }
          console.log("kirr");
        })
        .catch((error) => console.log("baad catch" + " " + error.status));
      // axios
      //   .post("http://localhost:8000/login/", {
      //     userName: this.currentUser.userName,
      //     password: this.currentUser.password,
      //   })
      //   .then((response) => {
      //     console.log(response.data.token);
      //   })
      //   .catch((error) => console.log(error.response.request._response));

      // console.log(this.currentUser.userName);
      // console.log(this.currentUser.password);
      // this.$router.push("/");
      this.$store.commit("saveUsername", { value: this.currentUser.username });
      this.$store.commit("savePassword", { value: this.currentUser.password });
      // this.$store.commit("saveToken", { value: this.tooken });
      console.log("store ham shod");
    },
    // saveUser() {
    //   this.$store.commit("saveUsername", { value: this.username });
    //   this.$store.commit("savePassword", { value: this.password });
    // },
    // savePass() {
    //   this.$store.commit("savePassword", { value: this.password });
    // },
  },
};
</script>

<style scoped>
.test {
  font-size: 50px;
}
.form-control {
  background-color: rgb(139, 125, 218);
  border-radius: 20px;
  padding: 10px;
  margin: 10px 10px;
  text-align: center;
}
.btn {
  background-color: #4c9daf; /* Green */
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
