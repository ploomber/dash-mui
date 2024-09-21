import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

/**
 * CheckBoxTable is a component that displays data in a tabular format with checkboxes.
 * It takes properties `data` and `columns` which define the table structure and content.
 */
const CheckBoxTable = (props) => {
    const { id, data, columns, setProps } = props;

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Paper sx={{ height: 400, width: '100%' }} id={id}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                onRowSelectionModelChange={(newSelectionModel) => {
                    setProps({ selectedRows: newSelectionModel });
                }}
            />
        </Paper>
    );
}

CheckBoxTable.defaultProps = {
    data: [],
    columns: []
};

CheckBoxTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The data to be displayed in the table.
     * It should be an array of objects, where each object represents a row.
     */
    data: PropTypes.arrayOf(PropTypes.object),

    /**
     * The column definitions for the table.
     * It should be an array of objects, where each object defines a column.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({
        field: PropTypes.string.isRequired,
        headerName: PropTypes.string.isRequired,
        width: PropTypes.number,
        type: PropTypes.string,
        description: PropTypes.string,
        sortable: PropTypes.bool,
        valueGetter: PropTypes.func
    })),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default CheckBoxTable;
