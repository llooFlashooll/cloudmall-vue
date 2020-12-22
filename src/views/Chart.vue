<template>

  <div class="user_container">

    <el-row :gutter="20">

     <div class="Echarts">
            <div class="charts" id="table1" style="width: 600px;height:400px;"></div>
            <div class="charts" id="table2" style="width: 600px;height:400px;"></div>
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
		var option1 = {
			title:{
			text:'成交额查询效率'
			},
			tooltip:{},
			legend:{
			data:['查询速率']
			},
			xAxis:{
			data:["1w数据量","25w数据量"]
			},
			yAxis:{},
			series:[{
			name:'查询速率',
			type:'bar',
			data:[5, 20]
			}]
		};
		var option2={
			title:{
			text:'商品评论查询效率'
			},
			tooltip:{},
			legend:{
				data:['查询速率']
			},
			xAxis:{
				data:["1w数据量","25w数据量"]
			},
			yAxis:{},
			series:[{
				name:'查询速率',
				type:'bar',
				data:[5, 20]
				}]
			};
		myChart1.setOption(option1);
		myChart2.setOption(option2);
		}
	},
  mounted(){
      this.myEcharts();
  }
}
</script>

<style scoped>

.user_card {
  margin-top: 10px;
  margin-left: 10px;
}

.profile_card {
  margin-top: 10px;
  margin-right: 10px;
}

.Echarts{
  width:100%;
  margin-top:10px;
}

.charts{
  margin: 0 auto;
}

</style>