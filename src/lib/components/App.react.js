import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';

const App = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            {children}
        </React.Fragment>
    );
};

App.propTypes = {
    children: PropTypes.node,
};

App.defaultProps = {
    children: null,
};

export default App;
