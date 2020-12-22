import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register'
import Login from "@/views/Login";
import Home from "@/views/Home"
import User from "@/views/User";
import Trade from "@/views/Trade";
import Storage from "@/views/Storage";
import Comment from "@/views/Comment";
import Suppiler from "@/views/Supplier";
import StockRecord from "@/views/StockRecord";
import StockCost from "@/views/StockCost";
import StockCount from "@/views/StockCount";
import Chart from "@/views/Chart";


Vue.use(Router)


const routes = [{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            name: '首页'
        },

        children: [{
                path: '/user',
                component: User,
                meta: {
                    name: '进货信息'
                }
            },
            {
                path: '/trade',
                component: Trade,
                meta: {
                    name: '成交额'
                }
            },
            {
                path: '/storage',
                component: Storage,
                meta: {
                    name: '商品库存'
                }
            },
            {
                path: "/comment",
                component: Comment,
                meta: {
                    name: "商品评论"
                }
            },
            {
                path: "/supplier",
                component: Suppiler,
                meta: {
                    name: "供应商信息"
                }
            },
            {
                path: "/stockRecord",
                component: StockRecord,
                meta: {
                    name: "进货记录"
                }
            },
            {
                path: "/stockCost",
                component: StockCost,
                meta: {
                    name: "进货成本"
                }
            },
            {
                path: "/stockCount",
                component: StockCount,
                meta: {
                    name: "进货输目"
                }
            },
            {
                path: "/chart",
                component: Chart,
                meta: {
                    name: "速率比较图"
                }
            }
        ]
    }

]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router