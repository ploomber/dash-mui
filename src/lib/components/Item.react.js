import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';

const Item = ({ children, size, ...other }) => {
    return (
        <Grid size={size} {...other}>
            {children}
        </Grid>
    );
};

Item.propTypes = {
    /**
     * The content of the item.
     */
    children: PropTypes.node,

    /**
     * The size of the item.
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Item.defaultProps = {
    size: 'auto',
};

export default Item;
