import React from 'react';
import './App.css';
import Router from 'components/Router';

import {
    CssBaseline,
    StylesProvider,
    ThemeProvider as MuiThemeProvider,
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

import theme from 'config/theme';

const appTheme = responsiveFontSizes(createMuiTheme(theme));

function App() {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={appTheme}>
                <CssBaseline />
                <Router />
            </MuiThemeProvider>
        </StylesProvider>
    );
}

export default App;
