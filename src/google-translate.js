const { Translate } = require('@google-cloud/translate');

// Creates a client
const translate = new Translate({
  keyFilename: 'path/to/your/keyfile.json',
});

async function translateText(text, targetLanguage) {
  try {
    // Translates the text into the target language
    let [translation] = await translate.translate(text, targetLanguage);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    return translation;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  translateText,
};
