import axios from '@/services/http';

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
      async logIn(_,payload ) {
        await axios.get('/sanctum/csrf-cookie');
        await axios.post('/v1/login', payload)
        .then(() => {
            axios.get('/v1/users')
            .then(res => {
              console.log(res.data);
            });
        })
        .catch(() => console.log('pasok err'));
        
      }
    }    
};