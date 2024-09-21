import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';


const MuiGrid = ({ id, children, spacing, direction, ...other }) => {
    return (
        <Grid
            id={id}
            container
            spacing={spacing}
            direction={direction}
            {...other}
        >
            {children}
        </Grid>
    );
};

MuiGrid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The content of the layout.
     */
    children: PropTypes.node,

    /**
     * Defines the space between the type `item` components.
     */
    spacing: PropTypes.number,

    /**
     * Defines the `flex-direction` style property.
     */
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
};

MuiGrid.defaultProps = {
    spacing: 3,
    direction: 'row',
};

export default MuiGrid;
