<template>
  <div id="app">
    <!--TEXT-->
    <text-card />

    <!--BUTTON-->
    <button-card />

    <!--CARD-->
    <card-card />

    <!--NAVIGATOR-->
    <navigator-card />

    <!--INPUT-->
    <input-card />
  </div>
</template>

<script>
  import TextCard from './components/TextCard'
  import ButtonCard from './components/ButtonCard'
  import CardCard from './components/CardCard'
  import NavigatorCard from './components/NavigatorCard'
  import InputCard from './components/InputCard'

  export default {
    name: 'App',
    components: { TextCard, ButtonCard, CardCard, NavigatorCard, InputCard }
  }
</script>

<style>
  @import url('./../assets/styles/styles.css');

  body {
    background-color: #f5f8fe;
    padding: 20px 10vw;
  }

  .au-card {
    margin-bottom: 20px;
  }

  .app-card-title .title-scope {
      display: inline-block;
      margin-right: 5px;
  }

  .app-card-title .title-tag {
      font-weight: 300;
  }

  .buttons-display, .text-header-display {
    display: flex;
    align-items: baseline;
  }

  .buttons-display > div,
  .text-header-display > div {
    margin: 5px;
    flex-wrap: wrap;
  }

  .text-p-display {
    margin: 5px;
  }

  .card-display {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card-display > div {
    width: 250px;
  }
</style>