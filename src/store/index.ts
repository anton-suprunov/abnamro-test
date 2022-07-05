import { reactive } from 'vue'
import { shows } from './shows'
import { ui } from './ui'

const store = reactive({
  shows,
  ui
})

export default store