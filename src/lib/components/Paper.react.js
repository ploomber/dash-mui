import React from 'react';
import PropTypes from 'prop-types';
import { Paper as MuiPaper, Box } from '@mui/material';

/**
 * Paper component using Material-UI.
 * It can be customized with various optional props like elevation and variant.
 * The 'id' prop is required for Dash callbacks.
 */
const Paper = ({ id, elevation, variant, children, setProps, ...other }) => {
    return (
        <MuiPaper id={id} elevation={elevation} variant={variant} {...other}>
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                {children}
            </Box>
        </MuiPaper>
    );
};

Paper.propTypes = {
    /**
     * The content of the Paper component.
     */
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The elevation of the Paper component.
     * Accepts values from 0 to 24.
     */
    elevation: PropTypes.number,

    /**
     * The variant to use.
     * Either 'elevation' or 'outlined'.
     */
    variant: PropTypes.oneOf(['elevation', 'outlined']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

Paper.defaultProps = {
    elevation: 1,
    variant: 'elevation',
};

export default Paper;
