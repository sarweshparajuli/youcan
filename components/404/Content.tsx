/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import {
  Typography,
  Box,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import image404 from "../../public/images/404.png";
import { css } from "@emotion/react";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/themes";

const Content = () => {
  const landingImageWidth = 528;
  const landingImageAspectRatio = 1.87;
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          height="90vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column">
            <Image
              width={landingImageWidth}
              height={landingImageWidth / landingImageAspectRatio}
              src={image404}
            />
            <Box sx={{ p: "10px" }}></Box>
            <Typography align="center" variant="OopsTitle">
              Something went wrong!
            </Typography>
            <Box sx={{ p: "10px" }}></Box>
            <Typography align="center" variant="OopsSubtitle">
              But don’t let that stop you and keep browsing!
            </Typography>
            <Box
              sx={{ pt: "20px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                href="/"
                variant="contained"
                disableElevation={true}
                css={css`
                    width: 193px;
                    font-family: Overpass;
                    font-size: 15px;
                    font-weight: 800;
										border
                  `}
              >
                Back to Home
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

const ResponsiveContent = () => {
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      css={css`
        background: linear-gradient(183.09deg, #222 10.2%, #ffffff 91.73%);
      `}
    >
      {smallDevice ? (
        <Container>
          <Content />
        </Container>
      ) : (
        <Content />
      )}
    </div>
  );
};
export default ResponsiveContent;
