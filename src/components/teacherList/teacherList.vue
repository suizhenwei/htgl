<template>
  <div>
    {{pageTitle}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'teacherList',
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
