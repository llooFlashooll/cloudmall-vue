<template>

  <div class="trade_container">

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
            <el-date-picker v-model="date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-row>
            <br>
            <el-button icon="el-icon-search" circle type="info" @click="chooseDate"></el-button>
        </el-card>
      </el-col>

      <el-col :span="18" :xs="24">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="count"
                label="成交额度">
            </el-table-column>
            </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
//第一次：1min2s 6min  第二次：26s 3min20s
export default {
  data(){
    return{
        date: '',
        tableData: [],
        resData: []
    }
  },
  created() {
  },
  methods:{
    chooseDate(){
        if(this.date.length>0){
        var dateArray=this.date.split("-");
        console.log(dateArray[0]+"/"+dateArray[1]+"/"+dateArray[2])
        this.$axios.get("/getBillCount?date="+dateArray[0]+"/"+dateArray[1]+"/"+dateArray[2])
        .then(res=>{
            console.log(res.data);
            this.resData = res.data;

            // if(res.data.icon!=null){
            // this.tableData.push({date:this.date,count:res.data.icon});
            // }
            // else{
            //   this.tableData.push({date:this.date,count:0});
            // }

            // 新建对象数组，转换key值，注意js传值为对象传值
            for(var i=0; i< this.resData.length; i++) {
              var temp = {};
              temp.date = this.date;
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

.trade_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>