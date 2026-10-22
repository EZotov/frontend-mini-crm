import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        transparentBackground: string;
    }
    interface PaletteOptions {
        transparentBackground?: string;
    }
}

export const theme = createTheme({
    // 1. Настройка цветовой палитры
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: 'rgb(61, 73, 80)',
        },
        transparentBackground: ' #e9e9e957',
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
