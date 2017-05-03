<template>
    <section class="columns" v-bind:style="{backgroundColor: backgroundColor}">
        <section class="column is-offset-2 is-4 project-description">
            <slot name="text"></slot>
        </section>

        <section class="column is-4">
            <img v-bind:src="imgUrl">
        </section>
    </section>
</template>

<script>

export default {
    name: 'text-section',
    props: ['imgUrl', 'backgroundColor']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .columns {
        align-items: center;
    }
    .project-description {
        padding: 4rem 2rem;
        line-height: 200%;
    }

    img {
        display: block;
        border-radius: 5px 5px 0 0
    }

    @media (max-width: 768px) {
        .project-description {
            padding: 1rem 4rem;
        }
    }

    @media (max-width: 500px) {
        .project-description {
            padding: 1rem 2rem;
        }
    }

</style>
