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
    selectedIndex,  // This is passed in from Dash but should not directly control open/close
    ...other
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);  // Set the anchor element to open the menu
    };

    const handleClose = () => {
        setAnchorEl(null);  // Close the menu
    };

    const handleMenuItemClick = (event, index) => {
        if (onItemClick) onItemClick(event, index);  // Trigger callback on item click
        if (setProps) setProps({ selectedIndex: index });  // Update Dash's selected index state
        handleClose();  // Close the menu after an item is selected
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
                anchorEl={anchorEl}  // Control open/close state purely through React's anchorEl
                open={Boolean(anchorEl)}  // Menu is open when anchorEl is not null
                onClose={handleClose}
                disablePortal  // This ensures the menu is rendered within the same DOM tree
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
