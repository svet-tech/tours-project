import type {RouteObject}  from "react-router-dom"
import {MainPage} from "../pages/MainPage"
import {BlogPage} from "../pages/BlogPage"
import { MembersListPage } from "../pages/MembersListPage"
import {CartPage} from "../pages/CartPage"


export const routes: RouteObject[] = [
    
    {
        path: '/blog',
        element: <BlogPage />
    },
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/members',
        element: <MembersListPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    }
]