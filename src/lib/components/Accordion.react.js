import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const CustomAccordion = ({
    id,
    panels,
    setProps,
    ...other
}) => {
    const handleChange = (panel) => (event, isExpanded) => {
        if (setProps) {
            setProps({
                panels: panels.map(p =>
                    p.id === panel.id ? { ...p, expanded: isExpanded } : p
                )
            });
        }
    };

    return (
        <div id={id} {...other}>
            {panels.map((panel, index) => (
                <Accordion
                    key={panel.id}
                    expanded={panel.expanded}
                    onChange={handleChange(panel)}
                    defaultExpanded={panel.defaultExpanded}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography>{panel.summary}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{panel.details}</Typography>
                    </AccordionDetails>
                    {panel.actions && (
                        <AccordionActions>
                            {panel.actions.map((action, actionIndex) => (
                                <Button key={actionIndex} onClick={() => action.onClick && action.onClick()}>
                                    {action.label}
                                </Button>
                            ))}
                        </AccordionActions>
                    )}
                </Accordion>
            ))}
        </div>
    );
};

CustomAccordion.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * An array of panel objects to be rendered in the accordion.
     */
    panels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        expanded: PropTypes.bool,
        defaultExpanded: PropTypes.bool,
        actions: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func
        }))
    })).isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

CustomAccordion.defaultProps = {
    panels: []
};

export default CustomAccordion;
