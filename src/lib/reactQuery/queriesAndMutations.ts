import { useQuery, } from "@tanstack/react-query";
import {QUERY_KEYS} from "./queryKeys.ts";
import {getAllCountry} from "../api/api.ts";


export const useGetRecentPosts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_COUNTRY],
        queryFn: getAllCountry,
    });
};