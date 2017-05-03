<template>
    <div>
        <project-nav></project-nav>
        <div class="project-page">
            <header-image imgUrl="/static/projects/woninginrichter-mockup-front.jpg"></header-image>

            <section-header>
                WONINGINRICHTER
            </section-header>

            <text-section backgroundColor="#eee" imgUrl="/static/projects/woninginrichter-mockup-mobile.png">
                <p slot="text">In dit project heb ik met een medestudent voor school een VR webapplicatie gebouwd. Deze webapplicatie maakt het voor gebruikers mogelijk om door middel van
                    Virtual Reality op je telefoon en een dergelijke Virtual Reality bril, je toekomstige huis in te richten. Nadat er diverse meubels zijn geplaatst kan de gebruiker
                    zelf in de kamer staan om een ervaring te bieden die voorheen met 2D foto's van huizen niet mogelijk was.</p>
            </text-section>

            <section-header backgroundColor="#fff">
                TECHNOLOGIES
            </section-header>

            <div class="technologies columns has-text-centered">
                <div class="column is-1 desktop-only"></div>
                <div class="column is-2">
                    <i class="icon-html5-alt"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-css3"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-jquery"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-bootstrap"></i>
                </div>

                <div class="column is-2">
                    <i class="icon-javascript-alt"></i>
                </div>
            </div>

            <text-section backgroundColor="#fff" imgUrl="/static/projects/woninginrichter-screenshot-inside.JPG">
                <p slot="text">In dit project heb ik geleerd om met enorm nieuwe technologie te werken, omdat er gebruik gemaakt moest worden van WebVR framework A-Frame.
                Ook heb ik in dit project veel ervaring opgedaan in javascript en jQuery.</p>
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
  name: 'woninginrichter',
  components: {
      SectionHeader,
      ProjectNav,
      TextSection,
      HeaderImage
  }
}
</script>

<style scoped lang="scss">

</style>
