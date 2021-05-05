import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    activeStu: null,
    list: [],
    size: 10,
    count: 0,
    totalPage: 0,
    nowPage: 0,
    sex: -1,
    search: {},
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setShowModal(state, bool) {
      state.show = bool;
    },
    setActiveStu(state, stu) {
      state.activeStu = stu;
      console.log(state.activeStu);
    },
    setTotalPage(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / state.size);
    },
    setNowPage(state, page) {
      state.nowPage = page;
    },
    setSeX(state, sex) {
      state.sex = sex;
    },
    setsearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    async getStuList({ state, commit }, page) {
      const { data: { cont: count, findByPage: list } } = await api.findByPage(page, state.size);
      commit('setList', list);
      commit('setTotalPage', count);
      commit('setNowPage', page);
    },
    async delStudent({ state, dispatch }, sNo) {
      const result = await api.delBySno(sNo);
      console.log(result);
      let page = Math.ceil((state.count - 1) / state.size);
      if (state.nowPage > page) {
        page = state.nowPage - 1;
      } else {
        page = state.nowPage;
      }
      dispatch('getStuList', page);
    },
    async searchStu({ state , commit}, search) {
      const  { data: { cont: count, searchList: list } } = await api.searchStudent(state.sex, search, state.nowPage, state.size);
      // console.log(count, list);
      commit('setList', list);
      commit('setTotalPage', count);
    },
  },
  modules: {
  },
});
