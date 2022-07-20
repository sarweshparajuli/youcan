import NavBar from '@components/Navbar';
import Footer from '@components/Footer';
import Content from '@components/404/Content';
import { RedocStandalone, Throttle } from 'redoc';
import React from 'react';
import { ThemeProvider } from '@mui/styles';
import { darken, desaturate, lighten, readableColor, transparentize } from 'polished';
import redocTheme from '../styles/redocThemes';
import theme from '../styles/themes';

function documentation() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <RedocStandalone
                specUrl="http://localhost:8888/.netlify/functions/api/swagger.json"
                options={{
                    theme: redocTheme,
                    generateCodeSamples: {
                        languages: [
                            { lang: 'curl' },
                            { lang: 'Node.js' },
                            { lang: 'JavaScript', label: 'JS' },
                        ],
                    },
                    pagination: 'section',
                    defaultSampleLanguage: 'JavaScript',
                    hideRightPanel: true,
                    hideRequestPayloadSample: true,
                }}
            />
            <Footer />
        </ThemeProvider>
    );
}

export default documentation;
