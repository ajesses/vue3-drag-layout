import type { App } from 'vue'
import Button from './src/button.vue'
export * from './src/button'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export { Button }
export default Button
