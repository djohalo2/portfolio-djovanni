<template>
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item logo" v-on:click="redirectBack">
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            TERUG
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
      redirectBack() {
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    nav {
        background-color: #000;
        height: 4.3rem;
        position: fixed !important;
        top: 0;
        left: 0;
        right: 0;

        .logo {
            font-weight: 300;
            font-size: 14px;
            color: #fff;
            padding-left: 2rem;

            i {
                font-size: 14px;
                margin-right: 0.7rem;
            }
        }
    }
</style>
