<template>
  <div class="title">This is Sign-Up page</div>
  <hr />
  <div class="container">
    <label class="label">Name</label>
    <input class="name form-control" type="text" v-model="currentUser.name" />
    <br />
    <label class="label">Username</label>
    <input
      class="user-name form-control"
      type="text"
      v-model="currentUser.username"
    />  
    <br />
    <label class="label">Email</label>
    <input class="email form-control" type="text" v-model="currentUser.email" />
    <br />
    <label class="label">Password</label>
    <input
      class="password form-control"
      type="text"
      v-model="currentUser.password"
    />
    <br />
    <button @click="signUp" class="btn">Sign-Up</button>
  </div>
  <hr />
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      currentUser: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      //   fetch(
      //     "https://vue-http-demo-a5b7d-default-rtdb.firebaseio.com/surveys.json",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         name: this.name,
      //         userName: this.userName,
      //         email: this.email,
      //         password: this.password,
      //       }),
      //     }
      //   );

      axios.post(
        "https://vue-http-demo-a3c0d-default-rtdb.firebaseio.com/signup.json",
        {
          name: this.currentUser.name,
          userName: this.currentUser.userName,
          email: this.currentUser.email,
          password: this.currentUser.password,
        }
      );

      // console.log(this.currentUser.userName);
      // console.log(this.currentUser.password);
      // console.log(this.currentUser.email);
      //   this.$router.push("/");
    },
  },
};

// name - user name - email - password
</script>

<style scoped>
.title {
  font-size: 50px;
}
.form-control {
  background-color: #4c9daf;
  border-radius: 20px;
  padding: 10px;
  margin: 10px 10px;
  text-align: center;
}
.btn {
  background-color: rgb(139, 125, 218);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.container {
  text-align: center;
  padding: 10px 10px;
  margin: 10px 10px;
}
.label {
  margin-left: 50px;
}
</style>
