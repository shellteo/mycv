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
              <span>前端研发工程师</span>
            </h2>
          </div>
      </div>
        <div class="sidebar">
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="map-marker-alt" />上海</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="phone" :rotation="90"/>18621593612</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="envelope" />shellteo@163.com</span></div>
          <div class="sidebar-item"><a href="https://shellteo.top"><font-awesome-icon class="myIcon" icon="globe" />shellteo.top</a></div>
        </div>
      </section>
      <div class="flex-columns">
        <!--<div class="sidebar">
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="map-marker-alt" />上海</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="phone" :rotation="90"/>18621593612</span></div>
          <div class="sidebar-item"><span><font-awesome-icon class="myIcon" icon="envelope" />shellteo@163.com</span></div>
          <div class="sidebar-item"><a href="https://shellteo.top"><font-awesome-icon class="myIcon" icon="globe" />shellteo.top</a></div>
        </div>
        <div class="main-body">-->
          <section class="dated_story">
            <header class="story-header">
              <h3 class="header-text">
                <span>工作经验</span>
              </h3>
            </header>
            <article>
              <el-row>
                <el-col :span="leftSpan">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2017</span>
                      <span class="end-date">
                    <span>至今</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="rightSpan">
                  <div class="article-body">
                    <h4><span>途虎养车</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>前端研发</span></h5>
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
                <el-col :span="leftSpan">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2015</span>
                      <span class="end-date">
                    <span>2016</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="rightSpan">
                  <div class="article-body">
                    <h4><span>龙猫科技有限公司</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>前端&Node.js开发</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>和同学的创业项目：HTML5网站可视化开发和部署平台
                          <br>负责前端在线IDE页面、小程序UI设计器页面的开发，参与了后台api的开发，比如应用管理、用户信息、以及应用的控制台</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
            <article>
              <el-row>
                <el-col :span="leftSpan">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2015</span>
                      <span class="end-date">
                    <span>2016</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="rightSpan">
                  <div class="article-body">
                    <h4><span>江西博世金电支付服务有限公司</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>前端&java开发</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>中国人民银行-江西省集中代收付系统为集中代收付中心提供了内容更多，功能更强的业务支撑，为了提高系统并发性，包括代付结果查询和实时代收付。

<br>负责集中代收付系统后台管理系统的开发，后台管理系统主要是给内部人员使用的，主要是可以管理小额支付和大额支付以及人员信息，使用Ajax进行前后端数据交互。</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
            <article>
              <el-row>
                <el-col :span="leftSpan">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2014</span>
                      <span class="end-date">
                    <span>2015</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="rightSpan">
                  <div class="article-body">
                    <h4><span>南昌大学首页移动端开发</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>前端研发</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>南昌大学首页移动端开发，对pc端网站移植到移动端进行项目重构。
<br>负责项目Web前端系统设计、开发与实现，负责监督项目进度。</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
          </section>

          <section class="dated_story">
            <header class="story-header">
              <h3 class="header-text">
                <span>教育经历</span>
              </h3>
            </header>
            <article>
              <el-row>
                <el-col :span="leftSpan">
                  <div class="article-headings">
                    <h6 class="date-range">
                      <span class="start-date">2013</span>
                      <span class="end-date">
                    <span>2014</span>
                  </span>
                    </h6>
                  </div>
                </el-col>
                <el-col :span="rightSpan">
                  <div class="article-body">
                    <h4><span>南昌大学</span></h4>
                    <a href="javascript:void(0);">
                      <h5><span>物联网工程专业</span></h5>
                    </a>
                    <div>
                      <p>
                        <span>2013-2014学年第一学期获得一等奖学金 <br>

2013-2014学年获得优秀学生干部<br>

2013-2014学年第二学期获得二等奖学金<br>

第十四届挑战杯获得三等奖<br>

2014-2015学年第二学期获得二等奖学金<br>

通过证券从业资格证考试</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </article>
          </section>
        </div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBody',
  data () {
    return {
      fullName: '张翔',
      leftSpan: 4,
      rightSpan: 20
    }
  }
}
</script>

<style lang="scss" scoped>
  .article-body {
    p {
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
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
    //padding: 5vw 15vh;
    box-sizing: border-box;
  }
  .cv-content {
    background-color: #ffffff;
    padding: 40px;
  }
  .head-bar {
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .head-bar:hover {
    outline: 1px dashed #269ad1;
    position: relative;
  }
  .head-profile:hover {
    background-color: rgba(62,148,228,0.2);
  }
  .head-profile {
    margin-bottom: 0;
    position: relative;
    width: 60%;
  }
  .user-thumb {
    max-width: 70px;
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
    font-size: 200%;
    margin-bottom: 0.1em;
    box-sizing: border-box;
  }
  h2 {
    margin-top: 0;
    font-size: 100%;
    font-weight: 500;
    color: #777777;
  }
  h3 {
    font-size: 120%;
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
    font-size: 100%;
  }
  h6 {
    font-size: 90%;
    margin-top: 0px;
    margin-bottom: 0.25em;
  }
  .sidebar {
    border-left: 1px solid #cccccc;
    color: #333333;
    font-size: 14px;
    width: 30%;
    //display: table-cell;
    padding-left: 30px;
    padding-right: 0;
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
    //margin-bottom: 1.23333333em;
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
