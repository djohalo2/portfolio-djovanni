<template>
    <section>
        <div class="columns is-gapless is-multiline">
            <project :bgImage="'url(/static/projects/drumgenerator-mockup-front.png)'" :url="'/drumgenerator'">
                <img slot="project-image" src="/static/projects/woninginrichter-project.JPG" alt="Foodtracker project">
                <h3 slot="project-title">Drum generator</h3>
                <p slot="project-category">Webapp voor drummers die creatieve inspiratie zoeken</p>
            </project>

            <project :bgImage="'url(/static/projects/foodtracker-mockup-front.jpg)'" :url="'/foodtracker'">
                <img slot="project-image" src="/static/projects/foodtracker-project.JPG" alt="Foodtracker project">
                <h3 slot="project-title">Foodtracker</h3>
                <p slot="project-category">Webapp om voedselklachten te achterhalen en voedselpatronen bij te houden</p>
            </project>

            <project :bgImage="'url(/static/projects/woninginrichter-mockup-front.jpg)'" :url="'/woninginrichter'">
                <img slot="project-image" src="/static/projects/woninginrichter-project.JPG" alt="Foodtracker project">
                <h3 slot="project-title">Woninginrichter</h3>
                <p slot="project-category">Virtual reality prototype waarmee je je toekomstige huis kan inrichten</p>
            </project>

            <project-coming-soon>
                <h3 slot="project-title">Uw project</h3>
                <p slot="project-category">Interesse in een samenwerking?</p>
            </project-coming-soon>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue';
import ProjectComingSoon from './ProjectComingSoon.vue';

export default {
    name: 'projects',
    components: {
        Project,
        ProjectComingSoon
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    section {
        color: #fff;
        background-color: #eee;

    }
</style>
