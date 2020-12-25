<template>

  <div class="supplier_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card>
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            输入要查询的国家名称：
          </el-row>
          <br>
          <el-row>
            <el-input placeholder="请输入国家名称" prefix-icon="el-icon-search" v-model="value">
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
                prop="providerCountry"
                label="国家名称">
            </el-table-column>
            <el-table-column
                prop="count"
                label="供应商数量">
            </el-table-column>
            </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
//第一次：2min30s 10min11s  第二次：28s 1230s
export default {
  data(){
    return{
        value: '',
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

        if(this.value.length > 0) {
        console.log(this.value);
        this.$axios.get("/getCountryNum?providerCountry=" + this.value)
        .then(res=>{
          console.log(res.data);
          this.resData = res.data;

          // 新建对象数组，转换key值，注意js传值为对象传值
          for(var i=0; i< this.resData.length; i++) {
            var temp = {};
            temp.providerCountry = this.value;
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

.supplier_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>