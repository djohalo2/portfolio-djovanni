<template>
    <section v-bind:id="idName" v-bind:style="{backgroundColor: backgroundColor}" class="has-text-centered">
        <h2>
            <slot>
                Header Title
            </slot>
        </h2>
        <div class="section-underline"></div>
    </section>
</template>

<script>
export default {
  name: 'section-header',
  props: ['idName', 'backgroundColor']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    section {
        padding: 5rem;
        color: #000;
        background-color: #eee;

        h2 {
            font-size: 30px;
            font-weight: 700;
        }

        .section-underline {
            background-color: #B2B2B2;
            width: 100px;
            height: 1px;
            margin:0 auto;
            margin-top: 0.8rem;
        }
    }

    @media (max-width: 768px) {
        section {
            padding: 2rem !important;

            h2 {
                font-size:24px !important;
            }
        }
    }
</style>
