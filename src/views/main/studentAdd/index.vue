<template>
  <div class="add-container">
      <div id="student-add1">
          <form action="" id="add-student-form" >
    <div>
        <label for="name">姓名</label>
        <input type="text" v-model="user.name" name='name'>
    </div>
    <div>
        <label for="">性别</label>
        <input type="radio" name="sex" v-model="user.sex" value="0" checked>
        <label for="male" class="sex">男</label>
        <input type="radio" name="sex" v-model="user.sex" value="1" >
        <label for="female" class="sex">女</label>
    </div>
    <div>
        <label for="email">邮箱</label>
        <input type="email" v-model="user.email" name="email">
    </div>
    <div>
        <label for="number">学号</label>
        <input type="text" id="number" v-model="user.sNo">
    </div>
    <div>
        <label for="birthYear">出生年</label>
        <input type="text" id="birthYear" v-model="user.birth">
    </div>
    <div>
        <label for="phone">手机号</label>
        <input type="text" v-model="user.phone" name="phone">
    </div>
    <div>
        <label for="address">住址</label>
        <input type="text" v-model="user.address" name='address'>
    </div>
    <div>
        <label for=""></label>
        <button id="add-submit" class="btn" @click.prevent="commit">提交</button>
        <input type="reset" class="btn"/>
    </div>
    </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        sex: 0,
        email: '',
        birth: '',
        phone: '',
        address: '',
        sNo: '',
      },
    };
  },
  methods: {
    async commit() {
      try {
        const { msg, status: type } = await this.$api.addStudent(this.user);
        this.$Toast({ msg, type });
        this.$router.push('/main/studentList');
      } catch (error) {
        this.$Toast({ msg: error, type: 'fail' });
      }
    },
  },
};
</script>

<style>
</style>
