import { ThemeProvider } from "@mui/system";
import {
    Typography,
    Grid,
    Container,
  } from "@mui/material";
import theme from "@styles/themes";
import OurCard from './Card'
import OurButton from "./Button";
import { ItemObject, PageObject } from "@pages/review"



const Heading = ({titleObject}) => {
    return (
    <ThemeProvider theme={theme}>
        <Container py="40px">
            <Typography variant="h2">{titleObject.title} for you</Typography>
            <Typography variant="body2" py={4}>{titleObject.text}</Typography>
            <OurButton buttonItems={Object.keys(titleObject.items[0].listItems)}/>
            <Grid container flexDirection="column" py="40px" spacing={3}>
                {titleObject.items.map((item : ItemObject, index: number) => <OurCard object={item} key={index}/>)}
            </Grid>
        </Container>
    </ThemeProvider>
    )
}

export default Heading;