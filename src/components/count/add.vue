<template>
  <div>
    <button @click="addTo">+</button>
  </div>
</template>

<script>
export default {
  name: 'Adds',
  data () {
    return {}
  },
  methods: {
    addTo () {
      this.$store.commit('ADD', 100)
    }
  }
}
</script>

<style scoped>
</style>
