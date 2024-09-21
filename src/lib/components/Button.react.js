import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';

/**
 * Button component using Material-UI.
 * It can be customized with various optional props to change its appearance and behavior.
 * The 'id' prop is required.
 */
const Button = ({ children, id, variant, color, size, disabled, fullWidth, href, startIcon, endIcon, onClick, setProps, n_clicks, ...other }) => {
    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (setProps) setProps({ n_clicks: (n_clicks || 0) + 1 });
    };

    const StartIcon = startIcon && MuiIcons[startIcon];
    const EndIcon = endIcon && MuiIcons[endIcon];

    return (
        <MuiButton
            id={id}
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
            fullWidth={fullWidth}
            href={href}
            startIcon={StartIcon}
            endIcon={EndIcon}
            onClick={handleClick}
            {...other}
        >
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    /**
     * The content of the button.
     */
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),

    /**
     * The color of the component.
     */
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

    /**
     * The size of the component.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,

    /**
     * The URL to link to when the button is clicked.
     */
    href: PropTypes.string,

    /**
     * Icon placed before the children. Should be a string matching an icon name from @mui/icons-material.
     */
    startIcon: PropTypes.string,

    /**
     * Icon placed after the children. Should be a string matching an icon name from @mui/icons-material.
     */
    endIcon: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Number of times the button has been clicked.
     */
    n_clicks: PropTypes.number,

    /**
     * Callback fired when the button is clicked.
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    n_clicks: 0,
};

export default Button;
