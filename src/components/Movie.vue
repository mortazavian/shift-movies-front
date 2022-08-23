<template>
  <div class="container">
    <!-- name
    summary 
    genre
    director
    actors
    score
    country
    year of publication
    -->
    <h1 class="name">"{{ information.name }}"</h1>
    <h2 class="summary">Summary: {{ information.summary }}</h2>
    <h3 class="genre">Genre: {{ information.genre }}</h3>
    <h4 class="director detail">Director: {{ information.director }}</h4>
    <h5 class="actors detail">Actors: {{ information.actors }}</h5>
    <h5 class="country detail">Country: {{ information.country }}</h5>
    <h5 class="year detail">Publication's Date: {{ information.yearOfPublication }}</h5>
    <h5 class="score">{{ information.score }}/10</h5>


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

<style scoped>
.container {
  position: static;
  border-style: solid;
  padding: 10px;
  margin: 50px auto;
  width: 50%;
  color: black;
  background-color: rgb(84, 78, 116);
  border-radius: 20px;
}
.summary {
  font-style: italic;
  text-align: left;
}
.genre {
  text-align: left;
}
.score {
  text-align: right;
}
.detail {
  text-align: left;
}
</style>
