import './HeroButton.css'
import {useBaseCounterQuery} from "@/store/api/index.js";

const HeroButton = () => {
    const {data, isLoading, isError, isSuccess} = useBaseCounterQuery()

    if (isLoading) {
        return (
            <button className="reset anim-bg-gradient">Loading...</button>
        )
    }
    if (isError) {
        return (
            <button className="reset anim-bg-gradient">ERROR</button>
        )
    }
    if (isSuccess) {

        return (
            <button
                className="reset anim-bg-gradient"
            >Visits: {data.count}</button>
        )
    }
}

export default HeroButton