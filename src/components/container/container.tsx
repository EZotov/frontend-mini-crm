import {Box, SxProps} from '@mui/material';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'container'> = {
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)', // Полупрозрачный белый фон
        backdropFilter: 'blur(10px)', // Эффект матового стекла
        borderRadius: '24px',
        padding: '50px 35px 35px 35px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
};

interface ContainerProps {
    sx?: SxProps;
    children?: React.ReactNode;
}

export const Container = ({sx, children}: ContainerProps) => {
    const boxStyles = {
        ...styles.container,
        ...(sx && sx),
    };

    return <Box sx={boxStyles}>{children}</Box>;
};
