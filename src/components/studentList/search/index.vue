<template>
  <div>
<div class="search">
    <label for="search-word">关键字搜索</label>
    <input type="text" id="search-word" placeholder="请输入您要找的关键字" @input="edit($event.target.value)">
    <input type="button" id="search-submit" value="搜索" @click="searchFor">
</div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';

export default {
  data() {
    return {
      search:'',
    };
  },
  methods: {
    edit(value) {
      if (value) {
        this.search = value;
      } 
    },
    ...mapActions(['searchStu','getStuList']),
    searchFor() {
      if (this.search) {
          this.searchStu(this.search);
          this.$emit('current-data', this.search);
      } else {
          this.getStuList(1);
      }
      
    },
  },
};
</script>

<style>

</style>
