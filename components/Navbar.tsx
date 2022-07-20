/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Router } from 'next/router';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    ThemeProvider,
    IconButton,
    Drawer,
    useMediaQuery,
    List,
    ListItem,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import globalTheme from '../styles/themes';
import Image from 'next/image';
import logo from '../public/images/favicon.png';
import { css } from '@emotion/react';
import React from 'react';

const pages = [
    {
        title: 'Top Jobs',
        link: '/review',
    },
    {
        title: 'Retirement',
        link: '/retirement',
    },
    {
        title: 'Taxes',
        link: '/tax',
    },
    {
        title: 'Job Resources',
        link: '/salary-comparison',
    },
];

const NavDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const [logged, setLogged] = React.useState(false);
    const drawer = (
        <div>
            <List>
                {pages.map((item, index) => (
                    <ListItem button key={index.toString()}>
                        <IconButton
                            disableRipple={true}
                            disableFocusRipple={true}
                            href={item.link}
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography
                                variant="NavLink"
                                align="left"
                                sx={{ width: '100%' }}
                                css={css`
                                    color: black;
                                `}
                            >
                                {item.title}
                            </Typography>
                        </IconButton>
                    </ListItem>
                ))}
                {/* <ListItem button key={pages.length()}>
                        <IconButton
                            disableRipple={true}
                            disableFocusRipple={true}
                            href=''
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography
                                variant="NavLink"
                                align="left"
                                sx={{ width: '100%' }}
                                css={css`
                                    color: white;
                                    background-color: #5ea524;
                                `}
                            >
                                Sign Up
                            </Typography>
                        </IconButton>
                </ListItem>
                <ListItem button key={pages.length() + 1}>
                        <IconButton
                            disableRipple={true}
                            disableFocusRipple={true}
                            href=''
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography
                                variant="NavLink"
                                align="left"
                                sx={{ width: '100%' }}
                                css={css`
                                    color: black;
                                    border: 1px solid #5ea524;
                                `}
                            >
                                Login
                            </Typography>
                        </IconButton>
                </ListItem> */}
            </List>
        </div>
    );

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <IconButton disableRipple={true} disableFocusRipple={true} onClick={toggleDrawer}>
                <Menu />
            </IconButton>
            <Drawer open={open} anchor="right" onClose={toggleDrawer}>
                {drawer}
            </Drawer>
        </>
    );
};
const NavBar = () => {
    const theme = globalTheme;
    const smallDevice = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ThemeProvider theme={theme}>
            <AppBar
                elevation={0}
                css={css`
                    background-color: white;
                `}
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        disableRipple={true}
                        disableFocusRipple={true}
                        color="inherit"
                        href="/"
                    >
                        <Image layout="intrinsic" width={32} height={32} src={logo} />
                        <Box p="5px"></Box>
                        <Typography variant="NavLogo">YouCan</Typography>
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    {smallDevice ? (
                        <NavDrawer></NavDrawer>
                    ) : (
                        pages.map((item, index) => {
                            return (
                                <Box key={index.toString()} px="8px">
                                    <IconButton
                                        disableRipple={true}
                                        disableFocusRipple={true}
                                        href={item.link}
                                    >
                                        <Typography
                                            textAlign="center"
                                            variant="NavLink"
                                            css={css`
                                                color: black;
                                            `}
                                        >
                                            {item.title}
                                        </Typography>
                                    </IconButton>
                                </Box>
                            );
                        })
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar />
        </ThemeProvider>
    );
};
export default NavBar;
