<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>
      <label for="text">Text to translate:</label>
      <input type="text" v-model="text" id="text">
    </p>
    <p>
      <label for="language">Target language:</label>
      <select v-model="language" id="language">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
      </select>
    </p>
    <p>
      <button @click="translateText">Translate</button>
    </p>
    <p v-if="translatedText">
      <strong>Translation:</strong> {{ translatedText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Language Translator',
      text: '',
      language: 'en',
      translatedText: ''
    }
  },
  methods: {
    async translateText() {
      if (!this.text) {
        return
      }
      this.translatedText = await this.$translate(this.text, this.language)
    }
  }
}
</script>
