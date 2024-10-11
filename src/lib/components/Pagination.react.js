import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({
    id,
    count,
    page,
    defaultPage,
    siblingCount,
    boundaryCount,
    variant,
    shape,
    size,
    color,
    disabled,
    showFirstButton,
    showLastButton,
    hidePrevButton,
    hideNextButton,
    onChange,
    setProps,
    ...other
}) => {
    const handleChange = (event, value) => {
        if (onChange) onChange(event, value);
        if (setProps) setProps({ page: value });
    };

    return (
        <MuiPagination
            id={id}
            count={count}
            page={page}
            defaultPage={defaultPage}
            siblingCount={siblingCount}
            boundaryCount={boundaryCount}
            variant={variant}
            shape={shape}
            size={size}
            color={color}
            disabled={disabled}
            showFirstButton={showFirstButton}
            showLastButton={showLastButton}
            hidePrevButton={hidePrevButton}
            hideNextButton={hideNextButton}
            onChange={handleChange}
            {...other}
        />
    );
};

Pagination.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The total number of pages.
     */
    count: PropTypes.number.isRequired,

    /**
     * The current page number.
     */
    page: PropTypes.number,

    /**
     * The default page number (uncontrolled component).
     */
    defaultPage: PropTypes.number,

    /**
     * Number of always visible pages before and after the current page.
     */
    siblingCount: PropTypes.number,

    /**
     * Number of always visible pages at the beginning and end.
     */
    boundaryCount: PropTypes.number,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['text', 'outlined']),

    /**
     * The shape of the pagination items.
     */
    shape: PropTypes.oneOf(['circular', 'rounded']),

    /**
     * The size of the pagination component.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /**
     * The color of the component.
     */
    color: PropTypes.oneOf(['standard', 'primary', 'secondary']),

    /**
     * If true, the pagination component will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, show the first-page button.
     */
    showFirstButton: PropTypes.bool,

    /**
     * If true, show the last-page button.
     */
    showLastButton: PropTypes.bool,

    /**
     * If true, hide the previous-page button.
     */
    hidePrevButton: PropTypes.bool,

    /**
     * If true, hide the next-page button.
     */
    hideNextButton: PropTypes.bool,

    /**
     * Callback fired when the page is changed.
     */
    onChange: PropTypes.func,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

Pagination.defaultProps = {
    count: 1,
    page: 1,
    defaultPage: 1,
    siblingCount: 1,
    boundaryCount: 1,
    variant: 'text',
    shape: 'circular',
    size: 'medium',
    color: 'standard',
    disabled: false,
    showFirstButton: false,
    showLastButton: false,
    hidePrevButton: false,
    hideNextButton: false,
};

export default Pagination;
