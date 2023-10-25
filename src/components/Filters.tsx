import { useState } from "react";
import { Slider } from "@mui/material";

type Props = {
    onFilterChange: (priceRangeValue: number[]) => void;
}

function Filters(props: Props) {
    const minmin = 0;
    const maxmax = 2000;
    const [priceRangeValue, setPriceRangeValue] = useState([0, 2000]);

    const handlePriceRangeChange = (event: any, newValue: any) => {
        handlePriceRangeChangeUi(event, newValue)
        props.onFilterChange(newValue);
        console.log('Changed');
    };

    const handlePriceRangeChangeUi = (event: any, newValue: any) => {
        setPriceRangeValue(newValue);
    };

    return (
        <div className="basis-1/6">
            <div className="mx-5">
                <h5 className="text-sm font-medium text-gray-800">Price</h5>
                <Slider
                    size="small"
                    value={priceRangeValue}
                    onChange={handlePriceRangeChangeUi}
                    onChangeCommitted={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    aria-label="Small"
                    min={minmin}
                    max={maxmax}
                    sx={{
                        color: 'warning.main',
                        '& .MuiSlider-thumb': {
                            borderRadius: '50%',
                        },
                    }}
                />
                <div className="flex justify-between text-sm font-medium">
                    <div className="text-xs font-small text-gray-600">{priceRangeValue[0]}€</div>
                    <div className="text-xs font-small text-gray-600">{priceRangeValue[1]}€</div>
                </div>
            </div>
        </div>
    );
}
export default Filters;