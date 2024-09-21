import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as MuiButtonGroup, Button } from '@mui/material';

/**
 * ButtonGroup component using Material-UI.
 * It provides a group of buttons with customizable variant, size, color, orientation, and aria-label.
 * The component updates a property with the ID of the last clicked button.
 */
const ButtonGroup = ({ id, variant, size, color, orientation, ariaLabel, buttons, setProps, ...other }) => {
    const [lastClicked, setLastClicked] = useState(null);

    const handleClick = (buttonId) => {
        setLastClicked(buttonId);
        if (setProps) {
            setProps({ lastClicked: buttonId });
        }
    };

    return (
        <MuiButtonGroup
            id={id}
            variant={variant}
            size={size}
            color={color}
            orientation={orientation}
            aria-label={ariaLabel}
            {...other}
        >
            {buttons.map(({ id: buttonId, label }) => (
                <Button key={buttonId} onClick={() => handleClick(buttonId)}>
                    {label}
                </Button>
            ))}
        </MuiButtonGroup>
    );
};

ButtonGroup.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The variant to use for the ButtonGroup.
     */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),

    /**
     * The size of the ButtonGroup.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /**
     * The color of the ButtonGroup.
     */
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),

    /**
     * The orientation of the ButtonGroup.
     */
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * The aria-label for the ButtonGroup.
     */
    ariaLabel: PropTypes.string,

    /**
     * A list of button objects to be rendered in the ButtonGroup.
     * Each object should have 'id' and 'label' properties.
     */
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * The ID of the last clicked button.
     */
    lastClicked: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

ButtonGroup.defaultProps = {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    orientation: 'horizontal',
    ariaLabel: 'button group',
    buttons: [],
};

export default ButtonGroup;
