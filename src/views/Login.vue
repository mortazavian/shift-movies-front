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
</template>

<script>
import axios from "axios";
export default {
  // name: "LogIn",
  data() {
    return {
      currentUser: {
        username: "",
        password: "",
        token: "",
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
        },
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        // },
      })
        .then((response) => {
          // Fucking hard process to get the user's token commented as below:
          // ===>
          // console.log("we wanna get token");
          // console.log("response: " + response);
          // console.log("response.data: " + response.data);
          // console.log("response.data.token: " + response.data.token);
          // console.log("committing to store...");
          // ...
          // localStorage.setItem("myCat", "Tom");
          // cat = localStorage.getItem("myCat");
          // this.cat = localStorage.getItem("myCat");
          // console.log(this.cat);
          // ...
          // console.log(response.data.token);
          // this.tooken = localStorage.getItem("token");
          // const TOKEN = response.data.auth_token;
          // this.$store.commit("saveToken", TOKEN);
          // localStorage.setItem("token", TOKEN);
          // ...
          // Finally we use the localStorage
          // and also note that you should remove it when the user logged out.
          // ===>
          localStorage.setItem("token", response.data.token);
          this.token = localStorage.getItem("token");
          console.log(this.token);
          this.$store.commit("saveToken", { value: this.token });
          console.log("Committed to store");
        })
        .catch((error) => console.log(error.status));

      this.$store.commit("saveUsername", { value: this.currentUser.username });
      this.$store.commit("savePassword", { value: this.currentUser.password });
      console.log("User stored");
    },
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
