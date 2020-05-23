import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Products } from 'js/components/admin/components/catalogs/products';

export const portalRoutes = [
    {
        path: "/admin/products",
        component: Products
    },
    {
        path: "/",
        component: Dashboard
    }
]
