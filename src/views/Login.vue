<template>
  <div class="container">
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="currentUser.username" />
        <label for="username">Username</label>
      </span>
    </div>
    <div>
      <span class="p-float-label">
        <InputText
          id="username"
          type="password"
          v-model="currentUser.password"
        />
        <label for="username">Password</label>
      </span>
    </div>

    <div>
      <Button @click="logIn" label="Log-In" class="p-button-secondary" />

      <!-- <Button label="Log-In" class="p-button" /> -->
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
          // this.$router.push("/");  
          window.location.href = "http://localhost:8080/"
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
div {
  padding-top: 1.5rem;
}

.container:nth-child(1) {
  margin-top: 4rem;
}
/* .p-button-help {
  background-color: rgb(1, 127, 12);
  border-radius: 18px;
  border-color: rgb(0, 150, 255);
  font-style: italic;
  color: black;
}
.p-button {
  background-color: rgb(1, 127, 12);
  border-radius: 18px;
  border-color: rgb(1, 120, 12);
  font-style: italic;
  color: black;
}
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
/* border-radius: 20px; */
/* border: none; */
/* color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; */
/* } */
</style>
