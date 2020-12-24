<template>

  <div class="stockrecord_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card>
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            输入要查询的店铺id：
          </el-row>
          <br>
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
                prop="batchId"
                label="进货商品id">
            </el-table-column>
            <el-table-column
                prop="productId"
                label="进货商品名称">
            </el-table-column>
            <el-table-column
                prop="inNum"
                label="进货商品数量">
            </el-table-column>
            <el-table-column
                prop="importDate"
                label="进货时间">
            </el-table-column>
            <el-table-column
                prop="price"
                label="进货价格">
            </el-table-column>
            <el-table-column
                prop="providerId"
                label="供应商id">
            </el-table-column>
            </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
//无mapreduce
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

        if(this.value.length > 0){
          console.log(this.value);
          this.$axios.get("/getImport?salerId=" + this.value)
          .then(res=>{
            this.resData = res.data;

            console.log("resData为：");
            console.log(this.resData[0]);

            // 新建对象数组，转换key值，注意js传值为对象传值
            for(var i=0; i< this.resData.length; i++) {
              var temp = {};
              temp.batchId = this.resData[i]["imports.batch_id"];
              temp.productId = this.resData[i]["imports.product_id"];
              temp.salerId = this.resData[i]["imports.saler_id"];
              temp.inNum = this.resData[i]["imports.in_num"];
              temp.importDate = this.resData[i]["imports.import_date"];
              temp.price = parseFloat(this.resData[i]["imports.price"]).toFixed(2);
              temp.providerId = this.resData[i]["imports.provider_id"];

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

.stockrecord_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>