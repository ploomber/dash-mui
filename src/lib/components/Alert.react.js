import React from 'react';
import PropTypes from 'prop-types';
import { Alert as MuiAlert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Alert = ({
    id,
    severity,
    variant,
    onClose,
    action,
    children,
    setProps,
    ...other
}) => {
    const handleClose = (event) => {
        if (onClose) onClose(event);
        if (setProps) setProps({ open: false });
    };

    return (
        <MuiAlert
            id={id}
            severity={severity}
            variant={variant}
            action={
                action || (
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                )
            }
            {...other}
        >
            {children}
        </MuiAlert>
    );
};

Alert.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The main content displayed in the alert.
     */
    children: PropTypes.node,

    /**
     * The severity of the alert.
     */
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),

    /**
     * Callback fired when the component requests to be closed.
     */
    onClose: PropTypes.func,

    /**
     * The action to display. It renders after the message, at the end of the alert.
     */
    action: PropTypes.node,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * If true, the alert is displayed.
     */
    open: PropTypes.bool,
};

Alert.defaultProps = {
    severity: 'success',
    variant: 'standard',
    open: true,
};

export default Alert;
