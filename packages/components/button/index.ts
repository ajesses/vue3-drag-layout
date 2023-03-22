// import type { App } from 'vue'
import { withInstall } from '@vue3-drag-layout/utils'
import Button from './src/button.vue'
export * from './src/button'

// Button.install = (app: App) => {
//   app.component(Button.name, Button)
// }
export const AtButton = withInstall(Button)
export default AtButton
