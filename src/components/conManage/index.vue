<template>
  <div class="hd-conManang-con">
    <h2><span>{{pageTitle}}</span><el-button type="primary">录入问答</el-button></h2>
   <conManageNav/>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      :empty-text="errToast"
      height="500"
      >
      <el-table-column
        v-for="(item, key) in conManage"
        :key="key"
        :prop="key"
        :label="item[0]"
        :width="item[1]"
        align="center">
      </el-table-column>
        <el-table-column
          label="操作"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">取消推荐</el-button>
          </template>
        </el-table-column>
    </el-table>
        
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :current-page="pageNum">
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import conManageNav from './conManageNav'
import { conManage } from '@/assets/conMan'
export default {
  name: 'conManage',
  data () {
    return {
      activeName: '1',
      conManage,
      row:''
    }
  },
  components:{
    conManageNav
  },
  mounted() {
    // console.log(this)
    // console.log(conManage)
  },
  computed: {
    ...mapState({
      pageTitle: state => state.pageTitle,
      tableData: state => state.conManages.data,
      loading: state => state.conManages.loading,
      pageSize:state => state.conManages.pageCon.pageSize,
      pageNum: state => state.conManages.pageCon.pageNum,
      total:state =>state.conManages.total,
      errToast:state=>state.conManages.errToast
    }),
  },
  methods: {
    handleClick(row) {
      this.row = row
    },
    handleSizeChange (num) {
      this.setTable({
        pageSize: num,
      });
      this.getList()
    },
    handleCurrentChange (num) {
      this.setTable({
        pageNum: num,
      });
      this.getList()
    },
    ...mapActions({
      getList: 'conManages/getConList',
      setTable:'conManages/setTable'
    })
  }
}
</script>

<style scoped>
.hd-conManang-con{
  width:100%;
  background:#fff;
}
h2{
  width:100%;
  font-weight: 400;
  display:flex;
  justify-content: space-between;
  margin:0;
}
h2 span{
  font-size: 16px;
}
.el-button{
  background: #3a76e5;
  box-shadow:0px 0px 2px 0px #3a76e5;
}
.el-pagination{
  text-align: right;
  margin-top:2rem;
}
.el-button--text{
  color:#606266;
  background: #fff;
  border:0;
  box-shadow: none;
}
/* :show-overflow-tooltip="true"  在el-table-column 中设置 意思是element-ui的table列超出部分省略加悬浮提示  */
 
/* :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  
    el-table标签。
    通过计算很容易得到，要使当页显示分页后的对应数据，其下标应为(当前页-1)*每页数据数  到  当前页*每页数据数。
    使用slice方法进行取用。 
*/

/* header-cell-style  表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 
对象格式   :header-cell-style="{
            'background': '#eee',
            'color': 'rgb(102, 102, 102)'
          }"
*/
</style>
