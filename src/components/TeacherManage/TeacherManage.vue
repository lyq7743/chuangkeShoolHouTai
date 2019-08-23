<template>
	<div>
		<!--<p>教师管理</p>-->
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
			<el-table-column prop="date" label="ID" width="170">
			</el-table-column>
			<el-table-column prop="name" label="教师名称" width="170">
			</el-table-column>
			<el-table-column prop="number" label="教师科目分类" width="170">
			</el-table-column>
			<el-table-column prop="address" label="年限">
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
					<el-button type="danger" icon="el-icon-delete" circle @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
				</template>
			</el-table-column>

		</el-table>

		<el-pagination background layout="prev, pager, next" :total="allSize" @current-change="handleCurrentChange">
		</el-pagination>
		<!--表格结束-->
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		methods: {
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
					name: '赖宇强',
					number: 'WEB前端工程师',
					address: '2年',
				}, {
					date: '2',
					name: '李寒英',
					number: '全栈工程师',
					address: '5年'
				}, {
					date: '3',
					name: '李康平',
					number: 'Java工程师',
					address: '5年',
				}, {
					date: '4',
					name: '陈荣强',
					number: '大数据',
					address: '5年'
				}],
				input1: '',
				restaurants: [],
				state: '',
				timeout: null,
				allSize:10
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*表格样式开始*/
	
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
		margin-top: 120px;
	}
	
	.el-table {
		position: relative;
		left: 50px;
	}
	
	.el-button {
		margin-left: 30px;
	}
	
	.el-pagination {
		position: relative;
		left: 200px;
	}
</style>