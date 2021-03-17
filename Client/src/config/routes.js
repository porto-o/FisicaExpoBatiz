// Import Layout
import MainLayout from "../Layouts/MainLayout";
// Pages
import Home from "../pages/Home";
import MainCoulomb from "../pages/Coulomb/MainCoulomb";
// Other
import Error404 from "../pages/Error404";
import MainCampo from "../pages/Campo/MainCampo";
import MainCapacitancia from "../pages/Capacitancia/MainCapacitancia";


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
                path: "/coulomb",
                component: MainCoulomb,
                exact: true
            },
            {
                path: "/campo",
                component: MainCampo,
                exact: true
            },
            {
                path: "/capacitancia",
                component: MainCapacitancia,
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