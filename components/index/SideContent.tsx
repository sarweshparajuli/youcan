/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import {
    Typography,
    Box,
    Grid,
    Card,
    Button,
    useMediaQuery,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { css } from '@emotion/react';
import { styled } from '@mui/system';
import theme from "../../styles/themes";


type FeatureObject = {
    title: string,
    bgColor: string,
    btnText: string,
    content: string,
    img: StaticImageData,
    flexDir: string,
  };

const StyledCard = styled(Card)`
    box-shadow: 0px 3.49236px 14.3575px rgba(0, 95, 185, 0.4);
    border-radius: 8px;
`;
const SideContent = ({featureObject}) => {
    const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box pt="40px" sx={{backgroundColor: `${featureObject.bgColor}`}}>
            <Box py="40px" px="40px" mx="1.0rem">
                <Grid container direction={smallDevice ? "column" : featureObject.flexDir} justifyContent="space-between" spacing={6}>
                    <Grid item align="center" xs={4}>
                        <StyledCard css={smallDevice ? css`max-width: 50vw; max-height: 30vw;` : css`max-width: 50vw;`}>
                            <Image layout={smallDevice ? "" : "responsive"} objectFit='cover' src={featureObject.img}/>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction="column" justifyContent="space-between" spacing={6} >
                            <Grid item>
                                <Typography variant="h4" align={smallDevice ? "center" : "left"}>
                                    {featureObject.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" align={smallDevice ? "center" : "left"}>
                                    {featureObject.content}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="center">
                                    <Button size="large" variant="contained" align={smallDevice ? "center" : "left"}>{featureObject.btnText}</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SideContent;
