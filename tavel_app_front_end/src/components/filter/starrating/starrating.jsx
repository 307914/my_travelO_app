
import { v4 as uuid } from 'uuid'
import './starrating.css'
import { useFilter } from '../../../context';

const startratings = [
    { id: uuid(), rate: "1" },
    { id: uuid(), rate: "2" },
    { id: uuid(), rate: "3" },
    { id: uuid(), rate: "4" },
]

export const StarRating = () => {
    const { ratingNumber, filterDispatch } = useFilter();



    const handleRating = (rate) => {
        filterDispatch({
            type: "RATING",
            payload: rate
        })
    }

    return (
        <div className="filter-container">
            <label className="filter-label">Star Rating</label>
            <div className="properties star-prop">
                {
                    startratings.map(({ id, rate }) => (
                        <span key={id} className={`opacities starrating-span ${ratingNumber.toString() === rate ? "select" : ""}`}
                            onClick={() => handleRating(rate)}
                        >{rate} &Up</span>
                    ))
                }

            </div>

        </div>
    )

}
