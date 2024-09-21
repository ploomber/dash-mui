import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = ({
    id,
    title,
    subtitle,
    mainContent,
    secondaryContent,
    buttonText,
    setProps,
    n_clicks,
    ...other
}) => {
    const handleClick = () => {
        const newClicks = (n_clicks || 0) + 1;
        if (setProps) {
            setProps({ n_clicks: newClicks });
        }
    };

    return (
        <Card sx={{ minWidth: 275 }} id={id} {...other}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {subtitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {mainContent}
                </Typography>
                <Typography variant="body2">
                    {secondaryContent}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>{buttonText}</Button>
            </CardActions>
        </Card>
    );
};

CustomCard.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The title of the card.
     */
    title: PropTypes.string,

    /**
     * The subtitle of the card.
     */
    subtitle: PropTypes.string,

    /**
     * The main content of the card.
     */
    mainContent: PropTypes.string,

    /**
     * The secondary content of the card.
     */
    secondaryContent: PropTypes.string,

    /**
     * The text for the button.
     */
    buttonText: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Number of times the button has been clicked.
     */
    n_clicks: PropTypes.number,
};

CustomCard.defaultProps = {
    title: 'Word of the Day',
    subtitle: 'benevolent',
    mainContent: 'adjective',
    secondaryContent: 'well meaning and kindly.\n"a benevolent smile"',
    buttonText: 'Learn More',
    n_clicks: 0,
};

export default CustomCard;
