<template>
    <div class="header-image">
        <img v-bind:src="imgUrl" alt="">
    </div>
</template>

<script>

export default {
    name: 'header-image',
    props: ['imgUrl']
}
</script>

<style scoped lang="scss">

    .header-image {
        overflow: hidden;
        width: 100%;
        height:400px;
        position:relative;

        img {
            min-width:100%;
            display: block;
            position: absolute;
            top: -9999px;
            bottom: -9999px;
            left: -9999px;
            right: -9999px;
            margin: auto;
        }
    }

    @media (max-width: 768px) {
        .header-image {
            height: 300px;
        }
    }

    @media (max-width: 500px) {
        .header-image {
            height: 200px;
        }
    }

</style>
