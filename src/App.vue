<template>
  <div id="app">
    <div class="buttons">
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
</template>

<script>
  import AuButton from './components/AuButton'

  export default {
    name: 'App',
    components: { AuButton },
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