import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/header/Header.vue'
import App from '../../src/App.vue'
import router from '../../src/router'

describe('App.vue', () => {
  it('Header component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(Header).exists()).toBe(true)
  })
})
