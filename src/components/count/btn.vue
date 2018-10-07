<template>
  <div>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'Btns',
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>
</style>
