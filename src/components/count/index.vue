<template>
  <div>
    {{pageTitle}}
    <Adds />
    <Cuts />
    <Btns />
  </div>
</template>

<script>
import Adds from './add'
import Cuts from './cut'
import Btns from './btn'
import { mapState } from 'vuex'
export default {
  name: 'indexs',
  data () {
    return {
    }
  },
  components: {
    Adds,
    Cuts,
    Btns,
  },
  computed: {
    ...mapState(['pageTitle'])
  }
}
</script>

<style scoped>
</style>
