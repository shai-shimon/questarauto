import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Menu, Sliding, Main } from '../../components';
import { ThemeProvider } from '@emotion/react';
import { theme } from './home.theme';
import { AppProvider } from '../../hooks';

export function HomePage() {
    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Menu />
                    <Main />
                    <Sliding />
                </Box>
            </ThemeProvider>
        </AppProvider>
    );
}
