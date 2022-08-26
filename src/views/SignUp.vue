<template>
  <div class="container">
    <!-- Name -->
    <span class="p-float-label">
      <InputText id="name" type="text" v-model="currentUser.name" />
      <label for="name">Name</label>
    </span>
    <!-- User Name -->
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="currentUser.userName" />
      <label for="username">User Name</label>
    </span>
    <!-- Email -->
    <span class="p-float-label">
      <InputText id="email" type="email" v-model="currentUser.email" />
      <label for="email">Email</label>
    </span>
    <!-- Password -->
    <span class="p-float-label">
      <InputText id="password" type="email" v-model="currentUser.password" />
      <label for="password">Password</label>
    </span>
    <!-- Button -->
    <Button @click="signUp" label="Sign-Up" class="p-button-secondary" />
  </div>
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

      axios.post("https://localhost:8000/signup/", {
        name: this.currentUser.name,
        userName: this.currentUser.username,
        email: this.currentUser.email,
        password: this.currentUser.password,
      });

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
.p-float-label {
  margin-top: 1.5rem;
}
Button {
  margin-top: 2rem;
}

/* span {
  padding-top: 1.5rem;
} */
/* .p-button {
  background-color: rgb(106, 0, 255);
  border-radius: 18px;
  border-color: rgb(110, 0, 255);
  font-style: italic;
  color: black;
}
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
} */
</style>
