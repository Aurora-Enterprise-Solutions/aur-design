import { mount, shallowMount } from '@vue/test-utils'
import AuButton from '@/components/AuButton.vue'

describe('Componente AuButton', () => {

  // Valores por defecto de las props
  const defaultData = {
    color: 'primary',
    block: false,
    disabled: false,
    htmlType: 'button'
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuButton);
    expect(wrapper.name()).toBe('AuButton');
  })

  test('el componente tiene un tag html button', () => {
    const wrapper = mount(AuButton);
    let button = wrapper.find('button');
    expect(button.exists()).toBe(true);
  })

  test('la prop color debe ser por defecto ' + defaultData.color, () => {
    let wrapper = mount(AuButton);
    expect(wrapper.vm.color).toBeDefined();
    expect(wrapper.vm.color).toBe(defaultData.color);
  })

  test('la prop color es renderizada en el wrapper del button', () => {
    let wrapper = mount(AuButton);
    expect(wrapper.find('.au-button').attributes()).toHaveProperty('au-color');
  })

  test('la prop block debe ser por defecto ' + defaultData.block, () => {
    let wrapper = mount(AuButton);
    expect(wrapper.vm.block).toBeDefined();
    expect(wrapper.vm.block).toBe(defaultData.block);
  })

  test('la prop block es renderizada en el wrapper del button', () => {
    let wrapper = mount(AuButton, {
      propsData: {
        block: true
      }
    });
    expect(wrapper.find('.au-button').attributes()).toHaveProperty('au-block');
  })

  test('la prop disabled debe ser por defecto ' + defaultData.disabled, () => {
    let wrapper = mount(AuButton);
    expect(wrapper.vm.disabled).toBeDefined();
    expect(wrapper.vm.disabled).toBe(defaultData.disabled);
  })

  test('la prop disabled es renderizada en el button', () => {
    let wrapper = mount(AuButton, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('button').attributes()).toHaveProperty('disabled');
  })

  test('la prop htmlType debe ser por defecto ' + defaultData.htmlType, () => {
    let wrapper = mount(AuButton);
    expect(wrapper.vm.htmlType).toBeDefined();
    expect(wrapper.vm.htmlType).toBe(defaultData.htmlType);
  })

  test('la prop htmlType es renderizada sobre el button', () => {
    let wrapper = mount(AuButton);
    expect(wrapper.find('button').attributes()).toHaveProperty('type');
  })

  test('la computed _color retorna la prop color; si no existe en el arreglo de colores, retorna el primero del array', () => {
    let wrapper = mount(AuButton);

    // color por defecto
    expect(wrapper.vm._color).toBe(defaultData.color);

    // color dentro del array
    wrapper = mount(AuButton, {
      data() {
        return {
          COLORS: ['colorA', 'colorB', 'colorC']
        }
      },
      propsData: {
        color: 'colorB'
      }
    });
    expect(wrapper.vm._color).toBe('colorB');

    // color fuera del array, se espera que entregue el primero
    wrapper.setProps({
      color: 'colorD'
    })
    expect(wrapper.vm._color).toBe('colorA');
  })

  test('la computed _htmlType retorna la prop htmlType; si no existe en el arreglo de tipos, retorna el primero del array', () => {
    let wrapper = mount(AuButton);

    // htmlType por defecto
    expect(wrapper.vm._htmlType).toBe(defaultData.htmlType);

    // htmlType dentro del array
    wrapper = mount(AuButton, {
      data() {
        return {
          HTML_TYPE: ['typeA', 'typeB', 'typeC']
        }
      },
      propsData: {
        htmlType: 'typeB'
      }
    });
    expect(wrapper.vm._htmlType).toBe('typeB');

    // htmlType fuera del array, se espera que entregue el primero
    wrapper.setProps({
      htmlType: 'typeD'
    })
    expect(wrapper.vm._htmlType).toBe('typeA');
  })

  test('el metodo onClick es llamado cuando se hace click sobre el boton', () => {
    const onClick = jest.fn();
    let wrapper = mount(AuButton, {
      methods: {
        onClick
      }
    });

    let button = wrapper.find('button');
    button.trigger('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  })

  test('el metodo onClick emite el evento click si la prop disabled es false', () => {
    let wrapper = mount(AuButton, {
      propsData: {
        disabled: true
      }
    }),
    button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();

    // disabled es false o undefined
    wrapper = mount(AuButton);
    button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  })

  test('el componente renderiza el slot default', () => {
    const wrapper = shallowMount(AuButton, {
      slots: {
        default: 'Label'
      }
    });

    expect(wrapper.text()).toEqual('Label');
  })
})
