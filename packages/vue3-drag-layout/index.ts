import type { App, Plugin } from 'vue'

import { AtButton } from '@vue3-drag-layout/components'

const components = [AtButton] as Plugin[]

const INSTALLED_KEY: unique symbol = Symbol('INSTALLED_KEY')

interface MyAppSymbols {
  [INSTALLED_KEY]: boolean
}
type MyApp = App & MyAppSymbols

export const install = (app: MyApp) => {
  if (app[INSTALLED_KEY])
    return
  app[INSTALLED_KEY] = true
  components.forEach(comp => app.use(comp))
}

export default {
  install,
}
