<template>

  <div class="storage_container">

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
                prop="id"
                label="商品id">
            </el-table-column>
            <el-table-column
                prop="num"
                label="商品数量">
            </el-table-column>
            <el-table-column
                prop="price"
                label="商品售价">
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
          this.$axios.get("/getStock?salerId=" + this.value)
          .then(res=>{
            console.log(res.data);
            if(res.data.length>0){
              for(var i=0;i<res.data.length;i++){
                this.tableData.push({
                  id: res.data[i]["stock.product_id"],
                  num: res.data[i]["stock.in_num"],
                  price: res.data[i]["stock.price"]
                });
              }
            }
            else{
              this.tableData=[]
            }
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

.storage_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>