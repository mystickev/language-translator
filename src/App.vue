<template>
  <div id="app" class="container">
    <b-row class="mt-5 d-flex justify-content-center">
      <b-col md="6">
        <b-form-textarea
          v-model="fromText"
          placeholder="Enter text to be translated..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="5" class="d-flex justify-content-center align-items-center">
        <label>From Language:</label>
        <b-form-select
          v-model="fromLanguage"
          :options="languageOptions"
          class="m-2"
          style="max-width:250px"
        ></b-form-select>
      </b-col>
      <b-col md="5" class="d-flex justify-content-center align-items-center">
        <label>To Language:</label>
        <b-form-select
          v-model="toLanguage"
          :options="languageOptions"
          class="m-2"
          style="max-width:250px"
        ></b-form-select>
      </b-col>
      <b-col class="d-flex justify-content-center">
        <b-button class="m2" @click="translateText">Translate</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-5 d-flex justify-content-center">
      <b-col md="6">
        <b-form-textarea
          v-model="toText"
          placeholder="Translated text will appear here..."
          rows="3"
          max-rows="6"
          disabled
        ></b-form-textarea>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { translateText } from '@/google-translate';
export default {
  name: "App",
  data() {
    return {
      fromLanguage: "",
      toLanguage: "",
      fromText: "",
      toText: "",
      languageOptions: [
        { value: "", text: "Please select an option" },
        { value: "ar", text: "Arabic" },
        { value: "cs", text: "Czech" },
        { value: "zh", text: "Chinese" },
        { value: "en", text: "English" },
        { value: "fr", text: "French" },
        { value: "de", text: "German" },
        { value: "it", text: "Italian" },
        { value: "ja", text: "Japanese" },
        { value: "pt", text: "Portuguese" },
        { value: "ru", text: "Russian" },
        { value: "es", text: "Spanish" },
        { value: "tr", text: "Turkish" }
      ]
    };
  },
  methods: {
    async translateText() {
      let translation = await Predictions.convert({
        translateText: {
          source: {
            text: this.fromText,
            language: this.fromLanguage,
          },
          targetLanguage: this.toLanguage,
        },
      });
      this.toText = translation.text;
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>