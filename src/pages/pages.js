import {lazy} from 'react'
const Home = lazy(() => import('../components/Layout/HomePage/HomePage'))
const Admin = lazy(() => import('../pages/Admin/Admin'))

const pages = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/Admin',
        exact: true,
        component: Admin
    }

]

export {pages};