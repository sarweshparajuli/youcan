import { ThemeProvider } from "@mui/system";
import { useState } from 'react';
import {
    Grid,
    Button,
    Menu,
    MenuItem,
    Divider,
    Box,
    Paper,
  } from "@mui/material";
import Check from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import theme from "@styles/themes";

const OurButton = ({buttonItems}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 
    return(
    <ThemeProvider theme={theme}>
        <Grid container justifyContent="center">
            <Box textAlign="center">
                <Button
                variant="contained"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{backgroundColor: "#222"}}
                >
                Sort By
                </Button>
                <Paper sx={{ width: 320 }}>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                    {buttonItems.map(item =>
                    <Box>
                    <MenuItem>
                        <ListItemIcon>
                        <Check />
                        </ListItemIcon>
                        {item}
                    </MenuItem>
                    <Divider />
                    </Box>
                    )}
                    </Menu>
                </Paper>
            </Box>
        </Grid>
    </ThemeProvider>
    )
}

export default OurButton;