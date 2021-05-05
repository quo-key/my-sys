<template>
  <div class="login-container">
      <form action="#" id="login">
        <div id="login-center">
        <h2>登录
            <router-link to="/logon" style="font-size: 12px;">注册</router-link>
        </h2>
        <div>
            <label for="account">
                账号:
            </label>
            <input type="text" v-model="account"/>
        </div>
        <div>
            <label for="password">密码:</label>
            <input type="text" v-model="password"/>
        </div>
        <div>
            <label for=""></label>
            <input type="button" class="btn"  @click="login"  value="提交" id = 'submit-btn'/>
            <input type="button" class="btn"  @click="reset" value="重置"/>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    reset() {
      this.account = '';
      this.password = '';
    },
    async login() {
      if (this.account && this.password) {
        try {
          const result = await this.$api.login(`account=${this.account}&password=${this.password}`);
          this.Cookie.setCookie('username', this.account);
          this.$router.push('main');
          this.$Toast({ msg: result.msg, type: 'success' });
          // console.log(result.msg);
        } catch (error) {
          this.$Toast({ msg: error, type: 'fail' });
          // console.log(error);
        }
      }
    },
  },
};
</script>

<style scoped src="./login.css">

</style>
