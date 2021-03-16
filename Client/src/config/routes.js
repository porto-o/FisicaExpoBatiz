// Import Layout
import MainLayout from "../Layouts/MainLayout";
// Pages
import Home from "../pages/Home";
// Other
import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/",
        component: MainLayout,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                //Esto tiene que ir al final de todo
                component: Error404
            }
        ]
    }
]

export default routes;