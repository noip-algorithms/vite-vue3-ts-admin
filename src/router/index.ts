import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '../store'
import routes from './routes'

const routerHistory = createWebHashHistory(process.env.NODE_ENV)
const router = createRouter({
    history: routerHistory,
    routes
})

// global navigation gard for login
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path === '/login') {
        next()
        NProgress.done()
    } else {
        if ((store.getters as any)['base/token']) {
            next();
            NProgress.done()
            return
        } else {
            next('/login');
            NProgress.done()
            return
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})

export default router
