<template>
  <div class="order">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>预约管理</template>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="childName" label="宝宝姓名" width="160">
            </el-table-column>
            <el-table-column prop="childAge" label="宝宝年龄" width="120">
            </el-table-column>
            <el-table-column prop="parentName" label="家长姓名" width="160">
            </el-table-column>
            <el-table-column prop="tel" label="联系方式" width="160">
            </el-table-column>
            <el-table-column prop="orderTime" label="预约时间" width="160">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'order',
  data () {
    return {
      tableData: [],
      total: 0
    }
  },
  mounted () {
    this.getOrders()
  },
  methods: {
    getOrders () {
      axios.get(`http://127.0.0.1:3000/order`)
        .then(res => {
          this.total = res.data.total
          this.tableData = res.data.orders
        })
    },
    handleEdit (index, row) {
      row.editflag = true
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSave (index, row) {
      row.editflag = false
      console.log(index, row)
    },
    handleCancle (index, row) {
      row.editflag = false
      console.log(index, row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.el-header
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;

.el-aside
  color: #333;

.el-pagination
  margin-top: 40px;
  text-align: center
</style>
