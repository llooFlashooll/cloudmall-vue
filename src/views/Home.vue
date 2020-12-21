<template>
    <el-container class="home-container">


        <!-- 侧边栏 -->
        <Sidebar/>

        <el-main>
          <!-- 导航栏 -->
          <Navbar/>

          <div v-show="routeName == '首页'" class="home_container">
          </div>    

          <div class="Echarts">
            <div class="charts" id="table1" style="width: 600px;height:400px;"></div>
            <div class="charts" id="table2" style="width: 600px;height:400px;"></div>
          </div>

        </el-main>

    </el-container>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  computed:{
    routeName(){
        const route = this.$route
        const { meta} = route
        return meta.name
    }
  },
  components:{
    Sidebar,
    Navbar
  },
  data(){
    return{
      // 左侧菜单
      menuList:[],
      
    }
  },

  methods:{
    logout:function(){
      sessionStorage.setItem("isLogin", false);
      sessionStorage.removeItem("userid" );
      //
      location="/login"
    },
    myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart1=this.$echarts.init(document.getElementById('table1'));
      var myChart2=this.$echarts.init(document.getElementById('table2'));

		  // 指定图表的配置项和数据
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

		  // 使用刚指定的配置项和数据显示图表。
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

.home-container{
  height: 100%;
}

.el-main {
  padding: 0;
}

.el-header{
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-aside{

}

.el-main{
  /* background-color: azure; */
}

.Echarts{
  width:100%;
  margin-top:10px;
}

.charts{
  margin: 0 auto;
}

</style>
