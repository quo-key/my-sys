import axios from 'axios';
import URLs from './URLs';

const appkey = 'quoquoquo_1590670213303';
const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
});
ajax.interceptors.response.use((data) => {
  const newData = data.data;
  if (newData.status === 'success') {
    return newData;
  }
  return Promise.reject(newData.msg);
});

const login = (data) => ajax.post(URLs.login, `appKey=${appkey}&${data}`);
const logon = (data) => ajax.post(URLs.logon, `appKey=${appkey}&${data}`);
const findByPage = (page, size) => ajax.get(URLs.findByPage, {
  params: {
    page,
    size,
  },
});
const updateStudent = (options) => ajax.get(URLs.updateStudent, {
  params: {
    ...options,
  },
});

const addStudent = (options) => ajax.get(URLs.addStudent, {
  params: {
    ...options,
  },
});

const delBySno = (sNo) => ajax.get(URLs.delBySno, {
  params: {
    sNo,
  },
});

const searchStudent = (sex, search, page, size) => ajax.get(URLs.searchStudent, {
  params: {
    sex,
    search,
    page,
    size,
  },
});
export default {
  login,
  logon,
  findByPage,
  updateStudent,
  addStudent,
  delBySno,
  searchStudent,
};
