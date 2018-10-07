<template>
  <div id="home">
    <el-container>
      <el-header>
        <Headers />
      </el-header>
      <el-container>
        <el-aside width="auto">
          <List />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Headers from './headers';
import List from './List';

export default {
  name: 'Home',
  data () {
    return {
      
    };
  },
  components:{
    Headers,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home,.el-container{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height:100%;
}
.el-header{
  background-color: #3a76e5;
  color: #333;
  text-align: center;
}
.el-aside {
  height:100%;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}
  
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding:18px;
}
</style>
