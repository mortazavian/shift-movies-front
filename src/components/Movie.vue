<template>
  <!-- <div class="container"> -->
  <!-- <h1 class="name">"{{ information.name }}"</h1>
    <h2 class="summary">Summary: {{ information.summary }}</h2>
    <h3 class="genre">Genre: {{ information.genre }}</h3>
    <h4 class="director detail">Director: {{ information.director }}</h4>
    <h5 class="actors detail">Actors: {{ information.actors }}</h5>
    <h5 class="country detail">Country: {{ information.country }}</h5>
    <h5 class="year detail">
      Publication's Date: {{ information.yearOfPublication }}
    </h5>
    <h5 class="score">{{ information.score }}/10</h5>
  </div> -->

  <!-- new model for movie component -->
  <div class="container">
    <div class="photo">
      <img alt="movie-pic" :src="getImgUrl" height="290" width="200" />
    </div>
    <div class="content">
      <div class="title">{{ information.name }}</div>
      <div class="category">
        <img
          class="icon"
          alt="menu-hamburger"
          src="../assets/icons/charm_menu-hamburger.svg"
        />
        <div class="category-text">{{ information.genre }}</div>
      </div>

      <!-- line -->

      <div class="director">
        <img
          class="icon"
          alt="person"
          src="../assets/icons/bi_person-fill.svg"
        />
        <div class="director-text-question">
          Director:{{ information.director }}
        </div>
      </div>
      <!-- <div class="director-text-answer">{{ information.director }}</div> -->
      <div class="actors">
        <img
          class="icon"
          alt="people"
          src="../assets/icons/bi_people-fill.svg"
        />
        <div class="actors-text-question">Actors:{{ information.actors }}</div>
      </div>
      <!-- <div class="actors-text-answer">{{ information.actors }}</div> -->
      <div class="summary">
        <div class="summary-text">Summary: {{ information.summary }}</div>
      </div>

      <div class="info">
        <div class="calender-icon icon">
          <img alt="calender" src="../assets/icons/uis_calender.svg" />
        </div>
        <div class="date">{{ information.yearOfPublication }}</div>
        <div class="earth-icon info-item icon">
          <img alt="earth" src="../assets/icons/fa6-solid_earth-americas.svg" />
        </div>
        <div class="country">Country: {{ information.country }}</div>
        <div class="score-icon info-item icon">
          <img alt="imdb" src="../assets/icons/fontisto_imdb.svg" />
        </div>
        <div class="score">Score: {{ information.score }}/10</div>
        <div class="download-btn"></div>
        <Button
          @click="pushSingleMovie"
          label="Download"
          class="p-button-raised p-button-secondary download"
        />
        <!-- <div class="download-text">Download</div> -->
      </div>
    </div>
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
      photoSrc: this.information.photo,
    };
  },
  methods: {
    assignActors() {
      for (actor in this.information.actors) {
        this.actors.push(actor);
      }
    },
    pushSingleMovie() {
      this.$router.push({
        path: "/single-movie",
        query: { id: this.information.id },
      });
    },
  },
  mounted() {
    // console.log(this.information.photo);
    // console.log(this.photoSrc);
  },
  computed: {
    getImgUrl() {
      return this.photoSrc;
      // return require(`../../../../DownloadMovie-BackEnd/DownloadMovie_BackEnd/${this.information.photo}`);
      // return null;
    },
  },
};
</script>

<style scoped>
* {
  color: #ffffff;
  font-family: sans-serif;
}
.container {
  display: flex;
  width: 69.375rem;
  background-color: #7e7e7e;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  margin-left: 12rem;
}
.info {
  display: flex;
}
.category {
  display: flex;
  border-bottom: solid 1px #ffffff;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}
.director {
  display: flex;
  padding-bottom: 1.5rem;
}
.actors {
  display: flex;
  padding-bottom: 1.5rem;
}
.photo {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 1.25rem;
  margin-right: 2rem;
  width: 12.5rem;
  background-color: #c6c6c6;
  border-radius: 0.5rem;
}
.title {
  margin-bottom: 1rem;
}
.summary {
  padding-bottom: 1.5rem;
}
.info-item {
  padding-left: 5rem;
}
.download {
  margin-left: 11.563rem;
  /* margin-right: auto; */
  justify-content: flex-end;
}
.content {
  padding-top: 1.25rem;
  padding-bottom: 2rem;
}
.icon {
  padding-right: 0.5rem;
}
</style>
