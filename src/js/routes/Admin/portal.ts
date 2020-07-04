import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Products } from 'js/components/admin/components/catalogs/products';
import { Address } from "js/components/admin/components/address/address";
import { CreateProduct } from 'js/components/admin/components/catalogs/create-product';
import { StaffInfo } from 'js/components/admin/components/staff-info/staff-info';
import { Categories } from 'js/components/admin/components/catalogs/categories/categories';
import { Collections } from 'js/components/admin/components/catalogs/collections/collections';
import { Drafts } from 'js/components/admin/components/orders/drafts';
import { Orders } from 'js/components/admin/components/orders/orders';
import { Customers } from 'js/components/admin/components/customers/customers';
import { Sales } from 'js/components/admin/components/discount/sales/sales';
import { CreateSale } from 'js/components/admin/components/discount/sales/create-sale';
import { Vouchers } from 'js/components/admin/components/discount/vouchers/vouchers';
import { CreateVoucher } from 'js/components/admin/components/discount/vouchers/create-voucher';
import { CreateVariant } from 'js/components/admin/components/catalogs/create-variant';
import { CreateCategory } from 'js/components/admin/components/catalogs/categories/create-category';
import { CreateCollection } from 'js/components/admin/components/catalogs/collections/create-collection';


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
        path: "/admin/create-variant",
        component: CreateVariant
    },
    {
        path: "/admin/categories",
        component: Categories
    },
    {
        path: "/admin/create-category",
        component: CreateCategory
    },
    {
        path: "/admin/collections",
        component: Collections
    },
    {
        path: "/admin/create-collection",
        component: CreateCollection
    },
    {
        path: "/admin/orders",
        component: Orders
    },
    {
        path: "/admin/drafts",
        component: Drafts
    },
    {
        path: "/admin/customers",
        component: Customers
    },
    {
        path: "/admin/sales",
        component: Sales
    },
    {
        path: "/admin/create-sales",
        component: CreateSale
    },
    {
        path: "/admin/vouchers",
        component: Vouchers
    },
    {
        path: "/admin/create-voucher",
        component: CreateVoucher
    },
    {
        path: "/admin/address",
        component: Address
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
