import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';

/**
 * Backdrop component using Material-UI.
 * It shows an overlay backdrop, useful for loading or other UI feedback.
 */
const Backdrop = ({ id, open, invisible, setProps }) => {

    const handleClose = () => {
        if (setProps) setProps({ open: false });
    };

    return (
        <MuiBackdrop
            id={id}
            open={open}
            invisible={invisible}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </MuiBackdrop>
    );
};

Backdrop.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * If true, the backdrop is open.
     */
    open: PropTypes.bool,

    /**
     * If true, the backdrop is invisible.
     */
    invisible: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

Backdrop.defaultProps = {
    open: false,
    invisible: false,
};

export default Backdrop;
