<template>
	<div>
		<!--<p>班级管理</p>-->
		<div class="inputin">
			<el-input placeholder="请输入内容" v-model="input1">
				<i slot="suffix" class="el-input__icon el-icon-date"></i>
			</el-input>

			<el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-autocomplete>
		</div>

		<!--表格开始-->
		<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
			<el-table-column prop="date" label="ID" width="130">
			</el-table-column>
			<el-table-column prop="name" label="班级名称" width="230">
			</el-table-column>
			<el-table-column prop="number" label="班主任" width="170">
			</el-table-column>
			<el-table-column prop="address" label="人数">
			</el-table-column>
			<!--操作-->
			<el-table-column label="操作">
				<template slot-scope="scope">
					<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">添加</el-button>-->
					<!--按钮-->
					<el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
					<el-button type="success" icon="el-icon-check" circle></el-button>
					<el-button type="danger" icon="el-icon-delete" circle  @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
				</template>
			</el-table-column>

		</el-table>

		<el-pagination background layout="prev, pager, next" :total="allSize" @current-change="handleCurrentChange">
		</el-pagination>
		<!--表格结束-->
		<div class="addUser" v-show="status">
			<h2>修改用户</h2>
			<p class="row">
				<p class="row1">班级名称：</p>
				<p>
					<el-input v-model="user" placeholder="请输入内容"></el-input>
				</p>
			</p>
			<p class="row">
				<p class="row1">班主任：</p>
				<p>
					<el-input v-model="pass" placeholder="请输入内容" ></el-input>
				</p>
			</p>
			<p class="row">
				<p class="row1">人数：</p>
				<p>
					<el-input v-model="pass1" placeholder="请输入内容"></el-input>
				</p>
			</p>
			<p class="row">
				<p>
					<el-button type="success" @click="addUser">添加</el-button>
					<el-button type="info" @click="hidden">取消</el-button>
				</p>
			</p>
		</div>
	</div>
</template>
  
<script>
	export default {
		name: 'HelloWorld',
		methods: {
			addUser() {
				if (this.user != "" && this.pass != "") {
					this.tableData.push({
						date: this.tableData.length + 1,
						name: this.user,
						number: this.pass,
						address: this.pass1+'人',
					})
					this.status = false
				} else {
					this.$message({
						message: '请输入正确的用户名和密码',
						center: true,
						type: 'warning',
						duration:2000
					});
				}
			
			},
			hidden() {
				this.status = false
			},
			handleEdit() {
				// this.status == false?this.status=true:this.status=false,
				this.status = true
				console.log(this.status)
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				console.log('1111')
				if(rowIndex === 1) {
					return 'warning-row';
				} else if(rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},
			loadAll() {
				return [{
					"value": '程老师',
					"address": 'WEB前端班'
				}, {
					"value": '李老师',
					"address": 'UI编程入门班'
				}, {
					"value": '王小虎3',
					"address": 'Android第三方框架'
				}, {
					"value": '赖老师',
					"address": 'Linux工程师特训班'
				}];
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					cb(results);
				}, 3000 * Math.random());
			},
			createStateFilter(queryString) {
				return(state) => {
					return(state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
				console.log(item);
			},
			handleCurrentChange(){
				
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		},
		data() {
			return {
				tableData: [{
					date: '1',
					name: 'java班',
					number:'程老师',
					address: '30人',
				}, {
					date: '2',
					name: 'WEB前端班',
					number:'李老师',
					address: '30人'
				}, {
					date: '3',
					name: '大数据班',
					number:'陈老师',
					address: '45人',
				}, {
					date: '4',
					name: '人工智能班',
					number:'李老师',
					address: '25人'
				},{
					date: '5',
					name: 'Linux工程师特训班',
					number:'赖老师',
					address: '30人'
				},{
					date: '6',
					name: 'UI编程入门班',
					number:'李老师',
					address: '20人'
				},{
					date: '7',
					name: 'Android第三方框架',
					number:'王老师',
					address: '20人'
				}],
				input1: '',
				restaurants: [],
				state: '',
				timeout: null,
				allSize:10,
				status:false,
				user: '',
				pass: '',
				pass1: '',
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*表格样式开始*/
	.addUser {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 50;
		width: 500px;
		height: 300px;
		background: #ccc;
		border-radius: 15px;
	}
	
	.addUser h2 {
		padding-top: 5px;
	}
	
	.row1 {
		margin: 0;
		height: 40px;
		line-height: 40px;
		width: 150px;
		float: left;
		text-align: right;
	}
	
	.el-table .warning-row {
		background-color: oldlace;
	}
	
	.el-table .success-row {
		/*background: #f0f9eb;*/
		background-color: #00FFFF;
	}
	/*表格样式结束*/
	
	.el-input {
		width: 200px;
		margin-right: 50px;
	}
	
	.inputin {
		position: relative;
		left: 330px;
		margin-top:120px;
	}
	.el-table{
		position: relative;
		left: 50px;
	}
	.el-button{
		margin-left: 30px;
	}
	.el-pagination{
		position: relative;
		left: 200px;
	}
</style>
