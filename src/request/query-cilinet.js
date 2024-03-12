import { QueryClient } from "@tanstack/react-query";

export const clinet = new QueryClient({
    defaultOptions:{queries:{refetchOnWindowFocus:false}}
})