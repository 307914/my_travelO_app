import { X } from "react-bootstrap-icons"
import { Price } from "./pricerange/pricerange"
import './filter.css'
import { BedsAndRooms } from "./bedsadrooms/bedsandrooms"
import { PropertyType } from "./propertytype/propertytype"
import { StarRating } from "./starrating/starrating"
import { FreeCancel } from "./FreeCancel/freecancel"
import { useFilter } from "../../context"

export const Filter = () => {
    const { isfilteropen, filterDispatch } = useFilter();

    const handleclosebtn = () => {
        filterDispatch({ type: "IS_FILTER_OPEN" });
    }

    const handleclearAll = () => {
        filterDispatch({
            type: "CANCEL"
        })
    }
    return (
        <div className="filter-modal">
            <div className="filter-page">
                <div className="filter-cancel">
                    <label className="filter-label">Filter</label>
                    <span className="into-btn"><X size={30} onClick={handleclosebtn} /></span>
                </div>
                <Price />
                <BedsAndRooms />
                <PropertyType />
                <StarRating />
                <FreeCancel />
                <div className="d-flex filter-btns align-center">
                    <button className="button btn-all-primary cursor" onClick={handleclearAll}>Clear All</button>
                    <button className="button btn-apply cursor" onClick={handleclosebtn}>Apply</button>
                </div>
            </div>
        </div>
    )

}