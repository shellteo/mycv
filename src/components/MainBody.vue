<template>
  <div class="container">
    <div class="cv-content cv-editor">
      <section class="head-bar">
        <div class="head-profile">
          <div class="edit-btn">
            <a href="" class="edit-btn__item">
              <i class="el-icon-edit"></i>
            </a>
          </div>
          <img class="user-thumb" src="../assets/avatar.jpg" alt="">
          <div class="user-title">
            <h1 class="full-name">
              <span contenteditable="true" data-placeholder="全名">张翔</span>
            </h1>
            <h2 class="title">
              <span>前端工程师</span>
            </h2>
          </div>
      </div>
      </section>
      <div class="flex-columns">
        <div class="sidebar">
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="map-marker-alt" />上海</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="phone" :rotation="90"/>18621593612</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="envelope" />shellteo@163.com</span></div>
          <div class="sidebar-item"><a href="https://shellteo.top"><font-awesome-icon class="myIcon" icon="globe" />shellteo.top</a></div>
        </div>
        <div class="main-body">
          <section class="dated_story">
            <header class="story-header">
              <h3 class="header-text">
                <span>工作经验</span>
              </h3>
            </header>
            <article>
              <el-row>
                <el-col :span="6">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2017</span>
                      <span class="end-date">
                    <span>至今</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="article-body">
                    <h4><span>前端研发</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>途虎养车</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>负责公司供应商、审批小程序端和工单和审批项目的Web端研发工作</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
            <article>
              <el-row>
                <el-col :span="6">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2017</span>
                      <span class="end-date">
                    <span>至今</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="18">
                  <div class="article-body">
                    <h4><span>前端研发</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>途虎养车</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>负责公司供应商、审批小程序端和工单和审批项目的Web端研发工作</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBody',
  data () {
    return {
      fullName: '张翔'
    }
  }
}
</script>

<style lang="scss" scoped>
  .cv-editor [contenteditable=true]:hover {
    outline: 1px dashed #269ad1;
  }
  .cv-editor span[contenteditable=true] {
    display: inline-block;
    min-width: 1em;
    cursor: text;
  }
  .cv-editor [contenteditable=true], .cv-editor [data-edit-form] {
    cursor: text;
  }
  .edit-btn {
    display: none;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: -43px;
    width: 43px;
    height: auto;
    line-height: 18px;
    font-size: 20px;
    text-decoration: none;
  }
  .edit-btn__item {
    background-color: #d7e9f9;
    margin-bottom: 1px;
    margin-right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
  }
  .cv-editor .head-profile:hover .edit-btn {
    display: block;
  }
  .cv-editor [contenteditable] {
    outline-color: transparent;
    outline-style: none;
  }
  .cv-editor [contenteditable]:empty:after {
    content: attr(data-placeholder) " …";
    opacity: 0.65;
    display: inline-block;
  }
  .container {
    margin-bottom: 100px;
    height: 100%;
    width: 100%;
    padding: 5vw 15vh;
    box-sizing: border-box;
  }
  .cv-content {
    background-color: #ffffff;
    padding: 40px;
  }
  .head-bar {
    border-bottom: 1px solid #cccccc;
    margin-bottom: 1.5em !important;
  }
  .head-bar:hover {
    outline: 1px dashed #269ad1;
    position: relative;
  }
  .head-profile:hover {
    background-color: rgba(62,148,228,0.2);
  }
  .head-profile {
    margin-bottom: 1.85em;
    position: relative;
  }
  .user-thumb {
    max-width: 100px;
    float: left;
    margin-right: 1em;
  }
  .user-title {
    box-sizing: border-box;
  }
  h1 {
    margin-top: 0;
    font-weight: 400;
    color: #333333;
    font-size: 290%;
    margin-bottom: 0.1em;
    box-sizing: border-box;
  }
  h2 {
    margin-top: 0;
    font-size: 165%;
    font-weight: 500;
    color: #777777;
  }
  h3 {
    font-size: 150%;
    font-weight: 600;
    color: #333333;
    margin-top: 0px;
    margin-bottom: 0.25em;
  }
  h4 {
    font-weight: 600;
    font-size: 120%;
    margin-top: 0px;
    margin-bottom: 0.25em;
  }
  h5 {
    font-weight: 300;
    line-height: 1.5em;
    margin-top: 0px;
    margin-bottom: 0.25em;
    font-size: 110%;
  }
  h6 {
    font-size: 95%;
    margin-top: 0px;
    margin-bottom: 0.25em;
  }
  .sidebar {
    border-right: 1px solid #cccccc;
    color: #333333;
    font-size: 14px;
    width: 30%;
    display: table-cell;
    padding-left: 0px;
    padding-right: 1.5em;
  }
  .myIcon {
    opacity: 0.25;
    font-size: 100%;
    margin-right: 0.25em;
    display: inline-block;
    text-align: center;
    width: 1.35em;
    vertical-align: middle;
  }
  .sidebar-item {
    margin-bottom: 1.23333333em;
  }
  .story-header {
    margin-bottom: 1em;
  }
  .story-header:after {
    content: '';
    display: block;
    border-bottom: 2px solid black;
    width: 3em;
  }
  .date-range {
    font-weight: normal;
    line-height: 1.5em;
  }
  .start-date {
  }
  .end-date:before {
    content: ' - ';
  }
  .flex-columns {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .main-body {
    display: table-cell;
    background: white;
    width: 70%;
    padding-left: 1.5em;
  }
</style>
