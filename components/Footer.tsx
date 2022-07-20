/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography, Container, Grid, Box, Stack, Divider, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import footerLogo from '../public/images/favicon.png';
import { css } from '@emotion/react';
import { ThemeProvider } from '@mui/system';
import theme from '../styles/themes';

const Footer = () => {
    const smallDevice = useMediaQuery(theme.breakpoints.down('md'));
    const links = ['About', 'Terms and Conditions', 'Privacy Policy', 'Data Policy'];
    return (
        <ThemeProvider theme={theme}>
            <Box pt="5%" pb="7%" px="10%">
                <Grid
                    container
                    direction="row"
                    justifyContent={smallDevice ? 'center' : 'space-between'}
                    alignItems="start"
                    spacing={5}
                >
                    {/* Brand===========================================================*/}
                    <Grid item sm={12} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems={smallDevice ? 'center' : 'left'}
                            spacing={2}
                        >
                            <Grid item>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Grid item xs={3}>
                                        <Image
                                            layout="intrinsic"
                                            align='left'
                                            src={footerLogo}
                                            width="65px"
                                            height="65px"
                                        ></Image>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography
                                            align="left"
                                            variant="h2"
                                        >
                                            YouCan
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Box display="flex">
                                    <Typography
                                        align="left"
                                        variant="body2"
                                    >
                                        Find the best jobs for you now!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>{' '}
                    {/* Links===========================================================*/}
                    <Grid item sm={12} md={6}>
                        <Box>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="start"
                                spacing={2}
                            >
                                {links.map((item, index) => {
                                    return (
                                        <Grid key={index.toString()} item xs={3}>
                                            <Stack>
                                                <Typography align="center" variant="body2" >
                                                    {item}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </Grid>
                    {/* Disclaimer===========================================================*/}
                    <Grid item sm={12} md={3}>
                        <Typography
                            variant="body2"
                            align="center"
                        >&copy; 2022 YouCan, Inc. <br/> All Rights Reserved.
                            
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
const ResponsiveFooter = () => {
    const smallDevice = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div
            css={css`
                background-color: #97a58c;
            `}
        >
            {smallDevice ? (
                <Container>
                    <Footer />
                </Container>
            ) : (
                <Footer />
            )}
        </div>
    );
};
export default ResponsiveFooter;
