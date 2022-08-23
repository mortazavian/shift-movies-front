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
  <br />
  {{ cat }}
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
          // if (response.status == 200) {
          //   console.log("KIR");
          // } else {
          //   console.log("SAlam");
          // }
          // console.log("kir");
          // console.log(response);

          // if (response.ok) {
          console.log("we wanna get token");
          console.log("response: " + response);
          console.log("response.data: " + response.data);
          console.log("response.data.token: " + response.data.token);
          console.log("committing to store...");
          // this.$store.commit("saveToken", { value: this.token });

          // localStorage.setItem("myCat", "Tom");
          // cat = localStorage.getItem("myCat");
          // this.cat = localStorage.getItem("myCat");
          // console.log(this.cat);
          localStorage.setItem("token", response.data.token);
          this.token = localStorage.getItem("token");
          console.log(this.token);
          this.$store.commit("saveToken", { value: this.token });

          console.log("Commit to store");

          // console.log(response.data.token);
          // this.tooken = localStorage.getItem("token");
          // const TOKEN = response.data.auth_token;
          // this.$store.commit("saveToken", TOKEN);
          // localStorage.setItem("token", TOKEN);

          // }
        })
        .catch((error) => console.log(error.status));
      // axios
      //   .post("http://localhost:8000/login/", {
      //     userName: this.currentUser.userName,
      //     password: this.currentUser.password,
      //   })
      //   .then((response) => {
      //     console.log(response.data.token);
      //   })
      //   .catch((error) => console.log(error.response.request._response));

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
