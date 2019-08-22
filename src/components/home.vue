<template>
	<div class="ListWarp">

		<el-col :span="12">
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
			 text-color="#fff" active-text-color="#ffd04b">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航一</span>
					</template>
					<el-submenu index="1-1">
						<template slot="title">选项1</template>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-location"></i>
					<span>导航二</span>
				</el-menu-item>
				<el-menu-item index="3">
					<i class="el-icon-location"></i>
					<span>导航三</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="el-icon-location"></i>
					<span>导航四</span>
				</el-menu-item>
				<el-submenu index="5">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航五</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="5-1">选项1</el-menu-item>
					</el-menu-item-group>

					<el-submenu index="5-2">
						<template slot="title">选项2</template>
					</el-submenu>
				</el-submenu>
				<el-submenu index="6">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航六</span>
					</template>
					<el-submenu index="6-1">
						<template slot="title">选项4</template>
						<el-menu-item index="6-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-submenu index="7">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>导航七</span>
					</template>

					<el-submenu index="7-4">
						<template slot="title">选项4</template>
						<el-menu-item index="7-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-menu>
		</el-col>

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

	export default {
		data() {
			return {
				
			}
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
			handleCurrentChange: function(currPage) {
				this.currPage = currPage;
				console.log(this.currPage) //点击第几页
				this.doSearch();
			},
			doSearch() {
				this.axios.post('/api/admin/selectByUser', {
						page: this.currPage,
						pagesize: 10,
						userName: ""
					})
					.then(res => {
						this.tableData = res.data.data;
						console.log(res);
						this.allSize = res.data.allcount
					})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.ListWarp {
		display: flex;
		width: 100%;
	}
    .el-col {
		width: 15%;
		height: 1000px;
	}

	.el-menu-vertical-demo {
		height: 1000px;
	}

	.table {
		width: 82%;
		position: relative;
		margin-left: 20px;
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
		color: #8fd8d0;
	}
</style>
