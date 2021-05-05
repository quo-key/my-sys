<template>
  <div>
    <table>
        <thead>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody id="tbody">
        <tr v-for="item in list" :key="item.id">
            <th>{{item.sNo}}</th>
            <th>{{item.name}}</th>
            <th>{{item.sex === 0 ? '男':'女'}}</th>
            <th>{{item.email}}</th>
            <th>{{new Date().getFullYear() - item.birth}}</th>
            <th>{{item.phone}}</th>
            <th>{{item.address}}</th>
            <th>
                <button class="btn edit" @click="edit(item)">编辑</button>
                <button class="btn delete" @click="del(item.sNo)">删除</button>
            </th>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['list']),
  },
  methods: {
    ...mapMutations(['setShowModal', 'setActiveStu']),
    ...mapActions(['delStudent']),
    edit(stu) {
      this.setActiveStu(stu);
      this.setShowModal(true);
    },
    del(sNo) {
      const flag = window.confirm(`删除学号为${sNo}的学生吗`);
      console.log(flag);
      if (flag) {
        this.delStudent(sNo);
      }
    },
  },
};
</script>

<style>

</style>
