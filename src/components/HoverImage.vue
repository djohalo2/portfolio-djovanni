<template>
    <div class="column is-2">
        <figure v-bind:class="'imghvr-' + hoverType">
            <img v-bind:src="imageSrc">
            <figcaption>
                <slot name="title"></slot>
                <slot name="subtitle"></slot>
                <slot name="icon"></slot>
            </figcaption>
        </figure>
    </div>
</template>

<script>

export default {
    name: 'hover-image',
    props: ['imageSrc', 'backgroundColor', 'hoverType']
}
</script>

<style scoped lang="scss">
    figcaption {
        text-align: center;
        padding: 3rem;
        background-color: #ffb30f;

        h2 {
            font-size: 20px;
            font-weight: 600;
        }

        p {
            padding-bottom: 1.5rem;
        }

        i {
            font-size:54px;
        }
    }

    @media (max-width: 1179px) {

        figcaption {
            padding: 1.5rem !important;

            h2 {
                font-size: 16px !important;
            }

            p {
                font-size:14px;
                padding-bottom: 0.5rem !important;
            }

            i {
                font-size: 42px !important;
            }
        }
    }
</style>
