/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import {
  Typography,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import landingImage from "../../public/images/ucanhero.jpg";
import SideContent from "@components/index/SideContent";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/themes";
import homeStyles from "../../styles/Home.module.css"
import suits from '../../public/images/suits.jpg';

const Landing = () => {
  const featureObject = {
    title: 'Top Jobs',
    bgColor: 'white',
    btnText: 'See Top Jobs',
    content: 'Find the best jobs for you with reviews. Jobs are rated and reviewed by the community and in no way are influenced by the companies behind the listings.',
    img: suits,
    flexDir: 'row',
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <div className={homeStyles.heroimage}>
          <Image src={landingImage} objectFit='cover' layout="fill"/>
          <Typography variant="h1" align="center" sx={{position: 'absolute',
                                        top: '10%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff'}}
          >Enjoy Your Work Life to the Fullest</Typography>
          <Typography variant="h4" align="center" mt="70px" sx={{position: 'absolute',
                                        top: '15%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff'}}
          >Find the jobs you'll love with us!</Typography>        
        </div>
        
      </Box>
      <SideContent featureObject={featureObject} />
    </ThemeProvider>
  );
};
const ResponsiveLanding = () => {
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      {smallDevice ? (
        <Container sx={{paddingLeft: '0', paddingRight: '0'}}>
          <Landing />
        </Container>
      ) : (
        <Landing />
      )}
    </div>
  );
};
export default ResponsiveLanding;
