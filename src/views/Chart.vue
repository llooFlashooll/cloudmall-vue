<template>

  <div class="user_container">

    <el-row :gutter="20">

	<div class="Echarts">
		<div class="charts" id="table1" style="width: 600px;height:400px;"></div>
		<div class="charts" id="table2" style="width: 600px;height:400px;"></div>
	</div>
	<div class="Echarts">
		<div class="charts" id="table3" style="width: 600px;height:400px;"></div>
		<div class="charts" id="table4" style="width: 600px;height:400px;"></div>
	</div>

    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
        value: '',
        tableData: []
    }
  },
  created() {
  },
  methods:{
    myEcharts(){
		var myChart1=this.$echarts.init(document.getElementById('table1'));
		var myChart2=this.$echarts.init(document.getElementById('table2'));
		var myChart3=this.$echarts.init(document.getElementById('table3'));
		var myChart4=this.$echarts.init(document.getElementById('table4'));
		var option1 = {
			title:{
			text:'成交额查询效率(单位:秒)',
			textStyle:{
				fontSize:14
			}
			},
			tooltip:{show:true},
			legend:{
				data:['mapreduce CPU time','查询执行时间']
			},
			xAxis:{
				data:["25w级数据量","500w级数据量"]
			},
			yAxis:{},
			series:[
				{
					name:'mapreduce CPU time',
					type:'bar',
					data:[72,26],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				},
				{
					name:'查询执行时间',
					type:'bar',
					data:[360, 200],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				}
				]
			};
		var option2 = {
			title:{
			text:'进货次数查询效率(单位:秒)',
			textStyle:{
				fontSize:13
			}
			},
			tooltip:{show:true},
			legend:{
				data:['mapreduce CPU time','查询执行时间']
			},
			xAxis:{
				data:["25w级数据量","500w级数据量"]
			},
			yAxis:{},
			series:[
				{
					name:'mapreduce CPU time',
					type:'bar',
					data:[64,13],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				},
				{
					name:'查询执行时间',
					type:'bar',
					data:[990, 330],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				}
				]
			};
			var option3= {
			title:{
			text:'进货成本查询效率(单位:秒)',
			textStyle:{
				fontSize:13
			}
			},
			tooltip:{show:true},
			legend:{
				data:['mapreduce CPU time','查询执行时间']
			},
			xAxis:{
				data:["25w级数据量","500w级数据量"]
			},
			yAxis:{},
			series:[
				{
					name:'mapreduce CPU time',
					type:'bar',
					data:[20,9],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				},
				{
					name:'查询执行时间',
					type:'bar',
					data:[200, 105],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				}
				]
			};
			var option4 = {
			title:{
			text:'供应商数量查询效率(单位:秒)',
			textStyle:{
				fontSize:12
			}
			},
			tooltip:{show:true},
			label:{
				normal:{
					show:true
				}
			},
			legend:{
				data:['mapreduce CPU time','查询执行时间']
			},
			xAxis:{
				data:["25w级数据量","500w级数据量"]
			},
			yAxis:{},
			series:[
				{
					name:'mapreduce CPU time',
					type:'bar',
					data:[210,28],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				},
				{
					name:'查询执行时间',
					type:'bar',
					data:[611, 750],
					label:{
						normal:{
							show:true,
							position:'top'
						}
					}
				}
				]
			};
		myChart1.setOption(option1);
		myChart2.setOption(option2);
		myChart3.setOption(option3);
		myChart4.setOption(option4);
		}
	},
  mounted(){
      this.myEcharts();
  }
}
</script>

<style scoped>

.Echarts{
  width:100%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
}


</style>