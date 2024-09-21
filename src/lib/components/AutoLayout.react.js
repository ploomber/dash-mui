import React from 'react';
import PropTypes from 'prop-types';
import { Grid2 as MuiGrid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    '&.MuiGrid-container': {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                    },
                    '&.MuiGrid-item': {
                        minWidth: 0,
                    },
                },
            },
        },
    },
});

const AutoLayout = ({ id, children, spacing, direction, ...other }) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiGrid
                id={id}
                container
                spacing={spacing}
                direction={direction}
                {...other}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === AutoLayoutItem) {
                        return React.cloneElement(child);
                    }
                    return child;
                })}
            </MuiGrid>
        </ThemeProvider>
    );
};

AutoLayout.propTypes = {
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

AutoLayout.defaultProps = {
    spacing: 3,
    direction: 'row',
};

const AutoLayoutItem = ({ children, size, ...other }) => {
    const gridSize = size === 'grow' ? { xs: 'auto' } : { xs: size };
    return (
        <MuiGrid item {...gridSize} {...other}>
            {children}
        </MuiGrid>
    );
};

AutoLayoutItem.propTypes = {
    /**
     * The content of the item.
     */
    children: PropTypes.node,

    /**
     * Defines the size of the item. Can be a number (1-12) or 'grow'.
     */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['grow'])]),
};

AutoLayoutItem.defaultProps = {
    size: 'grow',
};

AutoLayout.Item = AutoLayoutItem;

export default AutoLayout;

