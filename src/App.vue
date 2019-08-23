<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--<router-view/>-->
    	<Home>
    		
    	</Home>
    	<div class="table">
					<h2>创客学院后台管理系统</h2>
		
					<!-- <div class="btn">
						<el-input placeholder="手机号" v-model="userName" clearable>
							<template slot="prepend">搜索条件</template>
						</el-input>
					</div>
		
					<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="50">
						</el-table-column>
						
					</el-table> -->
		
					<!-- asdasdv:{{allSize}} -->
					<!-- <el-pagination background layout="prev, pager, next" :total="allSize" @current-change="handleCurrentChange">
					</el-pagination> -->
		
		</div>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
   components:{
	  Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.table{
	width: 100%;
	height: 200px;
}
</style>
