
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../request/request'

export const userbannercard = () => {

    return useQuery({
        queryKey:["banner"],
        queryFn:()=>request.get('/categorey').then((res)=> res.data)
    });
}

export const useraksiyacard = ()=>{
    return useQuery({
    queryKey:["aksiya"],
    queryFn:()=>request.get("/aksiya").then((res)=>res.data)
    })
}


export const userbrendcard = ()=>{
    return useQuery({
    queryKey:["brend"],
    queryFn:()=>request.get("/brend").then((res)=>res.data)
    })
}

export const userphonecard = (search="")=>{
    return useQuery({
    queryKey:["phone",search],
    queryFn:()=>request.get("/phone",{params:{name_like:search}}).then((res)=>res.data)
    })
}

export const usernoutbookcard = (search="")=>{
    return useQuery({
    queryKey:["noutbook",search],
    queryFn:()=>request.get("/noutbook",{params:{name_like:search}}).then((res)=>res.data)
    })
}