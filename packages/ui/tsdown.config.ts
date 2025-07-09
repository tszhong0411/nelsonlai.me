import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src', '!./src/styles.css'],
  unbundle: true,
  platform: 'browser'
})
