import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    // 1. Настройка цветовой палитры
    palette: {
        mode: 'light', // или 'dark'
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#3d4950',
        },
    },
    // 2. Настройка шрифтов
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    // 3. Настройка компонентов
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
    },
});
