<template>
<div class="main-container">
    <div class="header">
        <div class="log">
            <img src="@/assets/logo.png" alt=""/>
            <span>渡一教育</span>
        </div>
        <ul class="user">
            <li id="username">{{ username }}</li>
            <li class="logout">
                <router-link to="/login">退出</router-link>
            </li>
        </ul>
    </div>
    <div class="left-menu">
        <dl class="menu">
            <dt>学生管理</dt>
            <router-link tag='dd' to='/main/studentList'>学生列表</router-link>
            <router-link tag='dd' to='/main/studentAdd'>新增学生</router-link>
        </dl>
    </div>
    <div class="right-content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.username = this.Cookie.getCookie('username');
  },
};
</script>

<style scoped >
@import url("./index.css");
</style>
