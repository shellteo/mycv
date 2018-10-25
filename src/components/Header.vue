<template>
  <div class="container" style="background-color: #545c64;">
    <img src="../assets/logo.png" alt="11" class="logo">
    <div class="menuDiv">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">编辑</el-menu-item>
        <el-menu-item index="3">预览</el-menu-item>
      </el-menu>
    </div>
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .menuDiv {
    text-align: center;
  }
  .logo {
    width: 26px;
  }
</style>
