import { Dashboard } from 'js/components/admin/components/dasboard/dashboard'
import { Products } from 'js/components/admin/components/catalogs/products'
import { Address } from 'js/components/admin/components/address/address'
import { CreateProduct } from 'js/components/admin/components/catalogs/create-product'
import { StaffInfo } from 'js/components/admin/components/staff-info/staff-info'
import Categories from 'js/components/admin/components/catalogs/categories/categories'
import { Collections } from 'js/components/admin/components/catalogs/collections/collections'
import { Drafts } from 'js/components/admin/components/orders/drafts'
import { Orders } from 'js/components/admin/components/orders/orders'
import { Customers } from 'js/components/admin/components/customers/customers'
import { Sales } from 'js/components/admin/components/discount/sales/sales'
import { CreateSale } from 'js/components/admin/components/discount/sales/create-sale'
import { Vouchers } from 'js/components/admin/components/discount/vouchers/vouchers'
import { CreateVoucher } from 'js/components/admin/components/discount/vouchers/create-voucher'
import { CreateVariant } from 'js/components/admin/components/catalogs/create-variant'
import { CreateCategory } from 'js/components/admin/components/catalogs/categories/create-category'
import { CreateCollection } from 'js/components/admin/components/catalogs/collections/create-collection'
import { CreateCustomer } from 'js/components/admin/components/customers/create-customer'
import { EditCustomer } from 'js/components/admin/components/customers/edit-customer'
import { Configuration } from 'js/components/admin/components/configuration/configuration'
import { Attributes } from 'js/components/admin/components/configuration/attribute/attributes'
import { ProductTypes } from 'js/components/admin/components/configuration/product-type/product-types'
import { CreateEditAttribute } from 'js/components/admin/components/configuration/attribute/create-edit-attribute'
import { CreateEditProductType } from 'js/components/admin/components/configuration/product-type/create-edit-product-type'
import { LevelTwoCategories } from 'js/components/admin/components/catalogs/categories/LevelTwoCategories'
import { LevelThreeCategories } from 'js/components/admin/components/catalogs/categories/LevelThreeCategories'
import Options from 'js/components/admin/components/catalogs/options/Options'

export const portalRoutes = [
  {
    path: '/admin/products',
    component: Products,
  },
  {
    path: '/admin/create-product',
    component: CreateProduct,
  },
  {
    path: '/admin/edit-product/:productId',
    component: CreateProduct,
  },
  {
    path: '/admin/categories/level-one/',
    component: Categories,
  },
  {
    path: '/admin/categories/:levelOneCategoryId/level-two/',
    component: LevelTwoCategories,
  },
  {
    path: '/admin/categories/:levelTwoCategoryId/level-three/',
    component: LevelThreeCategories,
  },
  {
    path: '/admin/options/',
    component: Options,
  },
  {
    path: '/admin/create-variant',
    component: CreateVariant,
  },
  {
    path: '/admin/create-category',
    component: CreateCategory,
  },
  {
    path: '/admin/collections',
    component: Collections,
  },
  {
    path: '/admin/create-collection',
    component: CreateCollection,
  },
  {
    path: '/admin/orders',
    component: Orders,
  },
  {
    path: '/admin/drafts',
    component: Drafts,
  },
  {
    path: '/admin/customers',
    component: Customers,
  },
  {
    path: '/admin/create-customer',
    component: CreateCustomer,
  },
  {
    path: '/admin/edit-customer',
    component: EditCustomer,
  },
  {
    path: '/admin/sales',
    component: Sales,
  },
  {
    path: '/admin/create-sales',
    component: CreateSale,
  },
  {
    path: '/admin/vouchers',
    component: Vouchers,
  },
  {
    path: '/admin/create-voucher',
    component: CreateVoucher,
  },
  {
    path: '/admin/address',
    component: Address,
  },
  {
    path: '/admin/account-settings',
    component: StaffInfo,
  },
  {
    path: '/admin/configuration',
    component: Configuration,
  },
  {
    path: '/admin/attributes',
    component: Attributes,
  },
  {
    path: '/admin/create-attribute',
    component: CreateEditAttribute,
  },
  {
    path: '/admin/product-types',
    component: ProductTypes,
  },
  {
    path: '/admin/create-product-type',
    component: CreateEditProductType,
  },
  {
    path: '/',
    component: Dashboard,
  },
]
