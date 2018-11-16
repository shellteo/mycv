<template>
  <div class="sideBar">
    <div>
      <i class="el-icon-menu"></i>
    </div>
    <div>
      <i class="el-icon-setting"></i>
    </div>
    <div>
      <i class="el-icon-time"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .sideBar {
    color: #fff;
  }
  .sideBar div {
    height: 40px;
    text-align: center;
    font-size: 1.4rem;
    line-height: 40px;
  }
</style>
