<template>
  <div class="hello">
    	<div class="main">
    		<div class="rmkc">
    			<!--<div>热门课程</div>-->
    			<div id="myChart" ></div>
    			<div></div>
    		</div>
    	</div>
  </div>
</template>

<script>
const echarts = require('echarts');
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
						legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                ['嵌入式', 20, 30, 65, 53, 83, 98],
                ['物联网', 30, 91, 85, 83, 73, 55],
                ['web全栈', 30, 67, 79, 86, 65, 82],
                ['java', 30, 67, 69, 72, 53, 39],
                ['C/C++', 25, 67, 69, 72, 53, 39]
            ],
            source: [
                ['product', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                ['嵌入式', 20, 30, 65, 53, 83, 98],
                ['物联网', 30, 91, 85, 83, 73, 55],
                ['web全栈', 30, 67, 79, 86, 65, 82],
                ['java', 30, 67, 69, 72, 53, 39],
                ['C/C++', 25, 67, 69, 72, 53, 39]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '30%'],
            }
        ]
			})
			myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

		}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart{
	position: absolute;
	width: 80%;
	height: 800px;
}
.main{
	margin-top: 150px;
}
</style>
