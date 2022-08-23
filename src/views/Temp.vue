<template>
  <h3>this is temp page only for see the storing data</h3>
  <hr />
  counter: {{ this.$store.state.counter }}
  <br />
  counter main: {{ seeRes }}
</template>

<script>
export default {
  computed: {
    seeRes() {
      return this.$store.getters.showCounter;
    },
  },
};
</script>
