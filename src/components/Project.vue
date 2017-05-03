<template>
    <div class="column is-6" v-on:click="redirect">
        <div class="image-overlay"></div>
        <div class="project" v-bind:style="{backgroundImage: bgImage}"></div>
        <div class="project-info">
            <slot name="project-title">Project title</slot>
            <slot name="project-category">Project category</slot>
            <span class="see-project">Bekijk project</span>
            <div class="underline"></div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
  name: 'projects',
  props: ['bgImage', 'url'],
  methods: {
      redirect() {
          this.$router.push({path: this.url});
      }
  }
}
</script>

<style scoped lang="scss">

.column {
    overflow:hidden;
    position: relative;
    cursor: pointer;
    padding: 0;

    &:hover {
        .project {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transform: scale(1.05);
            opacity: 0.6;
        }

        .project-info {
            opacity: 1;
            bottom: 2rem;

            .underline {
                width: 50px;
            }
        }
    }

    .image-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        background-color: #000;
    }

    .project {
        padding: 1rem;
        height:400px;
        background-color: #ffb30f;
        background-size: cover;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all 1s ease;
    }

    .project-info {
        opacity: 0;
        transition: all 2s ease;
        position: absolute;
        bottom: 3.5rem;
        left: 3rem;

        .project-image {
            padding: 0;
            margin: 0;

            img {
                width: 100%;
                height: 100%;
                border-radius: 4px 0 0 4px;
            }
        }

        h3 {
            font-size: 28px;
            font-weight: 600;
            text-transform: uppercase;
        }

        p {
            padding-bottom: 1rem;
        }

        .underline {
            width: 0;
            transition: all 0.5s ease 0.3s;
            height: 4px;
            background-color: #fff;
            margin-top: 0.5rem;
        }
    }

    @media (min-width: 1384px) {
        .project {
            height: 500px;
        }
    }

    @media (max-width: 768px) {
        .project-info {
            opacity: 1;
            bottom: 2rem;

            .underline {
                width: 50px;
            }
        }

        .project {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transform: scale(1.05);
            opacity: 0.7;
        }
    }
}
</style>
