import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        transparentBackground: string;
        lightShadow: string;
    }
    interface PaletteOptions {
        transparentBackground?: string;
        lightShadow?: string;
    }

    interface TypographyVariants {
        text: React.CSSProperties;
        smallText: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        text?: React.CSSProperties;
        smallText?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        button: false;
        caption: true;
        overline: false;

        // Кастомные варианты
        text: true;
        smallText: true;
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
        lightShadow: '#ffffffb9',
    },
    // 2. Настройка шрифтов
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
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
        MuiTypography: {
            defaultProps: {variant: 'text'},
            variants: [
                {
                    props: {variant: 'h1'},
                    style: {
                        fontSize: '1.75rem',
                        fontWeight: 700,
                    },
                },
                {
                    props: {variant: 'h2'},
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                    },
                },
                {
                    props: {variant: 'h3'},
                    style: {
                        fontSize: '1.25rem',
                        fontWeight: 600,
                    },
                },
                {
                    props: {variant: 'text'},
                    style: {
                        fontSize: '1rem',
                    },
                },
                {
                    props: {variant: 'smallText'},
                    style: {
                        fontSize: '0.875rem',
                    },
                },
                {
                    props: {variant: 'caption'},
                    style: {
                        fontSize: '0.675rem',
                    },
                },
            ],
        },
    },
});
