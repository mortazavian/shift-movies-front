<template>
  <div>
    <form action="">
      <input class="name" type="text" v-bind="name" />
      <input class="user-name" type="text" v-bind="userName" />
      <input class="email" type="text" v-bind="email" />
      <input class="password" type="text" v-bind="password" />

      <button @click="signUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      currentUser: {
        name: "",
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signUp() {
      const { data, status } = await axios.post(
        "http://localhost:8080/signup",
        this.currentUser
      );
      console.log(data);
      console.log(status);
    },
  },
};

// name - user name - email - password
</script>

<style scoped></style>
