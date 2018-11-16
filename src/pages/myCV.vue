<template>
  <el-container style="height: 100%;">
    <!--<el-header style="background-color: #545c64;padding: 0 12px;">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="50px" style="background-color: #545c64;">
        <Aside></Aside>
      </el-aside>
      <el-main style="background-color: #f6f6f6;">-->
        <MainBody></MainBody>
      <!--</el-main>
    </el-container>-->
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import MainBody from '@/components/MainBody'
export default {
  name: 'HelloWorld',
  components: {
    Header,
    Aside,
    MainBody
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
