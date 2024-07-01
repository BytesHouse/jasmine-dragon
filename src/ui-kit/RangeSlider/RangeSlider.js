import {useEffect, useState} from "react";

export const RangeSlider = ({ min, max, value, step, onChange }) => {
    const [minValue, setMinValue] = useState(value ? value.min : min);
    const [maxValue, setMaxValue] = useState(value ? value.max : max);

    useEffect(() => {
        if (value) {
            setMinValue(value.min);
            setMaxValue(value.max);
        }
    }, [value]);

    const handleMinChange = e => {
        e.preventDefault();
        const newMinVal = Math.min(+e.target.value, maxValue - step);
        if (!value) setMinValue(newMinVal);
        onChange({ min: newMinVal, max: maxValue });
    };

    const handleMaxChange = e => {
        e.preventDefault();
        const newMaxVal = Math.max(+e.target.value, minValue + step);
        if (!value) setMaxValue(newMaxVal);
        onChange({ min: minValue, max: newMaxVal });
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return (<>
            <div>
                <span>{minValue} Lei </span>
                 -
                <span> {maxValue} Lei </span>
            </div>
            <div className="wrapper__slider">
                <div className="input-wrapper__slider">
                    <input
                        className="input__slider"
                        type="range"
                        value={minValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMinChange}
                    />
                    <input
                        className="input__slider"
                        type="range"
                        value={maxValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMaxChange}
                    />
                </div>

                <div className="control-wrapper__slider">
                    <div className="control__slider" style={{left: `${minPos}%`}}/>
                    <div className="rail__slider">
                        <div
                            className="inner-rail__slider"
                            style={{left: `${minPos}%`, right: `${100 - maxPos}%`}}
                        />
                    </div>
                    <div className="control__slider" style={{left: `${maxPos}%`}}/>
                </div>
            </div>
        </>
    );
};