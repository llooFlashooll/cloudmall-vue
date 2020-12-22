<template>

  <div class="comment_container">

    <el-row :gutter="20">

      <el-col :span="6" :xs="24">
        <el-card>
          <div>
            <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          </div>
          <br>
          <el-row>
            输入要查询的商品id：
          </el-row>
          <br>
          <el-row>
            <el-input placeholder="请输入商品id" prefix-icon="el-icon-search" v-model="value">
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
                label=""
                width="50">
            </el-table-column>
            <el-table-column
                prop="comment"
                label="商品评论">
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
          this.tableData=[];
          this.$axios.get()
        .then(res=>{
            console.log(res.data);
            if(res.data.icon!=null){
              for(var i=0;i<res.data.length;i++){
                this.tableData.push({id:i+1,comment:"hello world"});
              }
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

.comment_container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>