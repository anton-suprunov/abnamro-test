import { shallowMount } from '@vue/test-utils'
import ThemeSwitch from '../../src/components/header/ThemeSwitch.vue'

describe('ThemeSwitch.vue', () => {
  it('Theme switch works correctly', () => {
    const wrapper = shallowMount(ThemeSwitch)
    expect(wrapper.text()).toMatch('Switch to light theme')
  })
})
