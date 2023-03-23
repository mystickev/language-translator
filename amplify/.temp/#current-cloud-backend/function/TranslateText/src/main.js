import Vue from 'vue'
import App from './App.vue'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'

import { Translate } from '@google-cloud/translate'

Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

const translate = new Translate({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
})

Vue.prototype.$translate = async function (text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage)
    console.log(`Text: ${text}`)
    console.log(`Translation: ${translation}`)
    return translation
  } catch (error) {
    console.error(error)
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
