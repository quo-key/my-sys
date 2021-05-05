<template>
  <div class="logon-container">
      <form action="" id="register">
            <div id="register-center">
            <h2>注册
                <router-link to="/login" style="font-size: 12px;">登录</router-link>
            </h2>
            <div>
                <label for="username">
                    用户名:
                </label>
                <input type="text" v-model="username" name = 'username'/>
            </div>
            <div>
                <label for="account">
                    账号:
                </label>
                <input type="text" v-model="account" name = 'account'/>
            </div>
            <div>
                <label for="password">密码:
                </label>
                <input type="text" v-model="password" name="password"/>
            </div>
            <div>
                <label for="rePassword">确认密码:
                </label>
                <input type="text" v-model="rePassword" name="rePassword"/>
            </div>
            <div>
                <label for=""></label>
                <input type="button" class="btn" @click="logon" value="注册" id="register-btn"/>
                <input type="button" class="btn" @click="reset" value="重置"/>
            </div>
        </div>
        </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      account: '',
      password: '',
      rePassword: '',
    };
  },
  methods: {
    reset() {
      this.username = '';
      this.account = '';
      this.password = '';
      this.rePassword = '';
    },
    async logon() {
      if (this.username && this.account && this.password && this.rePassword) {
        if (this.password === this.rePassword) {
          try {
            const result = await this.$api.logon(`account=${this.account}&password=${this.password}&username=${this.username}&rePassword=${this.rePassword}`);
            this.$router.push('/login');
            this.$Toast({ msg: result.msg, type: 'success' });
          } catch (error) {
            this.$Toast({ msg: error, type: 'fail' });
          }
        }
      }
    },
  },

};
</script>

<style scoped src="../login/login.css">

</style>
