import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
const breakpoints = createBreakpoints({});

let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#222',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: ['Inter'],
        //mainheader - h1, headerbody - body1, subheader - h4, subheaderbody - body2
        h1: {
            fontWeight: '800',
            // [breakpoints.between('xs', 'sm')]: {
            //     fontSize: '22px',
            // },
            // [breakpoints.between('sm', 'md')]: {
            //     fontSize: '10px',
            // },
            // [breakpoints.between('md', 'lg')]: {
            //     fontSize: '10px',
            // },
            // [breakpoints.between('lg', 'xl')]: {
            //     fontSize: '10px',
            // },
            // [breakpoints.up('xl')]: {
            //     fontSize: '10px',
            // },

            fontSize: '36px',
            [breakpoints.up('xs')]: {
                fontSize: '20px',
            },
            [breakpoints.up('sm')]: {
                fontSize: '24px',
            },
            [breakpoints.up('md')]: {
                fontSize: '28px',
            },
            [breakpoints.up('ls')]: {
                fontSize: '32px',
            },
            [breakpoints.up('xl')]: {
                fontSize: '36px',
            },
        },
        h2: {
            fontSize: '26px',
            fontWeight: '700',
        },

        h3: {
            fontSize: '25px',
            fontWeight: '800',
        },
        h4: {
            fontSize: '30px',
            fontWeight: '600',
            [breakpoints.up('xs')]: {
                fontSize: '16px',
            },
            [breakpoints.up('sm')]: {
                fontSize: '20px',
            },
            [breakpoints.up('md')]: {
                fontSize: '24px',
            },
            [breakpoints.up('ls')]: {
                fontSize: '28px',
            },
            [breakpoints.up('xl')]: {
                fontSize: '30px',
            },
        },
        h5: {
            fontSize: '24px',
            fontWeight: '800',
        },
        h6: {
            fontSize: '14px',
            fontWeight: '300',
        },
        body1: {
            fontSize: '24px',
            fontWeight: '300',
            [breakpoints.up('xs')]: {
                fontSize: '16px',
            },
            [breakpoints.up('sm')]: {
                fontSize: '18px',
            },
            [breakpoints.up('md')]: {
                fontSize: '20px',
            },
            [breakpoints.up('ls')]: {
                fontSize: '22px',
            },
            [breakpoints.up('xl')]: {
                fontSize: '24px',
            },
        },
        body2: {
            fontSize: '18px',
            fontWeight: '400',
            [breakpoints.up('xs')]: {
                fontSize: '14px',
            },
            [breakpoints.up('sm')]: {
                fontSize: '15px',
            },
            [breakpoints.up('md')]: {
                fontSize: '16px',
            },
            [breakpoints.up('ls')]: {
                fontSize: '17px',
            },
            [breakpoints.up('xl')]: {
                fontSize: '18px',
            },
        },
        body3: {
            fontFamily: ['Overpass'],
            fontSize: '15px',
            fontWeight: '400',
        },
        footerLogo: {
            color: '#FF6A29;',

            fontFamily: ['Overpass'],
            fontSize: '40px',
            fontWeight: '800',
        },
        footerTitle: {
            fontFamily: ['Overpass'],
            fontWeight: '800',
            fontSize: '20px',
        },
        footerLogoTagline: {
            fontFamily: ['Overpass'],
            fontSize: '22px',
            fontWeight: '800',
        },
        disclaimerText: {
            fontFamily: ['Overpass'],
            fontSize: '15px',
            fontWeight: '300',
        },
        NavLogo: {
            fontFamily: ['Overpass'],
            fontSize: '22px',
            fontWeight: '700',
            color: '#373737',
        },
        NavLink: {
            fontFamily: ['Overpass'],
            fontSize: '16px',
            fontWeight: '500',
            color: '#FF6A29',
        },
        Oops: {
            fontFamily: ['Overpass'],
            color: '#fff',
            fontWeight: '400',
            fontSize: '100px',
        },
        OopsTitle: {
            fontFamily: ['Overpass'],
            color: '#222',
            fontWeight: '400',
            fontSize: '35px',
        },
        OopsSubtitle: {
            fontFamily: ['Overpass'],
            color: '#222',
            fontWeight: '400',
            fontSize: '20px',
        },
    },
});
theme = responsiveFontSizes(theme);
export default theme;
