<template>
  <div id="app">
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from './components/Footer.vue';

export default {
  name: 'app',
  metaInfo: {
      title: 'Djovanni Tehubijuluw',
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
  },
  components: {
      FooterSection
  }
}
</script>

<style lang="scss">

@import "../node_modules/bulma/sass/utilities/initial-variables";

$family-serif: "Fira Sans", sans-serif;

$family-primary: $family-serif;

@import '../node_modules/bulma/bulma.sass';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import 'font-mfizz/font-mfizz.css';
@import 'assets/css/image-hover/imagehover.min.css';

</style>
