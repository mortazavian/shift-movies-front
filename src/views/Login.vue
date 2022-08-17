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
        v-model="currentUser.userName"
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
export default {
  name: "LogIn",
  data() {
    return {
      currentUser: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    async logIn() {
      console.log(this.currentUser.userName);
      console.log(this.currentUser.password);
      // this.$router.push("/");
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
