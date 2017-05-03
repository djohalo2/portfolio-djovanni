<template>
    <div>
        <project-nav></project-nav>
        <div class="project-page">
            <header-image imgUrl="/static/projects/drumgenerator-mockup-front.png"></header-image>

            <section-header>
                DRUM GENERATOR
            </section-header>

            <text-section backgroundColor="#eee" imgUrl="/static/projects/drumgenerator-mockup.png">
                <p slot="text">Drum generator is een persoonlijk, work in progress, project waarin ik heb kennisgemaakt met javascript framework VueJS 2.
                In deze applicatie kan de gebruiker drum ritmes en fills genereren en afspelen. Ook zijn er diverse filters om bepaalde onderdelen wel of niet
                te betrekken bij de willekeurige fill. Het doel van deze webapplicatie is om inspiratie op te doen als drummer en uiteraard als leermiddel voor mijzelf.</p>
            </text-section>

            <section-header backgroundColor="#fff">
                TECHNOLOGIES
            </section-header>

            <div class="technologies columns has-text-centered">
                <div class="column is-1 desktop-only"></div>
                <div class="column is-2">
                    <img src="/static/logo_vuejs.png" alt="">
                </div>
                <div class="column is-2">
                    <i class="icon-javascript-alt"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-nodejs"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-sass"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-npm"></i>
                </div>
            </div>

            <text-section backgroundColor="#fff" imgUrl="/static/projects/drumgenerator-screenshot-inside.JPG">
                <p slot="text">In dit persoonlijke project wilde ik, na eerder met het React framework te hebben gewerkt, mijn horizon verbreden.
                Vuejs trok mijn aandacht en daarom ben ik een project gestart met dit framework. Ik doe veel ervaring op met modulair programmeren en
                leer steeds beter omgaan met dit concept. Tevens ben ik veel bezig met het produceren van dynamische functionaliteit, omdat er in deze
                applicatie gebruik wordt gemaakt van willekeurig gegenereerde content.</p>
            </text-section>
        </div>
    </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import ProjectNav from './ProjectNav.vue';
import TextSection from './TextSection.vue';
import HeaderImage from './HeaderImage.vue';

export default {
  name: 'foodtracker',
  components: {
      SectionHeader,
      ProjectNav,
      TextSection,
      HeaderImage
  }
}
</script>

<style lang="scss">

</style>
