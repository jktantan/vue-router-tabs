import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import StackTab from './portal.vue'
import VueEmttier from './utils/tabMitt'

import './assets/style/index.scss'
const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN', // 首选语言
  fallbackLocale: 'en-US' // 备选语言
})

export default {
  install(app: App): void {
    app.component('VueStackTab', StackTab).use(VueEmttier).use(i18n)
  }
}
