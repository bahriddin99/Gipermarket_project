import { Home } from "../pages/home";
import { Karzinka } from "../pages/karzinka";
import { Offermet } from "../pages/offormet";
import { SingeData } from "../pages/single-data/singe-data";

export const main_pages = [
    {
        component:<Home/>
    },
    {
        component:<Karzinka/>,
        path:"karzinka"
    },
    {
        component:<Offermet/>,
        path:"offormet"
    },
    // {
    //     component:<SingeData/>,
    //     path:"product/:datakey/:id"
    // },
]