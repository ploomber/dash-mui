// popover.react.js
import React from 'react';
import PropTypes from 'prop-types';
import { Popover as MuiPopover, Typography, Button } from '@mui/material';

/**
 * Popover component using Material-UI.
 * A customizable popover with a button to control its visibility.
 */
const Popover = ({
    id,
    content,
    anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
    open,
    setProps,
    children,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (setProps) setProps({ open: !open });
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (setProps) setProps({ open: false });
    };

    return (
        <div>
            <Button
                aria-describedby={open ? id : undefined}
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                {children || "Open Popover"}
            </Button>
            <MuiPopover
                id={id}
                open={Boolean(anchorEl && open)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={anchorOrigin}
            >
                <Typography sx={{ p: 2 }}>{content}</Typography>
            </MuiPopover>
        </div>
    );
};

Popover.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The content to display within the Popover.
     */
    content: PropTypes.string.isRequired,

    /**
     * Anchor origin for the popover positioning.
     */
    anchorOrigin: PropTypes.shape({
        vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
        horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    }),

    /**
     * Controls the open state of the Popover.
     */
    open: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Popover;
