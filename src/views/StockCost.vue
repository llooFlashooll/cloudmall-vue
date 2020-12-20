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
                prop="sellerId"
                label="店铺Id">
            </el-table-column>
            <el-table-column
                prop="year"
                label="年份">
            </el-table-column>
            <el-table-column
                prop="cost"
                label="进货成本">
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
        date: '',
        value:'',
        tableData: []
    }
  },
  created() {
  },
  methods:{
    search(){
        if(this.date.length>0&&this.value.length>0){
        this.tableData.push({sellerId:this.value,year:this.date,cost:1});
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