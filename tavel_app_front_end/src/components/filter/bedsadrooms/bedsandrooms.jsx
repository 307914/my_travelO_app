
import { v4 as uuid } from 'uuid'

import './bedsandrooms.css'
import { useFilter } from '../../../context'
const amenities = [
    "Any", "1", "2", "3", "4", "5+"
]

export const BedsAndRooms = () => {

    const { noOfBathrooms, noOfBedrooms, noOfBeds, filterDispatch } = useFilter();
    const handleNoOfBedrooms = (num) => {

        filterDispatch({
            type: "BEDROOMS",
            payload: num
        })
    }

    const handleNoOfBathrooms = (num) => {

        filterDispatch({
            type: "BATHROOMS",
            payload: num
        })
    }

    const handleNoOfBeds = (num) => {

        filterDispatch({
            type: "BEDS",
            payload: num
        })
    }
    return (
        <div className="filter-container">
            <label className="filter-label">Rooms and Beds</label>
            <div className='d-flex bedsandrooms'>
                <div className="d-flex labels">
                    <span className='span-label'>Bedrooms</span>
                    <span className='span-label'>Beds</span>
                    <span className='span-label'>Bathrooms</span>
                </div>
                <div className='d-flex direction-column properties'>
                    <div className='rooms'>
                        {
                            amenities.map((num) => (
                                <span key={num} className={`beds ${noOfBedrooms.toString() === num ? "select" : ""}`} onClick={() => handleNoOfBedrooms(num)}>{num}</span>
                            ))
                        }
                    </div>
                    <div className='rooms'>
                        {
                            amenities.map((num) => (
                                <span key={num} className={`beds ${noOfBeds.toString() === num ? "select" : ""}`} onClick={() => handleNoOfBeds(num)}>{num}</span>
                            ))
                        }

                    </div>
                    <div className='rooms'>
                        {
                            amenities.map((num) => (
                                <span key={num} className={`beds ${noOfBathrooms.toString() === num ? "select" : ""}`} onClick={() => handleNoOfBathrooms(num)}>{num}</span>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}