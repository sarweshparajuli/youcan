import { ThemeProvider } from "@mui/system";
import {
    Typography,
    Grid,
    Button,
    List,
    ListItem,
    Divider,
    Box,
    Paper,
    useMediaQuery,
  } from "@mui/material";
import Rating from '@mui/material/Rating';
import AtntLogo from '../../public/images/AT&T.png'
import Image from 'next/image'
import theme from "@styles/themes";
import Link from "next/link";

const OurCard = ({object}) => {
    const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <ThemeProvider theme={theme}>
            <Grid item>
                <Paper py="20px" px="20px">
                    <Grid container alignItems="center" justifyContent="space-evenly" flexDirection={smallDevice ? "column" : "row"} spacing={smallDevice ? 2 : ''} py="20px">
                        <Grid item xs={smallDevice ? '' : 2}>
                            <Grid container alignItems="center" justifyContent="center" flexDirection={smallDevice ? "row" : "column"} spacing={2}>
                                <Grid item>
                                    <Image layout="fixed" height={100} width={100} src={AtntLogo}/>
                                </Grid>
                                <Grid item align="center">
                                    <Typography variant="h4" align="center">{object.companyName}</Typography>
                                    <Typography variant="body3">Overall Rating</Typography><br/>
                                    <Rating value={object.overallRating} /><br/>
                                    <Typography variant="body2">{object.overallRating}.0/5</Typography>
                                    <Typography variant="body3">(Based on {object.reviewNumber} reviews)</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {smallDevice ? <></> :<Divider sx={{paddingLeft: '20px'}} orientation="vertical" variant="middle" flexItem/>}
                        <Grid item xs={smallDevice ? '' : 8} align={smallDevice ? "center" : "left"}>
                            <Typography variant="h4" align="center">{object.companyOffer}</Typography>
                            <Box alignItems="center" display="flex" justifyContent={smallDevice ? "center" : ""}>
                                <List sx={smallDevice ? {} : {display: "flex", flexFlow: "column wrap", height: "150px", width: "30vw"}}>
                                    <ListItem alignItems="center">
                                        <Typography variant="body2">Salary: {object.listItems.salary}</Typography>
                                    </ListItem>
                                    <ListItem alignItems="center">
                                        <Typography variant="body2">Reliability: </Typography> <Rating value={object.listItems.reliability}/>
                                    </ListItem>
                                    <ListItem alignItems="center">
                                        <Typography variant="body2">Workload: {object.listItems.workload}</Typography>
                                    </ListItem>
                                </List>
                            </Box>
                            <Typography variant="body3" px="20px">
                                {object.offerText}
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" py="20px">
                            {object.btnLink ? 
                            <Link href={`/review?title=${object.companyOffer}`}>
                                <Button variant="contained" sx={{backgroundColor: "#d9d9d9", color: "black", textTransform: "none"}}>See All Reviews</Button>
                            </Link> 
                            : 
                                <Button variant="contained" sx={{backgroundColor: "#d9d9d9", color: "black", textTransform: "none"}}>See All Reviews</Button>
                            }
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </ThemeProvider>
    )
}

export default OurCard;