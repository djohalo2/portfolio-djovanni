<template>
    <div>
        <project-nav></project-nav>
        <div class="project-page">
            <header-image imgUrl="/static/projects/foodtracker-mockup-front.jpg"></header-image>

            <section-header>
                FOODTRACKER
            </section-header>

            <text-section backgroundColor="#eee" imgUrl="/static/projects/foodtracker-mockup.png">
                <p slot="text">Foodtracker is een webapplicatie die is gerealiseerd voor een schoolopdracht. Deze applicatie bevat een dashboard die gegevens bijhoudt en analyseert
                    op basis van gegeten voedsel. De gebruiker kan bij het invoeren aangeven of er zich klachten hebben voorgedaan en kan deze op elk moment inzien in
                    overzichten en lijsten.</p>
            </text-section>

            <section-header backgroundColor="#fff">
                TECHNOLOGIES
            </section-header>

            <div class="technologies columns has-text-centered">
                <div class="column is-1 desktop-only"></div>
                <div class="column is-2">
                    <i class="icon-reactjs"></i>
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

                <div class="column is-2">
                    <i class="icon-heroku"></i>
                </div>
            </div>

            <text-section backgroundColor="#fff" imgUrl="/static/projects/foodtracker-project.JPG">
                <p slot="text">In dit project heb ik kennisgemaakt met frameworks zoals React en NodeJS.
                    Ook heb ik veel geleerd op het gebied van modulair programmeren en bundel technologieën zoals Webpack.
                    Met dit project heb ik niet alleen veel te maken gehad met de front-end van een webapplicatie, maar ook heb ik
                    gebruik gemaakt van Firebase om gegevens op te slaan en te gebruiken door middel van een API.</p>
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
    .project-page {
        padding-top: 4rem;

        .container {
            padding-bottom: 4rem;
        }

        .technologies {
            background-color: #fff;
            padding-bottom: 4rem;

            .column {
                padding: 3rem;

                img {
                    width: 50px;
                    height: 50px;
                    margin-top: 1rem;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                    opacity: 0.2;
                    transition: all 1.5s ease;

                    &:hover {
                        opacity: 1;
                        -webkit-filter: grayscale(0%);
                        filter: grayscale(0%);
                    }
                }

                i {
                    color: #eee;
                    font-size: 54px;
                    padding: 2rem;
                    transition: all 1.5s ease;

                    &:hover {
                        color: #ffb30f;
                    }
                }
            }
        }

        .project-screenshot {
            border-radius: 4px 4px 0 0;
            border: 1px solid #eee;
        }
    }

    @media (max-width: 768px) {
        .desktop-only {
            display:none;
        }

        .technologies {
            padding-bottom: 0 !important;

            .column {
                padding: 1rem !important;

                img {
                    width: 80px !important;
                    height: 80px !important;
                    margin-right: 1rem;
                }

                i {
                    font-size: 100px !important;
                    padding: 1rem !important;
                }
            }
        }
    }
</style>
