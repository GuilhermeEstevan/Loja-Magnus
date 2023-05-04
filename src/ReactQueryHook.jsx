import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios'





export const getData = () => {
    const url = 'https://course-api.com/javascript-store-products'

    const response = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await axios.get(url)
            return result
        }
    })


    
    return response
}



