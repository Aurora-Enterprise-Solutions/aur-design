import { mount, shallowMount } from '@vue/test-utils'
import AuCard from '@/components/data_display/AuCard.vue'

describe('Componente AuCard', () => {

  // Valores por defecto de las props
  const defaultData = {
    collapsed: false,
    title: '',
    loading: false,
    hoverable: false,
    clickable: false
  }

  test('el componente tiene nombre', () => {
    const wrapper = mount(AuCard);
    expect(wrapper.name()).toBe('AuCard');
  })

  test('la prop collapsed debe ser por defecto ' + defaultData.collapsed, () => {
    let wrapper = mount(AuCard);
    expect(wrapper.vm.collapsed).toBeDefined();
    expect(wrapper.vm.collapsed).toBe(defaultData.collapsed);
  })

  test('la prop collapsed es renderizada en el wrapper del componente', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        collapsed: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-collapsed');
  })

  test('la prop title debe ser por defecto ' + defaultData.title, () => {
    let wrapper = mount(AuCard);
    expect(wrapper.vm.title).toBeDefined();
    expect(wrapper.vm.title).toBe(defaultData.title);
  })

  test('la prop title es renderizada dentro del wrapper del título', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        title: 'Título del card'
      }
    });
    let titleWrapper = wrapper.find('.title-section');
    expect(titleWrapper.text()).toContain('Título del card');
  })

  test('la prop loading debe ser por defecto ' + defaultData.loading, () => {
    let wrapper = mount(AuCard);
    expect(wrapper.vm.loading).toBeDefined();
    expect(wrapper.vm.loading).toBe(defaultData.loading);
  })

  test('la prop loading es renderizada en el wrapper del componente', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        loading: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-loading');
  })

  test('la prop hoverable debe ser por defecto ' + defaultData.hoverable, () => {
    let wrapper = mount(AuCard);
    expect(wrapper.vm.loading).toBeDefined();
    expect(wrapper.vm.loading).toBe(defaultData.hoverable);
  })

  test('la prop hoverable es renderizada en el wrapper del componente', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        hoverable: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-hoverable');
  })

  test('la prop clickable debe ser por defecto ' + defaultData.clickable, () => {
    let wrapper = mount(AuCard);
    expect(wrapper.vm.loading).toBeDefined();
    expect(wrapper.vm.loading).toBe(defaultData.clickable);
  })

  test('la prop clickable es renderizada en el wrapper del componente', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        clickable: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-clickable');
  })

  test('el método onCollapse es llamado cuando se hace click sobre la barra superior', () => {
    const onCollapse = jest.fn();
    let wrapper = mount(AuCard, {
      methods: {
        onCollapse
      }
    });

    let header = wrapper.find('.header');
    header.trigger('click');

    expect(onCollapse).toHaveBeenCalledTimes(1);
  })

  test('el método onCollapse emite el evento collapse cada vez que este el llamado', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        collapse: true
      }
    }),
    header = wrapper.find('.header');
    header.trigger('click');
    expect(wrapper.emitted().collapse).toBeTruthy();

    // collapse es false o undefined
    wrapper = mount(AuCard);
    header = wrapper.find('.header');
    header.trigger('click');
    expect(wrapper.emitted().collapse).toBeTruthy();
  })

  test('el método onClick es llamado cuando se hace click sobre el body de la tarjeta', () => {
    const onClick = jest.fn();
    let wrapper = mount(AuCard, {
      methods: {
        onClick
      }
    }),
    body = wrapper.find('.body');
    body.trigger('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  })

  test('el método onClick emite el evento click sólo cuando la prop clickable es true', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        clickable: true
      }
    }),
    body = wrapper.find('.body');
    body.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();

    // clickable es false o undefined
    wrapper = mount(AuCard, {
      propsData: {
        clickable: false
      }
    });
    body = wrapper.find('.body');
    body.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  })

  test('el componente renderiza el slot default', () => {
    const wrapper = shallowMount(AuCard, {
      slots: {
        default: 'Label'
      }
    });

    expect(wrapper.text()).toEqual('Label');
  })

  test('el componente renderiza el slot extra', () => {
    const wrapper = shallowMount(AuCard, {
      slots: {
        extra: '<a>Más info.</a>'
      }
    });

    expect(wrapper.html()).toContain('<a>Más info.</a>');
  })
})
