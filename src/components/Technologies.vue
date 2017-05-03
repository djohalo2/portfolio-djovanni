<template>
    <div class="column is-2">
        <i class="icon-reactjs"></i>
    </div>
</template>

<script>
export default {
  name: 'technologies',
  props: ['icons']
}
</script>

<style scoped lang="scss">
    .column {
        padding: 3rem;

        i {
            color: #eee;
            font-size: 48px;
            padding: 2rem;
            transition: all 1.5s ease;

            &:hover {
                color: #4ad5ff;
            }
        }
    }
</style>
