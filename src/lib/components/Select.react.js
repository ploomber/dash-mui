import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select as MuiSelect, InputLabel, FormControl, FormHelperText } from '@mui/material';

/**
 * Select component using Material-UI.
 * It allows selecting from multiple options.
 * The 'id' prop is required.
 */
const Select = ({ 
    id, 
    label, 
    value, 
    options, 
    onChange, 
    setProps, 
    disabled, 
    error, 
    readOnly, 
    required, 
    helperText, 
    ...other 
}) => {
    const handleChange = (e) => {
        if (onChange) onChange(e);
        if (setProps) setProps({ value: e.target.value });
    };

    return (
        <FormControl fullWidth required={required} error={error} disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                id={id}
                value={value}
                label={label}
                onChange={handleChange}
                inputProps={{ readOnly }}
                {...other}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiSelect>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

Select.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The label for the select input.
     */
    label: PropTypes.string,

    /**
     * The currently selected value.
     */
    value: PropTypes.string,

    /**
     * The available options for the select.
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * If true, the select is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the select displays an error.
     */
    error: PropTypes.bool,

    /**
     * If true, the select is read-only.
     */
    readOnly: PropTypes.bool,

    /**
     * If true, the select input is required.
     */
    required: PropTypes.bool,

    /**
     * Optional helper text to display below the select.
     */
    helperText: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Callback fired when an option is selected.
     */
    onChange: PropTypes.func,
};

Select.defaultProps = {
    value: '',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
    helperText: '',
};

export default Select;
