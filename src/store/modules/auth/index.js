import axios from '@/api';

export default {
    namespaced: true,
    state: {
      token: '',
      user: {}
    },
    getters: {
      authenticated(state) {
        return (Boolean)(state.token && state.user);
      },
      loggedUser(state) {
        return state.user;
      }
    },
    mutations: {
      SET_TOKEN(state, token) {
        state.token = token;
      },
      SET_USER(state, data) {
        state.user = data;
      },
    },
    actions: {
      async logIn() {
        return axios.get('/posts/1');
      }
    }    
};