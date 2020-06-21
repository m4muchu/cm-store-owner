import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Products } from 'js/components/admin/components/catalogs/products';
import { Sales } from 'js/components/admin/components/sales/sales';
import { Voucher} from 'js/components/admin/components/voucher/voucher';
import { Address } from "js/components/admin/components/address/address";


export const portalRoutes = [
    {
        path: "/admin/products",
        component: Products
    },
    {
        path: "/admin/sales",
        component: Sales
    },
    {
        path: "/admin/voucher",
        component: Voucher
    },
    {
        path: "/admin/address",
        component: Address
    },
    {
        path: "/",
        component: Dashboard
    }
]
