<template>
  <div id="app">

    <!--TEXT-->
    <au-card title="Text" description="Widget que permite desplegar un texto." :collapsable="true">
      <div slot="title" slot-scope="headerProps" class="app-card-title">
        <div>
          <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
          <label class="title-tag">AuText</label>
        </div>
        <div>
          <au-text tag="span">{{ headerProps.header.description }}</au-text>
        </div>
      </div>
      <div>
        <au-row :gutter="16" wrap="wrap" align="baseline">
          <au-col><au-text tag="h1">H1</au-text></au-col>
          <au-col><au-text tag="h2">H2</au-text></au-col>
          <au-col><au-text tag="h3">H3</au-text></au-col>
          <au-col><au-text tag="h4">H4</au-text></au-col>
          <au-col><au-text tag="h5">H5</au-text></au-col>
          <au-col><au-text tag="h6">H6</au-text></au-col>
        </au-row>

        <au-row :gutter="16" wrap="wrap">
          <au-col>
            <au-text tag="p">paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente, facilis saepe aliquid consectetur in eligendi rerum architecto cumque at ipsa beatae fugit nisi ipsum eos ratione, debitis placeat? Optio.</au-text>
          </au-col>
        </au-row>
      </div>
    </au-card>

    <!--BUTTON-->
    <au-card title="Buttons" description="Tipos de botones. Permiten hacer llamadas a métodos." :collapsable="true">
      <div slot="title" slot-scope="headerProps" class="app-card-title">
        <div>
          <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
          <label class="title-tag">AuButton</label>
        </div>
        <div>
          <au-text tag="span">{{ headerProps.header.description }}</au-text>
        </div>
      </div>
      <div>
        <au-row :gutter="[16, 8]" wrap="wrap">
          <au-col>
            <au-button color="primary" :disabled="false" @click="buttonClick">Primary</au-button>
          </au-col>
          <au-col>
            <au-button color="hight" :disabled="false" @click="buttonClick">Hight Contrast</au-button>
          </au-col>
          <au-col :span="0">
            <au-button :disabled="true" @click="buttonClick">Disabled</au-button>
          </au-col>
        </au-row>
      </div>
    </au-card>

    <!--CARD-->
    <au-card title="Card" description="Tarjetas que permiten mostrar su contenido en espacios flotantes en la vista." :collapsable="true">
      <div slot="title" slot-scope="headerProps" class="app-card-title">
        <div>
          <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
          <label class="title-tag">AuCard</label>
        </div>
        <div>
          <au-text tag="span">{{ headerProps.header.description }}</au-text>
        </div>
      </div>

      <div>
        <au-row :gutter="16" wrap="wrap">
          <au-col :span="8">
            <au-card title="Normal Card" description="Esta es la descripción de esta tarjeta.">
              <div style="height: 100px"></div>
            </au-card>
          </au-col>

          <au-col :span="8">
            <au-card title="Collapse Card" description="Esta tarjeta se puede esconder su contenido." :collapsable="true" :default-collapsed="true">
              <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
                <au-text tag="span" style-text="color: #95afb9; font-size: 0.7rem">CONTENIDO DE LA TARJETA</au-text>
              </div>
            </au-card>
          </au-col>

          <au-col :span="8">
            <au-card title="Hoverable Card" description="Esta tarjeta se muestra con mayor intensidad." :hoverable="true">
              <div style="height: 100px"></div>
            </au-card>
          </au-col>
        </au-row>
      </div>
    </au-card>
  </div>
</template>

<script>
  import AuCard from './../components/data_display/AuCard'
  import AuText from './../components/general/AuText'
  import AuButton from './../components/general/AuButton'
  import AuRow from './../components/general/AuRow'
  import AuCol from './../components/general/AuCol'

  export default {
    name: 'App',
    components: { AuCard, AuText, AuButton, AuRow, AuCol },
    methods: {
      buttonClick(event) {
        console.log('Button Click!', event);
      }
    }
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