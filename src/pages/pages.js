import {lazy} from 'react'
const Home = lazy(() => import('../components/Layout/HomePage/HomePage'))
const Admin = lazy(() => import('../pages/Admin/Admin'))
const DetailProducts = lazy(()=>import('../pages/DetailProducts/DetailProduct'))

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
    },
    {
        path: '/detail-product/',
        exact: true,
        component: DetailProducts
    },

]

export {pages};