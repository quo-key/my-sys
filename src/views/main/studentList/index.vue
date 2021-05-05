<template>
  <div class="list-container">
    <div id="student-list">
        <search @current-data="cdata"></search>
        <studentTable></studentTable>
        <transition><studentModal v-if="show"></studentModal></transition>
        <studentTurnPage
        :totalPage="totalPage"
        :nowPage="nowPage"
        @current-page="cpage"
        ></studentTurnPage>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import search from '@/components/studentList/search/index.vue';
import studentTable from '@/components/studentList/studentTable/index.vue';
import studentModal from '@/components/studentList/studentModal/index.vue';
import studentTurnPage from '@/components/studentList/studentTurnPage/index.vue';

export default {
  components: {
    search,
    studentTable,
    studentModal,
    studentTurnPage,
  },
  methods: {
    ...mapActions(['getStuList','searchStu']),
    cpage(i) {
      this.getStuList(i);
    },
    cdata(data) {
      this.searchStu(data);
    }
  },
  created() {
    this.getStuList(1);
  },
  computed: {
    ...mapState(['show', 'nowPage', 'totalPage']),
  },
};
</script>

<style>
.v-enter {
 top: -100%;
 opacity: 0;
}
.v-enter-to {
 top: 0;
 opacity: 1;
}
.v-leave {
 top: 0;
 opacity: 1;
}
.v-leave-to {
 top: -100%;
 opacity: 0;
}
.v-enter-active, .v-leave-active {
 transition:all 0.5s linear;
}
</style>
