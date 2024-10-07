import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu as MuiMenu, MenuItem } from '@mui/material';

/**
 * Menu component using Material-UI.
 * It includes a button that opens the menu when clicked.
 * The 'id' prop is required.
 */
const Menu = ({
    id,
    buttonText,
    menuItems,
    onItemClick,
    setProps,
    ...other
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (setProps) setProps({ open: true });
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (setProps) setProps({ open: false });
    };

    const handleMenuItemClick = (event, index) => {
        if (onItemClick) onItemClick(event, index);
        if (setProps) setProps({ selectedIndex: index });
        handleClose();
    };

    return (
        <div>
            <Button
                id={`${id}-button`}
                aria-controls={id}
                aria-haspopup="true"
                onClick={handleButtonClick}
            >
                {buttonText}
            </Button>
            <MuiMenu
                id={id}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                {...other}
            >
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        disabled={item.disabled || false}  // Handle disabled state if the item is an object
                    >
                        {typeof item === 'object' ? item.label : item}  {/* Handle either string or object */}
                    </MenuItem>
                ))}
            </MuiMenu>
        </div>
    );
};

Menu.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The text displayed on the button that opens the menu.
     */
    buttonText: PropTypes.string.isRequired,

    /**
     * Array of menu item labels or objects.
     */
    menuItems: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string, 
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                disabled: PropTypes.bool,
                icon: PropTypes.string,
            })
        ])
    ).isRequired,

    /**
     * Callback fired when a menu item is clicked.
     */
    onItemClick: PropTypes.func,

    /**
     * Index of the selected menu item.
     */
    selectedIndex: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

Menu.defaultProps = {
    buttonText: 'Open Menu',
    menuItems: [],
};

export default Menu;
