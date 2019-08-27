<template>
  <div>
    <div class="ListWarp">


      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <router-link to="/Admin" class = "user">管理员管理</router-link>
              </template>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>课程管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <router-link to="/CourseManage" class = "user">课程管理</router-link>
              </template>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>班级管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <router-link to="/ClassManage" class = "user">班级管理</router-link>
              </template>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>直播课程管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <router-link to="/DirectSeeding" class = "user">直播课程管理</router-link>
              </template>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>教师管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <router-link to="/TeacherManage" class = "user">教师管理</router-link>
              </template>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
      <div class="main">
        <router-view></router-view>
      </div>

    </div>
    <div class="table">
      <h2>创客学院后台管理系统</h2>
      <span class="loginOut" @click="loginOut">【登出】</span>
    </div>
	
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOut() {
        var self = this
        this.$confirm('您确定要退出吗?', '退出管理平台', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          self.$router.push({
            path: '/'
          })
        }).catch(() => {
      
      
        })
      }
    },
    created() {
      this.$parent.isShow = true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.user{
		color: deepskyblue;
		text-decoration: none;
	}
  .ListWarp {
    display: flex;
    width: 100%;
  }

  .el-col {
    position: relative;
    top: 115px;
    width: 15%;
    height: 500px;
  }

  .el-menu-vertical-demo {
    height: 1000px;
  }

  .table {
    width: 100%;
    position: fixed;
    top: 20px;
    padding-left: 30px;
    background: #2a3e54;
    height: 80px;
  }

  .loginOut{
    position: fixed;
    width: 10%;
    height: 50px;
    line-height: 50px;
    display: block;
    top: 3.5%;
    right: 5%;
    color: #fff;
  }

  .el-input {
    width: 40%;
    margin-right: 20px;
  }

  .btn {
    display: flex;
    height: 50px;
    margin-top: 20px;
  }

  h2 {
    text-align: left;
    color: #fff;
    line-height: 50px;
  }

  .main {
    width: 100%;
  }
</style>
