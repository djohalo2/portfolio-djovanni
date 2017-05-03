<template>
    <header id="home">
        <div class="header-text has-text-centered">
            <h1>HALLO.</h1>
            <div class="header-underline"></div>
            <h4>Djovanni Tehubijuluw - Student Informatica</h4>
        </div>

        <div class="is-clearfix"></div>
    </header>
</template>

<script>
export default {
  name: 'front-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    header {
        background: url('/static/header/front.jpg') no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        height:100vh;
        width:100vw;
        color: #fff;

        .header-text {
            padding-top: 200px;

            h1 {
                font-size: 7.5rem;
                font-weight: 700;
            }

            h4 {
                padding: 2rem;
            }

            .header-underline {
                background-color: #fff;
                width: 100px;
                height: 2.5px;
                margin:0 auto;
            }
        }

        @media (max-width: 500px) {
            .header-text {
                padding-top: 100px;

                h1 {
                    font-size: 4.5rem !important;
                }
            }

        }

    }

</style>
