// src/lib/components/SpeedDial.react.js
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

/**
 * Icon mapping for SpeedDial actions.
 */
const iconMap = {
    Save: <SaveIcon />,
    Print: <PrintIcon />,
    Share: <ShareIcon />,
};

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
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.id}
                        icon={iconMap[action.icon] || <SpeedDialIcon />}
                        tooltipTitle={action.tooltip}
                        onClick={() => {
                            if (setProps) {
                                setProps({
                                    n_clicks: action.id,  // Update n_clicks with the action's ID
                                });
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};

CustomSpeedDial.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * ARIA label for accessibility.
     */
    ariaLabel: PropTypes.string.isRequired,

    /**
     * Direction in which the actions open.
     */
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

    /**
     * List of actions to display in the Speed Dial.
     * Each action should include an icon, tooltip, and id.
     */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            tooltip: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Tracks the ID of the last clicked Speed Dial action.
     */
    n_clicks: PropTypes.string,
};

CustomSpeedDial.defaultProps = {
    n_clicks: "",
};

export default CustomSpeedDial;
