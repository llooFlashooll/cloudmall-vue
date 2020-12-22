<template>

  <el-aside class="sidebar">

    <el-menu router :default-active="activeIndex" :collapse="this.$store.state.sideBarCollapse">
      <img src="../assets/tongji_logo.png" class="avatar"/>

      <el-menu-item index="/chart">
        <i class="el-icon-menu"></i>
        <a slot="title">首页</a>
      </el-menu-item>

      <el-menu-item index="/trade">
        <i class="el-icon-s-goods"></i>
        <a slot="title">成交额</a>
      </el-menu-item>

      <el-submenu index="/" class="submenu">
        <template slot="title">
            <i class="el-icon-shopping-cart-full"></i>
            <a slot="title">进货查询</a>
        </template>
        <el-menu-item index="/stockRecord">
            <i class="el-icon-shopping-cart-full"></i>
            <a slot="title">进货记录</a>
        </el-menu-item>
        <el-menu-item index="/stockCost">
            <i class="el-icon-shopping-cart-full"></i>
            <a slot="title">进货成本</a>
        </el-menu-item>
        <el-menu-item index="/stockCount">
            <i class="el-icon-shopping-cart-full"></i>
            <a slot="title">进货输目</a>
        </el-menu-item>
        <el-menu-item index="/supplier">
            <i class="el-icon-shopping-cart-full"></i>
            <a slot="title">供应商</a>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/storage">
        <i class="el-icon-s-order"></i>
        <a slot="title">库存</a>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-tickets"></i>
        <a slot="title">商品评论</a>
      </el-menu-item>

    </el-menu>
  </el-aside>

</template>

<script>
export default {
  name: 'Sidebar',
  computed:{
  },
  data () {
    return {
      // 初始化选中tab格
      activeIndex: "/"
    }
  },
  methods:{
  }
}
</script>

<!-- 导入sidebar css -->
<style scoped src="../assets/css/sidebar.css"></style>

<style>
    .el-submenu__title {
        color: rgb(191, 203, 217);
    }
</style>