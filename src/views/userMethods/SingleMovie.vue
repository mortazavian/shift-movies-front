<template>
  <div>
    <h1>{{ id }}kir</h1>
    <!-- <h1>kir kochooloo</h1> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.query,
    };
  },
};
</script>

<style scoped></style>
