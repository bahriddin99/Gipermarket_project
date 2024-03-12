import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../request/request";


export const userGetCards= (datakey) => {

    return useQuery({
        queryKey:["cardss",datakey],
        queryFn:()=>request.get(`/${datakey}`).then((res)=> res.data)
    });
}