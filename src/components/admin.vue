<template>
  <div class="admin">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>作者管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>、
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
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
            <el-table-column prop="date" label="日期" width="140">
              <template slot-scope="scope">
                <span v-if="!scope.row.editflag">{{ scope.row.date }}</span>
                <span v-if="scope.row.editflag" class="cell-edit-input">
                  <el-input v-model="scope.row.date" placeholder="请输入内容"></el-input>
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
              <template slot-scope="scope">
                <span v-if="!scope.row.editflag">{{ scope.row.name }}</span>
                <span v-if="scope.row.editflag" class="cell-edit-input">
                  <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="地址">
              <template slot-scope="scope">
                <span v-if="!scope.row.editflag">{{ scope.row.address }}</span>
                <span v-if="scope.row.editflag" class="cell-edit-input">
                  <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
              <div v-if="!scope.row.editflag">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </div>
              <div v-if="scope.row.editflag">
                <el-button
                  size="mini"
                  @click="handleSave(scope.$index, scope.row)">保存</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleCancle(scope.$index, scope.row)">取消</el-button>
              </div>
            </template>
          </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    const item = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      editflag: false
    },
    {
      date: '2016-05-03',
      name: '王小虎1',
      address: '上海市普陀区金沙江路 1518 弄',
      editflag: false
    }]
    return {
      tableData: item
    }
  },
  methods: {
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
  color: #333
</style>
