import { shallowMount } from '@vue/test-utils'
import ShowsListItem from '../../src/components/shows/ShowsListItem.vue'
import router from '../../src/router'
import show from './sample-show'

describe('ShowsListItem.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(ShowsListItem, {
      props: { show },
      global: {
        plugins: [router]
      }
    })
  })
  
  it('Shows correct image', () => {
    expect((wrapper.element as HTMLElement).style.backgroundImage).toBe(`url(${show.image.medium})`)
  })

  it('Shows show title on hover', async () => {
    await wrapper.trigger("mouseover")
    expect(wrapper.text()).toMatch(show.name)
  });
})
