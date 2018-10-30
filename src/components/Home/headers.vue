<template>
  <div class="top">
    <span>思学倾听</span>
    <i class="el-icon-tickets" @click="bus "></i>
  </div>
</template>

<script>
import Bus from '@/utils/bus'

export default {
  name: 'Headers',
  data () {
    return {
    }
  },
  methods: {
    bus () {
      Bus.$emit('msg','sda')
    }
  }
}
</script>

<style scoped>
.top{
  width:100%;
  height:100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between
}
span{
  width:50px;
  line-height: 2;
  border:1px solid #fff;
  text-align: center;
  color:#fff;
  border-radius: 15px;
}
</style>
