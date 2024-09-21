import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, MenuItem } from '@mui/material';

/**
 * Form component using Material-UI.
 * It creates a form with text fields and select fields based on the provided configuration.
 */
const Form = ({ id, fields, setProps, ...other }) => {
    const [values, setValues] = useState({});

    useEffect(() => {
        // Initialize values with default values from fields
        const initialValues = fields.reduce((acc, field) => {
            acc[field.id] = field.defaultValue || '';
            return acc;
        }, {});
        setValues(initialValues);
    }, [fields]);

    const handleChange = (fieldId, value) => {
        const newValues = { ...values, [fieldId]: value };
        setValues(newValues);
        if (setProps) {
            setProps({ values: newValues });
        }
    };

    const renderField = (field) => {
        const commonProps = {
            key: field.id,
            id: field.id,
            label: field.label,
            required: field.required,
            disabled: field.disabled,
            helperText: field.helperText,
            variant: field.variant || 'outlined',
            onChange: (e) => handleChange(field.id, e.target.value),
            value: values[field.id] || '',
        };

        if (field.type === 'select') {
            return (
                <TextField
                    {...commonProps}
                    select
                    slotProps={{
                        select: {
                            native: field.native,
                        },
                    }}
                >
                    {field.options.map((option) =>
                        field.native ? (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ) : (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        )
                    )}
                </TextField>
            );
        } else {
            return (
                <TextField
                    {...commonProps}
                    type={field.type || 'text'}
                    slotProps={{
                        input: {
                            readOnly: field.readOnly,
                        },
                    }}
                />
            );
        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { my: 1, width: '25ch', mr: 2 },
            }}
            noValidate
            autoComplete="off"
            id={id}
            {...other}
        >
            {fields.map(renderField)}
        </Box>
    );
};

Form.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * A list of field objects to be rendered in the Form.
     * Each object should have properties like 'id', 'label', 'type', etc.
     */
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string,
            required: PropTypes.bool,
            disabled: PropTypes.bool,
            defaultValue: PropTypes.string,
            helperText: PropTypes.string,
            variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
            readOnly: PropTypes.bool,
            shrinkLabel: PropTypes.bool,
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })),
            native: PropTypes.bool,
        })
    ).isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * An object containing the current values of the form fields.
     * Keys are field IDs and values are the current values.
     */
    values: PropTypes.object
};

Form.defaultProps = {
    fields: [],
    values: {}
};

export default Form;
