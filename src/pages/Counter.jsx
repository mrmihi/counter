import {useBaseCounterQuery} from "@/store/api/counter.js";

const Counter = () => {
    const {data, isLoading, isError, isSuccess} = useBaseCounterQuery()
    if (isLoading){
        return (
            <p>Loading...</p>
        )
    }
    if (isError){
        return (
            <p>Error...</p>
        )
    }
    if (isSuccess){
        return (

            <p className="text-center">Visits:{data.count}</p>

        )
    }
}

export default Counter;