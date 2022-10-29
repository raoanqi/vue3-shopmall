/**
 * 配置项目路由
 */

import {createRouter, createWebHashHistory} from 'vue-router'

const SignIn = () => import(/* webpackChunkName:"SignIn" */'@/views/SignIn.vue')
const Welcome = () => import(/* webpackChunkName:"Welcome" */'@/views/Welcome.vue')
const Dashboard = () => import(/* webpackChunkName:"Dashboard" */'@/views/Dashboard.vue')
const AddGoods = () => import(/* webpackChunkName:"AddGoods" */'@/views/AddGoods.vue')
const SwiperConfig = () => import(/* webpackChunkName:"SwiperConfig" */'@/views/SwiperConfig.vue')
const HotGoodsConfig = () => import(/* webpackChunkName:"HotGoodsConfig" */'@/views/HotGoodsConfig.vue')
const NewGoodsConfig = () => import(/* webpackChunkName:"NewGoodsConfig" */'@/views/NewGoodsConfig.vue')
const RecommendGoodsConfig = () => import(/* webpackChunkName:"RecommendGoodsConfig" */'@/views/RecommendGoodsConfig.vue')
const CategoryManage = () => import(/* webpackChunkName:"CategoryManage" */'@/views/CategoryManage.vue')
const GoodsManage = () => import(/* webpackChunkName:"GoodsManage" */'@/views/GoodsManage.vue')
const VIPManage = () => import(/* webpackChunkName:"VIPManage" */'@/views/VIPManage.vue')
const OrderManage = () => import(/* webpackChunkName:"OrderManage" */'@/views/OrderManage.vue')

// vue-router使用createRouter来创建路由
const router = createRouter({
    // hash模式：createWebHashHistory
    // history模式：createWebHistory
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/welcome'
        },
        {
            path: '/welcome',
            component: Welcome
        },
        {
            path: '/signIn',
            component: SignIn
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/addGoods',
            component: AddGoods
        },
        {
            path: '/swiperConfig',
            component: SwiperConfig
        },
        {
            path: '/hotGoodsConfig',
            component: HotGoodsConfig
        },
        {
            path: '/newGoodsConfig',
            component: NewGoodsConfig
        },
        {
            path: '/recommendGoodsConfig',
            component: RecommendGoodsConfig
        },
        {
            path: '/categoryManage',
            component: CategoryManage
        },
        {
            path: '/goodsManage',
            component: GoodsManage
        },
        {
            path: '/vipManage',
            component: VIPManage
        },
        {
            path: '/orderManage',
            component: OrderManage
        }
    ]
})

export default router