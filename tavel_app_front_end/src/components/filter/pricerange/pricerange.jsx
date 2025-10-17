
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './pricerange.css'
import { useFilter } from '../../../context';

const miniDiff = 500;
function valuetext(value) {
    return `${value}`;
}

export const Price = () => {
    const { pricerange, filterDispatch } = useFilter();

    console.log({ pricerange });
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            filterDispatch({
                type: "MINIMUM_PRICE",
                payload: {
                    newValue,
                    pricerange,
                    miniDiff
                }
            })
        }
        else {
            filterDispatch({
                type: "MAXIMUM_PRICE",
                payload: {
                    newValue,
                    pricerange,
                    miniDiff
                }
            })
        }
    }

    return (
        <div className='filter-container'>
            <label className="filter-label">Price </label>
            <Box>
                <Slider
                    className='pricerange'
                    getAriaLabel={() => 'Minimum Difference'}
                    value={pricerange}
                    valueLabelDisplay="on"
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    min={100}
                    max={25000}
                    disableSwap
                />
            </Box>
        </div>
    );
}
