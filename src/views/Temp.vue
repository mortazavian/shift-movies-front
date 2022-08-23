<template>
  <h3>this is temp page only for see the storing data</h3>
  <hr />
  counter: {{ this.$store.state.counter }}
  <br />
  counter main: {{ seeRes }}
  <br />
  Username: {{ seeUsername }}
  <br />
  Password: {{ seePassword }}
  <br />
  Token: {{ seeToken }}
</template>

<script>
export default {
  computed: {
    seeRes() {
      return this.$store.getters.showCounter;
    },
    seeUsername() {
      return this.$store.getters.showUsername;
    },
    seePassword() {
      return this.$store.getters.showPassword;
    },
    seeToken() {
      return this.$store.getters.showToken;
    },
  },
};
</script>
