
interface RouteAttributesInterface{
    path: String,
    name: String,
}

export enum AppRoutes{
    home="/",
    details="/details",
    secondDetailsPage="/details/detailsPageTwo",
    extraDetailsPage="/details/details-sub-page/index",
}


const routes : RouteAttributesInterface[] = [
    {
        path : AppRoutes.home,
        name: "appRoutes.home"
    },
    {
        path : AppRoutes.details,
        name: "appRoutes.details"
    },
    {
        path : AppRoutes.secondDetailsPage,
        name: "appRoutes.newTodo"
    }
]

export default routes;