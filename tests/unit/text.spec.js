import { mount, shallowMount } from '@vue/test-utils'
import AuText from '@/components/general/AuText.vue'

describe('Componente AuText', () => {

  // Valores por defecto de las props
  const defaultData = {
    tag: 'p'
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuText);
    expect(wrapper.name()).toBe('AuText');
  })

  test('la prop tag debe ser por defecto ' + defaultData.tag, () => {
    let wrapper = mount(AuText);
    expect(wrapper.vm.tag).toBeDefined();
    expect(wrapper.vm.tag).toBe(defaultData.tag);
  })

  test('el componente renderiza el tag entregado', () => {
    const wrapper = mount(AuText, {
      propsData: {
        tag: 'h1'
      }
    });
    expect(wrapper.html()).toContain('h1');
  })

  test('el componente renderiza el slot default', () => {
    const wrapper = shallowMount(AuText, {
      slots: {
        default: 'Texto'
      }
    });
    expect(wrapper.text()).toEqual('Texto');
  })
})
