import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/**
 * Table is a component that displays data in a tabular format.
 * It takes a property `data` which is an array of objects representing the table rows.
 */
const MUITable = (props) => {
    const { id, data, setProps, dense, stickyHeader } = props;

    // Extract column names from the first data item
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <TableContainer component={Paper} id={id} sx={{ maxHeight: stickyHeader ? 440 : 'none' }}>
            <Table sx={{ minWidth: 650 }} size={dense ? "small" : "medium"} aria-label={dense ? "dense table" : "simple table"} stickyHeader={stickyHeader}>
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index} align={index === 0 ? "left" : "right"} style={{ minWidth: 170 }}>
                                {column.toUpperCase()}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover
                            role="checkbox"
                            tabIndex={-1}
                        >
                            {columns.map((column, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    align={cellIndex === 0 ? "left" : "right"}
                                    component={cellIndex === 0 ? "th" : "td"}
                                    scope={cellIndex === 0 ? "row" : undefined}
                                >
                                    {row[column]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

MUITable.defaultProps = {
    data: [],
    dense: false,
    stickyHeader: false
};

MUITable.propTypes = {
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
     * If true, the table will be rendered in a dense layout.
     */
    dense: PropTypes.bool,

    /**
     * If true, the table header will be sticky.
     */
    stickyHeader: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default MUITable;
