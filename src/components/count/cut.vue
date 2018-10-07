<template>
  <div>
    <button @click="cutTo">-</button>
  </div>
</template>

<script>
export default {
  name: 'Cuts',
  methods: {
    cutTo () {
      this.$store.dispatch('cut', 100)
    }
  }
}
</script>

<style scoped>
</style>
