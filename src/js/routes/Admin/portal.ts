import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Products } from 'js/components/admin/components/catalogs/products';
import {  CreateProduct } from 'js/components/admin/components/catalogs/create-product';
import { StaffInfo } from 'js/components/admin/components/staff-info/staff-info';


export const portalRoutes = [
    {
        path: "/admin/products",
        component: Products
    },
    {
        path: "/admin/create-product",
        component: CreateProduct
    },
    {
        path: "/admin/account-settings",
        component: StaffInfo
    },
    {
        path: "/",
        component: Dashboard
    }
]
