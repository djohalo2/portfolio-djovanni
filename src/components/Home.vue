<template>
    <div>
        <navigation></navigation>
        <front-header></front-header>

        <section-header idName="projecten">
            PROJECTEN
        </section-header>

        <projects></projects>

        <section-header idName="overmij" backgroundColor="#fff">
            OVER MIJ
        </section-header>

        <about></about>

        <contact></contact>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import FrontHeader from './FrontHeader.vue';
import SectionHeader from './SectionHeader.vue';
import Projects from './Projects.vue';
import About from './About.vue';
import Contact from './Contact';

export default {
  name: 'home',
  components: {
      FrontHeader,
      SectionHeader,
      Projects,
      Navigation,
      About,
      Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
</style>
