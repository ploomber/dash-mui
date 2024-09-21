import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiAppBar, Box, Toolbar, Typography, Button, IconButton, Container, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * AppBar component using Material-UI.
 * It provides a header with customizable title, menu button, and navigation sections.
 */
const AppBar = ({ id, title, showMenuButton, position, color, sections, ...other }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <MuiAppBar position={position} color={color} {...other}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {showMenuButton && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleOpenNavMenu}
                            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {sections && Object.entries(sections).map(([name, path]) => (
                                <MenuItem key={name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {sections && Object.entries(sections).map(([name, path]) => (
                            <Button
                                key={name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={path}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
};

AppBar.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The title to be displayed in the AppBar.
     */
    title: PropTypes.string,

    /**
     * Whether to show the menu button.
     */
    showMenuButton: PropTypes.bool,

    /**
     * The position of the AppBar.
     */
    position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),

    /**
     * The color of the AppBar.
     */
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'inherit', 'transparent']),

    /**
     * A dictionary of sections to be displayed in the AppBar.
     * The keys are the section names and the values are the section paths.
     */
    sections: PropTypes.objectOf(PropTypes.string),
};

AppBar.defaultProps = {
    title: 'App Bar',
    showMenuButton: true,
    position: 'static',
    color: 'primary',
};

export default AppBar;
