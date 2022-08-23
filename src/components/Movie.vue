<template>
  <div>
    <!-- name
    summery 
    zhanr
    direcor
    actors
    score
    country
    year of publication
    -->
    <h2 class="name">{{ information.name }}</h2>

    <!-- <h1>haromzade</h1> -->
  </div>
</template>

<script>
export default {
  props: {
    information: {},
  },
  data() {
    return {
      name: "",
      //   summery: "",
      //   genre: "",
      //   director: "",
      //   actors: [],
      //   score: 0,
      //   country: "",
      //   yearOfPublication: "",
    };
  },
  methods: {
    assignActors() {
      for (actor in this.information.actors) {
        this.actors.push(actor);
      }
    },
  },
  //   created() {
  //     console.log(this.information);
  //     this.name = this.information.name;
  //     console.log(this.name);
  //     // this.summery = this.information.summery;
  //     // this.genre = this.information.genre;
  //     // this.director = this.information.director;
  //     // this.assignActors();
  //     // this.score = this.information.score;
  //     // this.country = this.information.country;
  //     // this.yearOfPublication = this.information.yearOfPublication;
  //   },
};
</script>
<style scoped></style>
