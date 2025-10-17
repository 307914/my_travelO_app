import { useFilter } from '../../../context';
import './freecancel.css'
export const FreeCancel = () => {
    const { iscancelable, filterDispatch } = useFilter();

    const handlechangecheckbox = (event) => {
        filterDispatch({
            type: "IS_CANCELABLE",
            payload: event.target.checked
        })
    }

    return (
        <div className="filter-container">
            <div className='d-flex filter-cancel'>
                <label className="filter-label">Free Cancelation</label>
                <label className="slide">
                    <input
                        type="checkbox"
                        onChange={handlechangecheckbox}
                        value={iscancelable}
                        checked={iscancelable}

                    />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}