import { mount } from '@vue/test-utils'
import FloristLogo from '@/components/base/FloristLogo.vue'

describe('FloristLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FloristLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
