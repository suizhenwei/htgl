<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐问答" name="1">
      </el-tab-pane>
      <el-tab-pane label="全部问答" name="2">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'conManageNav',
  data (){
    return {
      activeName: '1',
    }
  },
  methods:{
    handleClick (e) {
      this.setTable({
        tid: e.name,
      });
      this.getList()
    },
    ...mapActions({
      getList: 'conManages/getConList',
      setTable: 'conManages/setTable'
    })
  }
}
</script>

<style scoped>
</style>
