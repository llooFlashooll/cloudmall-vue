<template>

  <div class="stockcost_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card>
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            选择要查询的日期：
          </el-row>
          <br>
          <el-row>
            <el-date-picker v-model="date" type="year" placeholder="选择日期" value-format="yyyy">
            </el-date-picker>
          </el-row>
          <br>
          <el-row>
            输入要查询的店铺id：
          </el-row>
          <el-row>
            <el-input placeholder="请输入店铺id" prefix-icon="el-icon-search" v-model="value">
            </el-input>
          </el-row>
          <br>
            <el-button icon="el-icon-search" circle type="info" @click="search"></el-button>
        </el-card>
      </el-col>

      <el-col :span="18" :xs="24">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                prop="salerId"
                label="店铺Id">
            </el-table-column>
            <el-table-column
                prop="year"
                label="年份">
            </el-table-column>
            <el-table-column
                prop="count"
                label="进货成本">
            </el-table-column>
            </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
//第一次：20s 3min20s
export default {
  data(){
    return{
        date: '',
        value:'',
        tableData: [],
        resData: []
    }
  },
  created() {
  },
  methods:{
    search(){
      this.tableData=[]
      if(this.value.length <= 0) {
        alert("请输入正确的查询条件");
      }

      if(this.value.length > 0){
        this.$axios.get("/getCost?salerId=" + this.value)
        .then(res=>{
          console.log(res.data);
          this.resData = res.data;

          // 新建对象数组，转换key值，注意js传值为对象传值
          for(var i=0; i< this.resData.length; i++) {
            var temp = {};
            temp.salerId = this.value;
            temp.year = "2019";
            temp.count = this.resData[i]["_c0"];

            this.tableData.push(temp);

          }
          console.log("tableData是：");
          console.log(this.tableData);

        })
        .catch(err=>{
        console.log(err);
        })
      }
    }
  }
}
</script>

<style scoped>

.stockcost_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>