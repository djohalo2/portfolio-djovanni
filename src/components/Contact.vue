<template>
    <div id="contact" class="contact">
        <p>Interesse in een samenwerking?</p>
        <button class="button is-outlined" v-on:click="redirect">Neem contact op</button>
    </div>
</template>

<script>

export default {
    name: 'contact',
    methods: {
        redirect() {
            window.location.href = "mailto:djohalo2@hotmail.com";
        }
    }
}
</script>

<style scoped lang="scss">
    .contact {
        text-align:center;
        padding: 1.5rem;
        background-color: #ffb30f;

        p {
            display: inline-block;
            padding-top:0.25rem;
            color: #000;
            margin-right: 2rem;
        }

        .button {
            border-color: #000;
            border-radius: 20px;
            background-color: transparent;
            transition: all 1s ease;
            font-size:14px;
            font-weight: 300;
            color: #000;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }

    @media (max-width: 500px) {
        .contact {
            padding: 0.75rem;
            p {
                display: block;
                margin-right: 0;
                margin-bottom: 1rem;
            }
        }
    }
</style>
