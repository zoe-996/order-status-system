import VueRouter from 'vue-router'
import Vue from 'vue'

const Login = () => import('./pages/login.vue')
const Homepage = () => import('./pages/homepage.vue')
const User = () => import('./components/userlist.vue')
const Order = () => import('./components/orderlist.vue')

Vue.use(VueRouter);

var routes = [
    { path: '/', component: Login },
    { path: '/homepage', component: Homepage ,children:[
        { path : '/homepage/userlist', component : User },
        { path : '/homepage/orderlist', component : Order}
    ]}
]
var router = new VueRouter({ routes, mode: 'history' });

export default router;