import { mount, shallowMount } from '@vue/test-utils'
import AuCol from '@/components/general/AuCol.vue'

describe('Componente AuCol', () => {

  // Valores por defecto de las props
  const defaultData = {
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuCol);
    expect(wrapper.name()).toBe('AuCol');
  })

  test('el componente renderiza el slot default', () => {
    const wrapper = shallowMount(AuCol, {
      slots: {
        default: 'Texto'
      }
    });
    expect(wrapper.text()).toEqual('Texto');
  })
})
