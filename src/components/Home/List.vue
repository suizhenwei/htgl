<template>
  <div>
    <el-menu 
    class="el-menu-vertical-demo"
    @open="handleOpen"  
    @close="handleClose" 
    :collapse="isCollapse"
    background-color='#D3DCE6'
    text-color="#666"
    active-text-color="#000"
    router
    >
      <el-submenu 
      v-for="(i, k) in routes"
      :key="(k)"
      :index="(k+'')">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{i.menuName}}</span>
        </template>
        <el-menu-item 
         v-for="(items, key) in i.childMenu"
         :key="key"
         :index="key+''"
         :route="items.route"
         >{{items.menuName}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Bus from '@/utils/bus'
import routes from '@/assets/routes.js'

export default {
  name: 'List',
  data () {
    return {
      isCollapse: false,
      routes,
      keyPath:0
    };
  },
  mounted() {
    Bus.$on('msg', () => {
      this.isCollapse = !this.isCollapse;
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      this.keyPath = keyPath
    },
    handleClose (key, keyPath) {
      this.keyPath = keyPath
    }
  }
}
</script>

<style scoped>
/* unique-opened=true  保持只有一个子菜单的展开 */
</style>
