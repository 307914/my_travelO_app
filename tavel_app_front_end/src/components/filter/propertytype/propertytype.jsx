import { useFilter } from '../../../context';
import './propertytype.css'
import { v4 as uuid } from "uuid"

console.log("the uuid is ", uuid());
const properties = [
    { id: uuid(), property: "House" },
    { id: uuid(), property: "Guest House" },
    { id: uuid(), property: "Flat" },
    { id: uuid(), property: "Hotel" }
]
export const PropertyType = () => {
    const { propertytype, filterDispatch } = useFilter();


    const handleProperty = (property) => {
        filterDispatch({
            type: "PROPERTY",
            payload: property
        })
    }

    return (
        <div className="filter-container">
            <label className="filter-label">Property Type</label>
            <div className="properties">
                {
                    properties.map(({ id, property }) =>
                    (
                        <span key={id} className={`opacities property-span ${property === propertytype ? "select" : ""}`}
                            onClick={() => handleProperty(property)}>{property}</span>
                    ))
                }
            </div>

        </div>

    )
}