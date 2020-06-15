import AppAdmin from "js/components/admin/AppAdmin";
import AppAuth from "js/components/auth/AppAuth";


export const IndexRoutes = [
    { path: "/admin", component: AppAdmin },
    { path: "/auth", component: AppAuth },
    { path: "/", component:AppAdmin }
];
