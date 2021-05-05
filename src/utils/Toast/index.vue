<template>
  <div v-if='exist' class="wrapper" :class="type">
      <div class="content">
          {{ msg }}
       </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      exist: true,
      //    msg: '修改成功',
      //    type: 'success',
    };
  },
};
</script>

<style scoped>
 .wrapper{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: fixed;
    top:200px;
    margin-top:40px;
    border-radius: 15px;
    /* background-color: lightblue; */
    left:calc(50% - 100px);
    }
.success {
background-color: #67c63e;
}
.fail {
background-color: #f56c6c;
}
.content{
    font-weight: bold;
    color: white;
}
</style>
