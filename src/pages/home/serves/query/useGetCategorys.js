import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../request/request";


export const useGetCategorys = (datakey, id) => {

    return useQuery({
        queryKey:["all-categorys",datakey, id],
        queryFn:()=>request.get(`/${datakey}/${id}`).then((res)=> res.data)
    });
}