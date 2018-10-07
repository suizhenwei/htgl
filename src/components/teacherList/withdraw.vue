<template>
  <div>
    {{pageTitle}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'withdraw',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['pageTitle'])
  }
}
</script>

<style scoped>
</style>
