/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography, Grid, Box, Container, useMediaQuery, Button, Card, CardActions, CardMedia } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import mobile from "../../public/images/mobile-in-hand.png";
import gradient from "../../public/images/gradient.png";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/themes";

type RVItem = {
  id: number,
  img: StaticImageData,
  title: string,
  buttonTitle: string,
  buttonColor: string,
  btnTextColor: string
}

const GridMenu = () => {
  const laptopImageWidth = 572;
  const laptopImageAspectRatio = 1.25;
  const itemsForRV : RVItem[] = [{
    id: 1,
    img: mobile,
    title: '',
    buttonTitle: "Top Chem Jobs",
    buttonColor: "#dbc8c1",
    btnTextColor: 'black'
  }, {
    id: 2,
    img: mobile,
    title: '',
    buttonTitle: "Top Frontend Jobs",
    buttonColor: "#dbc8c1",
    btnTextColor: 'black'
  }, {
    id: 3,
    img: gradient,
    title: 'What job would you like to see?',
    buttonTitle: "Search Now",
    buttonColor: "#1877f2",
    btnTextColor: 'white'
  }];
  
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Box py="40px" sx={{backgroundColor: '#f5f3f3'}}>
        <Typography variant="h4" pl="6%">
              Find Top Jobs
        </Typography>
        <Grid
          py="30px"
          px="40px"
          container
          direction={smallDevice ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          {itemsForRV.map(item => { return(
                      <Grid item md={4} key={item.id}>
                        <Box sx={{position: 'relative', alignItems: 'center'}}>
                          {item.img ? <Image
                            src={item.img}
                            width={laptopImageWidth}
                            height={laptopImageWidth / laptopImageAspectRatio}
                          ></Image> : <></>}
                          {item.title ? <Typography align='center' variant='body1' sx={{position: "absolute",top: '40%',left: "50%",transform: "translate(-50%, -50%)",textAlign: 'center'}}>
                            {item.title}
                          </Typography> : <></>}
                          <Typography sx={{position: "absolute",top: '85%',left: "50%",transform: "translate(-50%, -50%)",textAlign: 'center'}}>
                          <Link href={`/review?title=${item.buttonTitle}`}>
                            <Button size="large" variant="contained" sx={{backgroundColor:`${item.buttonColor}`,
                                                           color: `${item.btnTextColor}`,
                                                           transform: "translate(-50%, -50%)",
                                                           position: 'absolute',
                                                           top: '80%',
                                                           left: '50%',
                                                           whiteSpace: 'nowrap', 
                                                           }}>{item.buttonTitle}</Button>
                          </Link>
                          </Typography>
                        </Box>
                    </Grid>
          )})}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

const ResponsiveGridMenu = () => {
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {smallDevice ? (
        <Container>
          <GridMenu />
        </Container>
      ) : (
        <GridMenu />
      )}
    </>
  );
};
export default ResponsiveGridMenu;
