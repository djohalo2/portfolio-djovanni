<template>
    <nav class="nav">
      <div class="nav-left">
        <a href="#home" class="nav-item logo" v-smooth-scroll="{duration: 1000}" v-on:click="navToggled = false">
          <span class="bold">DIT</span>WEBDESIGN
        </a>
      </div>

      <span class="nav-toggle" v-on:click="navToggled = !navToggled">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu" v-bind:class="{'is-active': navToggled}">
        <a href="#home" v-smooth-scroll="{duration: 1000}" class="nav-item" v-on:click="navToggled = false">
          HOME
        </a>
        <a href="#projecten" v-smooth-scroll="{duration: 1000}" class="nav-item" v-on:click="navToggled = false">
          PROJECTEN
        </a>
        <a href="#overmij" v-smooth-scroll="{duration: 1000}" class="nav-item" v-on:click="navToggled = false">
          OVER MIJ
        </a>
        <a href="#contact" v-smooth-scroll="{duration: 1000}" class="nav-item" v-on:click="navToggled = false">
          CONTACT
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      navToggled: false
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

        .nav-toggle {
            width: 4.25rem;
            height: 4.25rem;

            &:hover {
                background-color: #000;

                span {
                    background-color: #56CC9D;
                }
            }

            span {
                background-color: #fff;
            }
        }

        a {
            color: #fff;
            padding: 1.5rem;

            &:hover {
                color: #ffb30f;
            }
        }

        .nav-menu {
            a {
                font-size: 12px;
                font-weight: 300;
                background-color: #000;
            }

            .nav-item {
                border-top: 1px solid #444444;
                padding-left: 1rem;
            }
        }

        .logo {
            font-weight: 300;
            font-size: 18px;

            .bold {
                font-weight: 600;
            }
        }
    }
</style>
