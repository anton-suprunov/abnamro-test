import { shallowMount } from '@vue/test-utils'
import ShowsListByGenre from '../../src/components/shows/ShowsListItem.vue'
import router from '../../src/router'
import show from './sample-show'

const store = {
  shows: {
    getShowsByGenre(genre: string) {
      console.log(genre)
      return [show]
    }
  }
}

describe('ShowsListByGenre.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(ShowsListByGenre, {
      props: { genre: 'Action' },
      global: {
        plugins: [router],
        mocks: [store]
      }
    })
  })
  
  it('Should render', () => {
    expect(wrapper.element.exists()).toBe(true)
  })
})
