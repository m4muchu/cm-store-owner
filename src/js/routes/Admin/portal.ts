import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Products } from 'js/components/admin/components/catalogs/products';
import { StaffInfo } from 'js/components/admin/components/staff-info/staff-info';


export const portalRoutes = [
    {
        path: "/admin/products",
        component: Products
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
