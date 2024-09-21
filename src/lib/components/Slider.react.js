import React from 'react';
import PropTypes from 'prop-types';
import { Slider as MuiSlider, Stack } from '@mui/material';

const Slider = ({ id, defaultValue, disabled, ariaLabel, min, max, step, value, setProps, ...other }) => {
    const handleChange = (event, newValue) => {
        if (setProps) {
            setProps({ value: newValue });
        }
    };

    return (
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
            <MuiSlider
                id={id}
                aria-label={ariaLabel}
                value={value !== undefined ? value : defaultValue}
                onChange={handleChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                {...other}
            />
        </Stack>
    );
};

Slider.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The default value of the slider.
     */
    defaultValue: PropTypes.number,

    /**
     * If true, the slider will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The aria-label for the slider.
     */
    ariaLabel: PropTypes.string,

    /**
     * The minimum allowed value of the slider.
     */
    min: PropTypes.number,

    /**
     * The maximum allowed value of the slider.
     */
    max: PropTypes.number,

    /**
     * The step interval of the slider.
     */
    step: PropTypes.number,

    /**
     * The current value of the slider.
     */
    value: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

Slider.defaultProps = {
    id: '',
    defaultValue: 30,
    disabled: false,
    ariaLabel: 'Slider',
    min: 0,
    max: 100,
    step: 1,
    value: undefined,
    setProps: () => { }
};

export default Slider;
