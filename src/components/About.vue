<template>
    <section class="about">
        <div class="columns desktop-about">
            <div class="column is-12">
                <div class="columns">
                    <div class="column is-3"></div>
                    <hover-image imageSrc="/static/about/about_01.jpg" backgroundColor="#000" hoverType="push-right">
                        <h2 slot="title">2009 - 2015</h2>
                        <p slot="subtitle">VWO</p>
                        <i slot="icon" class="fa fa-book" aria-hidden="true"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_02.jpg" backgroundColor="#000" hoverType="push-down">
                        <h2 slot="title">2015 - Nu</h2>
                        <p slot="subtitle">Informatica</p>
                        <i slot="icon" class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_03.jpg" backgroundColor="#000" hoverType="push-left">
                        <h2 slot="title">2016</h2>
                        <p slot="subtitle">Shoppingsmall.nl</p>
                        <i slot="icon" class="fa fa-briefcase" aria-hidden="true"></i>
                    </hover-image>
                </div>

                <div class="columns">
                    <div class="column is-3"></div>
                    <hover-image imageSrc="/static/about/about_04.jpg" backgroundColor="#000" hoverType="push-up">
                        <h2 slot="title">HTML5</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="fa fa-html5" aria-hidden="true"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_05.jpg" backgroundColor="#000" hoverType="push-right">
                        <h2 slot="title">CSS3</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="fa fa-css3" aria-hidden="true"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_06.jpg" backgroundColor="#000" hoverType="push-down">
                        <h2 slot="title">Javascript</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="icon-javascript-alt"></i>
                    </hover-image>
                </div>

                <div class="columns">
                    <div class="column is-3"></div>
                    <hover-image imageSrc="/static/about/about_07.jpg" backgroundColor="#000" hoverType="push-right">
                        <h2 slot="title">Git</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="icon-git"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_08.jpg" backgroundColor="#000" hoverType="push-down">
                        <h2 slot="title">VueJS</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="icon-javascript-alt"></i>
                    </hover-image>

                    <hover-image imageSrc="/static/about/about_09.jpg" backgroundColor="#000" hoverType="push-left">
                        <h2 slot="title">Nodejs</h2>
                        <p slot="subtitle">Vaardigheid</p>
                        <i slot="icon" class="icon-nodejs"></i>
                    </hover-image>
                </div>
            </div>
        </div>

        <div class="mobile-about">
            <p>Ik ben Djovanni Tehubijuluw, een 20 jarige informatica student aan Hogeschool Leiden.
            Ik specialiseer mij momenteel in de nieuwste technologieen op het gebied van webdevelopment en mobiele applicaties.
            Naast de gebruikelijke schoolopdrachten, is mijn vrije tijd ook slachtoffer van mijn passie in de wereld van websites en apps.
            Ik word namelijk erg enthousiast van het bouwen van applicaties waar mensen wat aan hebben en wil zoveel mogelijk leren in de
            constant veranderende wereld van het web.</p>
            <img class="is-fullwidth" src="/static/about/about-portrait.jpg" alt="">
        </div>
    </section>
</template>

<script>
import HoverImage from './HoverImage.vue';

export default {
    name: 'about',
    components: {
        HoverImage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .about {
        .column {
            padding: 0.35rem;
        }

        .columns {
            margin-bottom: 0.35rem;
        }

        .mobile-about {
            display: none;
        }
    }


    @media (max-width: 768px) {

        .desktop-about {
            display:none;
        }

        .mobile-about {
            display:block !important;

            p {
                padding: 1rem 2rem 2rem 2rem;
                line-height: 200%;
            }

            img {
                display: block;
                width: 100%;
            }
        }
    }

</style>
