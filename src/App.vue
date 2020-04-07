<template>
  <div id="app">
    <div class="text">
      <div class="title">
        <au-text tag="h2">Text</au-text>
      </div>

      <div class="body">
        <au-text tag="h1">H1 header</au-text>

        <au-text tag="h2">H2 header</au-text>

        <au-text tag="h3">H3 header</au-text>

        <au-text tag="label">Label</au-text>

        <au-text tag="p">paragraph: Lorem ipsum dolor, sit amet consectetur adipisicing elit.</au-text>
      </div>
    </div>

    <div class="buttons">
      <div class="title">
        <au-text tag="h2">Buttons</au-text>
      </div>

      <div class="body">
        <div>
          <au-button color="primary" :disabled="false" @click="buttonClick">Primary</au-button>
        </div>
        
        <div style="margin-top: 10px">
          <au-button color="hight" :disabled="false" @click="buttonClick">Hight Contrast</au-button>
        </div>

        <div style="margin-top: 10px">
          <au-button :disabled="true" @click="buttonClick">Disabled</au-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AuText from './components/AuText'
  import AuButton from './components/AuButton'

  export default {
    name: 'App',
    components: { AuText, AuButton },
    methods: {
      buttonClick(event) {
        console.log('Button Click!', event);
      }
    }
  }
</script>

<style>
  @import url('./assets/styles/styles.css');
</style>