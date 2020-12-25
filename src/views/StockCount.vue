<template>

  <div class="stockcount_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card>
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            输入要查询的进货商id：
          </el-row>
          <el-row>
            <el-input placeholder="请输入进货商id" prefix-icon="el-icon-search" v-model="value_supplier">
            </el-input>
          </el-row>
          <br>
          <el-row>
            输入要查询的店铺id：
          </el-row>
          <el-row>
            <el-input placeholder="请输入店铺id" prefix-icon="el-icon-search" v-model="value_seller">
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
                prop="providerId"
                label="进货商Id">
            </el-table-column>
            <el-table-column
                prop="count"
                label="进货次数">
            </el-table-column>
            </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//第一轮：1min4s 16min30s 第二轮：13s 5min30s
export default {
  data(){
    return{
        value_supplier: '',
        value_seller:'',
        tableData: [],
        resData: []
    }
  },
  created() {
  },
  methods:{
    search(){
      this.tableData=[]
      if(this.value_supplier.length<=0) {
        alert("进货商id不能为空");
      }
      if(this.value_seller.length<=0) {
        alert("店铺id不能为空");
      }

      if(this.value_supplier.length>0 && this.value_seller.length>0){
        this.$axios.get("/getImportNum", {
          params: { salerId: this.value_seller,
          providerId: this.value_supplier
          }})
        .then(res=>{
          console.log(res.data);
          // if(res.data.icon!=null){
          //   this.tableData.push({sellerId:this.value_seller,supplierId:this.value_supplier,times:0});
          // }
          // else{

          // }
          
          // 应当有检测是否获取成功，再push
          this.resData = res.data;

          // 新建对象数组，转换key值，注意js传值为对象传值
          for(var i=0; i< this.resData.length; i++) {
            var temp = {};
            temp.salerId = this.value_seller;
            temp.providerId = this.value_supplier;
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

.stockcount_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>