import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../request/request";


export const userGetAll= (search) => {

    return useQuery({
        queryKey:["all",search],
        queryFn:()=>request.get(`/all`,{params:{name_like:search}}).then((res)=> res.data)
    });
}