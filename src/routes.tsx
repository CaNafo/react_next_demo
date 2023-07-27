
interface RouteAttributesInterface{
    path: String,
    name: String,
}

export enum AppRoutes{
    home="/",
    details="/details",
    secondDetailsPage="/detailsPageTwo",
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
    }
]

export default routes;