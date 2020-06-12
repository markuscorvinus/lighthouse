const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },    
];
  
export default routes.map(route => {
    const meta = {
      public: true,
      guest: true
    }
    return { ...route, meta }
});