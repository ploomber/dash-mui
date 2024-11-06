import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as MuiIcons from '@mui/icons-material';

/**
 * Custom SpeedDial component using Material-UI.
 */
const CustomSpeedDial = ({ id, ariaLabel, actions, direction = "up", setProps, n_clicks, ...other }) => {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                id={id}
                ariaLabel={ariaLabel}
                icon={<SpeedDialIcon />}
                direction={direction}
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                {...other}
            >
                {actions.map((action) => {
                    const IconComponent = MuiIcons[action.icon] || SpeedDialIcon;
                    return (
                        <SpeedDialAction
                            key={action.id}
                            icon={<IconComponent />}
                            tooltipTitle={action.tooltip}
                            onClick={() => {
                                if (setProps) {
                                    setProps({
                                        n_clicks: action.id,  // Update n_clicks with the action's ID
                                    });
                                }
                            }}
                        />
                    );
                })}
            </SpeedDial>
        </Box>
    );
};

CustomSpeedDial.propTypes = {
    id: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,  // Icon name as a string (e.g., "Save", "Print", etc.)
            tooltip: PropTypes.string.isRequired,
        })
    ).isRequired,
    setProps: PropTypes.func,
    n_clicks: PropTypes.string,
};

CustomSpeedDial.defaultProps = {
    n_clicks: "",
};

export default CustomSpeedDial;
