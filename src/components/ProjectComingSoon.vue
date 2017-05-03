<template>
    <div class="column is-6" v-on:click="redirect">
        <div class="project-info">
            <slot name="project-title">Project title</slot>
            <slot name="project-category">Project category</slot>
            <span class="see-project">Neem contact op</span>
            <div class="underline"></div>
        </div>
    </div>
</template>

<script>
import router from 'vue-router';

export default {
  name: 'project-coming-soon',
  methods: {
      redirect() {
          window.location.href = "mailto:djohalo2@hotmail.com";
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
    background-color: #ffb30f;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: all 1s ease;

    &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
        opacity: 1;

        .project-info {
            opacity: 1;
            bottom: 2rem;

            .underline {
                width: 50px;
            }
        }
    }

    .project {
        padding: 1rem;
        height:400px;
    }

    .project-info {
        opacity: 1;
        transition: all 2s ease;
        position: absolute;
        bottom: 3.5rem;
        left: 3rem;

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
            opacity: 1;
        }
    }
}
</style>
