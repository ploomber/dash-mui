import React from 'react';
import PropTypes from 'prop-types';
import { Switch as MuiSwitch } from '@mui/material';

/**
 * Switch component using Material-UI.
 * It can be customized with various optional props to change its appearance and behavior.
 * The 'id' prop is required.
 */
const Switch = ({ id, checked, disabled, color, size, onChange, setProps, ...other }) => {
    const handleChange = (event) => {
        if (onChange) onChange(event);
        if (setProps) setProps({ checked: event.target.checked });
    };

    return (
        <MuiSwitch
            id={id}
            checked={checked}
            disabled={disabled}
            color={color}
            size={size}
            onChange={handleChange}
            {...other}
        />
    );
};

Switch.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * If true, the switch is checked.
     */
    checked: PropTypes.bool,

    /**
     * If true, the switch will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The color of the component.
     */
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),

    /**
     * The size of the component.
     */
    size: PropTypes.oneOf(['small', 'medium']),

    /**
     * Callback fired when the state is changed.
     */
    onChange: PropTypes.func,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

Switch.defaultProps = {
    checked: false,
};

export default Switch;
