import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu as MuiMenu, MenuItem } from '@mui/material';

const Menu = ({
    id,
    buttonText,
    menuItems,
    onItemClick,
    setProps,
    selectedIndex,  
    ...other
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const handleClose = () => {
        setAnchorEl(null); 
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
                disablePortal  
                {...other}
            >
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        disabled={item.disabled || false} 
                    >
                        {typeof item === 'object' ? item.label : item} 
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
