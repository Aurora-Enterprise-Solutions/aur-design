import { mount, shallowMount } from '@vue/test-utils'
import AuCard from '@/components/AuCard.vue'

describe('Componente AuCard', () => {

  // Valores por defecto de las props
  const defaultData = {
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuCard);
    expect(wrapper.name()).toBe('AuCard');
  })
})
