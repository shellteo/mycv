<template>
  <div class="elContainer">
    <div class="header">
      <div><img class="avatar" src="../assets/avatar.jpg" alt=""></div>
      <div>张翔</div>
      <div><a href="https://shellteo.top">blog：shellteo.top</a></div>
      <div><span>上海</span><span class="phone">18621593612</span><span class="email">shellteo@163.com</span></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .elContainer {
    height: 100%;
    background-color: #5E5E5E;
    color: #ffffff;
  }
  .header {
    background-color: #BEBEBE;
  }
  .avatar {
    width: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .phone:before, .email:before {
    content: '\2022';
    color: rgba(255, 255, 255, 0.75);
    font-size: 150%;
    line-height: 0.5em;
    vertical-align: middle;
    margin: 0px 0.25em;
  }
</style>
