import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = ({
    id,
    topic,
    title,
    subtitle,
    content,
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
        <Card id={id} {...other}>
            <CardContent>
                {topic && (
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {topic}
                    </Typography>
                )}
                {title && (
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                )}
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subtitle}
                </Typography>
                {content && (
                    <Typography variant="body2">
                        {content}
                    </Typography>
                )}
            </CardContent>
            {buttonText && (
                <CardActions>
                    <Button size="small" onClick={handleClick}>{buttonText}</Button>
                </CardActions>
            )}
        </Card>
    );
};

CustomCard.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The topic of the card.
     */
    topic: PropTypes.string,

    /**
     * The title of the card.
     */
    title: PropTypes.string,

    /**
     * The subtitle of the card.
     */
    subtitle: PropTypes.string,

    /**
     * The content of the card.
     */
    content: PropTypes.string,

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
    n_clicks: 0,
};

export default CustomCard;
