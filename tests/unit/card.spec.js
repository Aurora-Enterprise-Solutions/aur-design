import Vue from 'vue'
import AuroraIcon from '@aurora-enterprise-solutions/aur-icon'
import { mount, shallowMount } from '@vue/test-utils'
import AuCard from '@/components/data_display/AuCard.vue'

Vue.use(AuroraIcon)

describe('Componente AuCard', () => {

  // Valores por defecto de las props
  const defaultData = {
    title: '',
    description: '',
    collapsable: false,
    defaultCollapsed: false,
    hoverable: false
  }

  test('el componente tiene nombre', () => {
    const wrapper = shallowMount(AuCard);
    expect(wrapper.name()).toBe('AuCard');
  })

  test('la prop title debe ser por defecto ' + defaultData.title, () => {
    let wrapper = shallowMount(AuCard);
    expect(wrapper.vm.title).toBeDefined();
    expect(wrapper.vm.title).toBe(defaultData.title);
  })

  test('la prop title es renderizada dentro del wrapper del título', () => {
    let wrapper = shallowMount(AuCard, {
      propsData: {
        title: 'Título del card'
      }
    });
    let titleWrapper = wrapper.find('.title-section');
    expect(titleWrapper.text()).toContain('Título del card');
  })

  test('la prop description debe ser por defecto ' + defaultData.description, () => {
    let wrapper = shallowMount(AuCard);
    expect(wrapper.vm.description).toBeDefined();
    expect(wrapper.vm.description).toBe(defaultData.description);
  })

  test('la prop description es renderizada dentro del wrapper del título', () => {
    let wrapper = shallowMount(AuCard, {
      propsData: {
        title: 'Descripción del card'
      }
    });
    let titleWrapper = wrapper.find('.title-section');
    expect(titleWrapper.text()).toContain('Descripción del card');
  })

  test('la prop defaultCollapsed debe ser por defecto ' + defaultData.defaultCollapsed, () => {
    let wrapper = shallowMount(AuCard);
    expect(wrapper.vm.defaultCollapsed).toBeDefined();
    expect(wrapper.vm.defaultCollapsed).toBe(defaultData.defaultCollapsed);
  })

  test('la prop collapsable debe ser por defecto ' + defaultData.collapsable, () => {
    let wrapper = shallowMount(AuCard);
    expect(wrapper.vm.collapsable).toBeDefined();
    expect(wrapper.vm.collapsable).toBe(defaultData.collapsable);
  })

  test('la prop collapsable es renderizada en el wrapper del componente', () => {
    let wrapper = shallowMount(AuCard, {
      propsData: {
        collapsable: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-collapsable');
  })

  test('la prop hoverable debe ser por defecto ' + defaultData.hoverable, () => {
    let wrapper = shallowMount(AuCard);
    expect(wrapper.vm.hoverable).toBeDefined();
    expect(wrapper.vm.hoverable).toBe(defaultData.hoverable);
  })

  test('la prop hoverable es renderizada en el wrapper del componente', () => {
    let wrapper = shallowMount(AuCard, {
      propsData: {
        hoverable: true
      }
    });
    expect(wrapper.find('.au-card').attributes()).toHaveProperty('au-hoverable');
  })

  test('el método onCollapse es llamado cuando se hace click sobre el icono superior derecho', () => {
    const onCollapse = jest.fn();
    let wrapper = mount(AuCard, {
      propsData: {
        collapsable: true
      },
      methods: {
        onCollapse
      }
    });

    let icon = wrapper.find('.icon-section > *');
    icon.trigger('click');
    expect(onCollapse).toHaveBeenCalledTimes(1);
  })

  test('el método onCollapse emite el evento collapse solo si la prop collapsable es true', () => {
    let wrapper = mount(AuCard, {
      propsData: {
        collapsable: true
      }
    });

    expect(wrapper.contains('.icon-section')).toBe(true);

    let icon = wrapper.find('.icon-section > *');
    icon.trigger('click');
    expect(wrapper.emitted().collapse).toBeTruthy();

    // collapsable es false o undefined
    wrapper = mount(AuCard);
    expect(wrapper.contains('.icon-section')).toBe(false);
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

  test('el componente renderiza el slot title', () => {
    const wrapper = shallowMount(AuCard, {
      slots: {
        title: 'TITLE SLOT'
      }
    });

    expect(wrapper.text()).toContain('TITLE SLOT');
  })

  test('el slot title retorna las props title y description', () => {
    const wrapper = shallowMount(AuCard, {
      propsData: {
        title: 'Title',
        description: 'Description'
      },
      scopedSlots: {
        title: '<div slot-scope="headerProps"><h1>{{headerProps.header.title}}</h1><label>{{headerProps.header.description}}</label></div>'
      }
    });

    const titleSection = wrapper.find('.title-section');

    expect(titleSection.text()).toContain('Title');
    expect(titleSection.text()).toContain('Description');
  })
})
