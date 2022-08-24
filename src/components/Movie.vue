<template>
  <!-- <div class="container"> -->
    <!-- name
    summary 
    genre
    director
    actors
    score
    country
    year of publication
    -->
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
  <div class="container"></div>
  <div class="photo">photo</div>
  <div class="title">{{ information.name }}</div>
  <div class="category">
    <img alt="menu-hamburger" src="../assets/icons/charm_menu-hamburger.svg" />
  </div>
  <div class="category-textt">{{ information.genre }}</div>
  <div class="separator-line"></div>
  <div class="director-icon">
    <img alt="person" src="../assets/icons/bi_person-fill.svg" />
  </div>
  <div class="director-textt-question">Director:</div>
  <div class="director-textt-answer">{{ information.director }}</div>
  <div class="actors-icon">
    <img alt="people" src="../assets/icons/bi_people-fill.svg" />
  </div>
  <div class="actors-textt-question">Actors:</div>
  <div class="actors-textt-answer">{{ information.actors }}</div>
  <div class="summary-box"></div>
  <div class="summary-textt">
    Summary: {{ information.summary }}
  </div>
  <div class="calender-icon">
    <img alt="calender" src="../assets/icons/uis_calender.svg" />
  </div>
  <div class="date">{{ information.yearOfPublication }}</div>
  <div class="earth-icon">
    <img alt="earth" src="../assets/icons/fa6-solid_earth-americas.svg" />
  </div>
  <div class="country">Country: {{ information.country }}</div>
  <div class="score-icon">
    <img alt="imdb" src="../assets/icons/fontisto_imdb.svg" />
  </div>
  <div class="score">Score: {{ information.score }}/10</div>
  <div class="download-btn"></div>
  <div class="download-icon">
    <img alt="download" src="../assets/icons/Vector.svg" />
  </div>
  <div class="download-textt">Download</div>
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
  position: absolute;
  width: 1110px;
  height: 330px;
  left: 165px;
  top: 253px;
  background: #7e7e7e;
  border-radius: 20px;
}
.download-textt {
  text-align: left;
  position: absolute;
  width: 79px;
  height: 19px;
  left: 1143px;
  top: 533px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.download-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1119px;
  top: 534px;
}
.download-btn {
  position: absolute;
  width: 169px;
  height: 40px;
  left: 1086px;
  top: 523px;
  background: #2d2d2d;
  border-radius: 8px;
}
.score {
  text-align: left;
  position: absolute;
  width: 68px;
  height: 17px;
  left: 833px;
  top: 534px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.score-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 809px;
  top: 535px;
}
.country {
  text-align: left;
  position: absolute;
  width: 104px;
  height: 17px;
  left: 626px;
  top: 534px;
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.earth-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 602px;
  top: 534px;
}
.calender-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 417px;
  top: 535px;
}
.date {
  text-align: left;
  position: absolute;
  width: 81px;
  height: 17px;
  left: 441px;
  top: 534px;
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.summary-textt {
  text-align: left;
  position: absolute;
  width: 391px;
  height: 15px;
  left: 434px;
  top: 478px;
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.summary-box {
  position: absolute;
  width: 837px;
  height: 40px;
  left: 418px;
  top: 466px;
  background: #9d9d9d;
  border-radius: 8px;
}
.actors-textt-answer {
  /* Amu Yousof, ... */
  position: absolute;
  width: 800px;
  height: 17px;
  left: 486px;
  top: 421px;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 500; */
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: left;
}
.actors-textt-question {
  /* Actors: */
  position: absolute;
  width: 43px;
  height: 17px;
  left: 441px;
  top: 421px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.actors-icon {
  /* bi:people-fill */
  position: absolute;
  width: 16px;
  height: 16px;
  left: 417px;
  top: 421px;
}
.director-textt-question {
  /* Director: */
  position: absolute;
  width: 43px;
  height: 17px;
  left: 441px;
  top: 375px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.director-textt-answer {
  /* Ali Maher */
  text-align: left;
  position: absolute;
  width: 80px;
  height: 17px;
  left: 495px;
  top: 375px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.director-icon {
  /* bi:person-fill */
  position: absolute;
  width: 16px;
  height: 16px;
  left: 417px;
  top: 377px;
}
.separator-line {
  /* Line 1 */
  position: absolute;
  width: 838px;
  height: 0px;
  left: 417px;
  top: 351px;
  border: 1px solid #ffffff;
}
.photo {
  position: absolute;
  width: 200px;
  height: 290px;
  left: 185px;
  top: 273px;
  background: #c6c6c6;
  border-radius: 8px;
}
.title {
  text-align: left;
  position: absolute;
  width: 130px;
  height: 19px;
  left: 417px;
  top: 275px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.category {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 417px;
  top: 310px;
}
.category-textt {
  text-align: left;
  position: absolute;
  width: 43px;
  height: 17px;
  left: 441px;
  top: 310px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
/* .container {
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
} */
</style>
