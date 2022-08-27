<template>
  <div>
    <div>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="name" />
        <label for="username">Name</label>
      </span>
    </div>
    <div>
      <span class="p-float-label">
        <Textarea id="textarea" v-model="summary" rows="3" cols="40" />
        <label for="textarea">Summary</label>
      </span>
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
        <Calendar id="calendar" v-model="dateOfPublication" />
        <label for="calendar">Date of Publication</label>
      </span>
    </div>
    <!-- Button -->
    <Button label="Secondary" class="p-button-secondary" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
