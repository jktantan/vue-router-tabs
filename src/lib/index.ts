import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import StackTab from './StackTabs.vue'
// import VueEmttier from './hooks/useMitt'

import './assets/style/index.scss'
const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US'
})

export default {
  install(app: App): void {
    app.component('VueStackTabs', StackTab).use(i18n)
  }
}
