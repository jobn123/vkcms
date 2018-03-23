<template>
  <div class="hello">
    <el-row>
       <el-col :xs="24" :sm="{span: 6,offset: 9}">
         <el-row>
           <el-input v-model="uname" placeholder="请输入用户名"></el-input>
           <el-input v-model="upwd" placeholder="请输入密码"></el-input>
           <el-button type="primary" v-on:click="login">登录</el-button>
         </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      uname: '',
      upwd: ''
    }
  },
  methods: {
    login: function () {
      let _this = this
      if (this.uname === '' || this.upwd === '') {
        return this.$message({
          showClose: true,
          message: '请输入用户名或密码',
          type: 'warning'
        })
      }

      axios.get(`http://127.0.0.1:3000/auth/admin/${this.uname}`)
        .then(function (res) {
          if (res.data.user === null) {
            return _this.$message({
              showClose: true,
              message: '用户不存在',
              type: 'error'
            })
          }
          _this.$message({
            showClose: true,
            message: '登陆成功',
            type: 'success'
          })
          _this.$router.push('/admin')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.el-input
  margin-top: 20px
.hello
  .el-button
    margin-top 20px
    width 100%
</style>
