<template>

  <div class="user_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card class="user_card">
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
                prop="sellerId"d
                label="店铺Id">
            </el-table-column>
            <el-table-column
                prop="supplierId"
                label="进货商Id">
            </el-table-column>
            <el-table-column
                prop="times"
                label="进货次数">
            </el-table-column>
            </el-table>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
        value_supplier: '',
        value_seller:'',
        tableData: []
    }
  },
  created() {
  },
  methods:{
    search(){
        if(this.value_supplier.length>0&&this.value_seller.length>0){
        this.tableData.push({
            sellerId:this.value_seller,
            supplierId:this.value_supplier,
            times:1}
            );
        }
    }
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
</style>