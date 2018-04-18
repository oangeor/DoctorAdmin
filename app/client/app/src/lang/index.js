import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhLocal from './zh'

Vue.use(VueI18n)

const messages = {
  zh:{
    ...zhLocal,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  locale:'zh',
  messages
})

export default i18n
