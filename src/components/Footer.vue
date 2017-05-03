<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    © 2017 - Djovanni Tehubijuluw
                </p>
                <p>
                    <a class="icon" href="https://github.com/djohalo2">
                    <i class="fa fa-github"></i>
                    </a>

                    <a class="icon" href="https://www.linkedin.com/in/djovanni-tehubijuluw-536a5a63/">
                    <i class="fa fa-linkedin-square"></i>
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'footer-section'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    footer {
        background-color: #000;
        padding: 2rem;

        p {
            font-size: 14px;
            color: #fff;

            .icon {
                padding: 1rem;

                i {
                    color: #fff;
                    transition: all 0.5s ease;

                    &:hover {
                        color: #ffb30f;
                    }
                }
            }
        }
    }
</style>
