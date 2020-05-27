import { mount, shallowMount } from '@vue/test-utils'
import AuRow from '@/components/general/AuRow.vue'

describe('Componente AuRow', () => {

  // Valores por defecto de las props
  const defaultData = {
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuRow);
    expect(wrapper.name()).toBe('AuRow');
  })

  test('el componente renderiza el slot default', () => {
    const wrapper = shallowMount(AuRow, {
      slots: {
        default: 'Texto'
      }
    });
    expect(wrapper.text()).toEqual('Texto');
  })
})
