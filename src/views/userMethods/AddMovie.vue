<template>
  <div>
    <!-- Testing the results -->
    <!-- <h2>{{ selectedGenre }}</h2> -->
    <!-- <h2>{{ summary }}</h2> -->
    <!-- <h2>{{ dateValidator(dateOfPublication) }}</h2> -->
    <!-- <h1>{{ dateOfPublication }}</h1> -->
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="name" />
        <label for="username">Name</label>
      </span>
    </div>
    <div>
      <textarea v-model="summary"></textarea>
      <!-- <Textarea v-model="ss" :autoResize="true" rows="5" cols="30" /> -->
    </div>
    <div>
      <span>
        <label for="listbox">Genre</label>
        <ListBox
          id="listbox"
          v-model="selectedGenre"
          :options="genre"
          optionLabel="name"
          style="width: 15rem"
        />
      </span>
    </div>
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="director" />
        <label for="username">Director</label>
      </span>
    </div>
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="actors" />
        <label for="username">Actors</label>
      </span>
    </div>
    <div class="field col-12 md:col-3">
      <label for="minmax-buttons">Score</label>
      <InputNumber
        inputId="minmax-buttons"
        v-model="selectedScore"
        mode="decimal"
        showButtons
        :min="0"
        :max="10"
        :step="0.1"
      />
    </div>
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="country" />
        <label for="username">Country</label>
      </span>
    </div>
    <div>
      <span class="p-float-label">
        <InputText id="date" type="text" v-model="dateOfPublication" />
        <label for="date">Date of Publication</label>
      </span>
    </div>
    <!-- <div>
      <span class="p-float-label">
        <Calendar id="calendar" v-model="dateOfPublication" />
        <label for="calendar">Date of Publication</label>
      </span>
    </div> -->
    <!-- Button -->
    <Button
      @click="uploadMovie"
      label="Upload Movie"
      class="p-button-secondary"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ss: "",
      token: null,
      name: null,
      summary: null,
      dateOfPublication: null,
      selectedScore: null,
      selectedGenre: null,
      actors: [],
      director: null,
      country: null,

      genre: [
        { name: "Horror", code: "H" },
        { name: "Fantasy", code: "F" },
        { name: "Action", code: "A" },
        { name: "Comedy", code: "C" },
        { name: "Drum", code: "D" },
      ],
    };
  },
  methods: {
    // dateValidator(date) {
    //   // const validDate = date.split("-");
    //   return date;
    // },
    uploadMovie() {
      axios({
        method: "post",
        url: "http://localhost:8000/upload-film/",
        // headers: {
        //   token: this.token,
        // },
        data: {
          name: this.name,
          summary: this.summary,
          genre: this.selectedGenre.name,
          director: this.director,
          actors: this.actors,
          score: this.selectedScore,
          country: this.country,
          yearOfPublication: this.dateOfPublication,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      console.log(token);
    },
  },
  computed: {
    seeToken() {
      this.token = this.$store.getters.showToken;
      // return this.$store.getters.showToken;
    },
  },
};
</script>

<style scoped>
div {
  padding-top: 2rem;
}
#listbox {
  padding-top: 0;
}
Button {
  margin-top: 2rem;
}
</style>
