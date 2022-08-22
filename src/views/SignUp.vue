<template>
  <div>
    <!-- <form> -->
    <h1>{{ kir }}</h1>
    <label>Name</label>
    <input class="name form-control" type="text" v-model="currentUser.name" />
    <label>User Id</label>
    <input
      class="user-name form-control"
      type="text"
      v-model="currentUser.userName"
    />
    <input class="email form-control" type="text" v-model="currentUser.email" />
    <input
      class="password form-control"
      type="text"
      v-model="currentUser.password"
    />

    <button @click="signUp">signUp</button>
    <!-- </form> -->
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      kir: 0,
      currentUser: {
        name: "",
        userName: "",
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
</style>
