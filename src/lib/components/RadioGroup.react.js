import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material';

/**
 * RadioGroup component using Material-UI.
 * It allows users to select one option from a set of mutually exclusive choices.
 */
const RadioGroup = ({ id, label, options, value, onChange, setProps, direction, ...other }) => {
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (onChange) onChange(event);
        if (setProps) setProps({ value: newValue });
    };

    return (
        <FormControl>
            {label && <FormLabel id={`${id}-label`}>{label}</FormLabel>}
            <MuiRadioGroup
                aria-labelledby={`${id}-label`}
                name={id}
                value={value}
                onChange={handleChange}
                row={direction === 'row'}
                {...other}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        disabled={option.disabled}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};

RadioGroup.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The label for the radio group.
     */
    label: PropTypes.string,

    /**
     * An array of objects, each containing a value and a label for the radio options.
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,

    /**
     * The currently selected value.
     */
    value: PropTypes.string,

    /**
     * Callback fired when the value changes.
     */
    onChange: PropTypes.func,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * The direction of the radio group. Can be 'row' or 'column'.
     */
    direction: PropTypes.oneOf(['row', 'column']),
};

RadioGroup.defaultProps = {
    direction: 'column',
};

export default RadioGroup;
