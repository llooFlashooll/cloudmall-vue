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
                prop="country"
                label="国家名称">
            </el-table-column>
            <el-table-column
                prop="supplier_count"
                label="供应商数量">
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
        value: '',
        tableData: []
    }
  },
  created() {
  },
  methods:{
      search(){
          if(this.value.length>0){
          console.log(this.value);
          this.$axios.get()
          .then(res=>{
            console.log(res.data);
            if(res.data.icon!=null){
              //this.tableData.push({country:this.value,supplier_count:1});
            }
            else{
              this.tableData.push({country:this.value,supplier_count:0});
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

.user_card {
  margin-top: 10px;
  margin-left: 10px;
}

.profile_card {
  margin-top: 10px;
  margin-right: 10px;
}
</style>