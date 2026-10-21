import {Box, BoxProps, SxProps} from '@mui/material';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'container'> = {
    container: {
        backgroundColor: 'transparentBackground',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '50px 35px 35px 35px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
};

interface ContainerProps extends BoxProps {
    sx?: SxProps;
    children?: React.ReactNode;
}

export const Container = ({sx, children, ...props}: ContainerProps) => {
    const boxStyles = {
        ...styles.container,
        ...(sx && sx),
    };

    return (
        <Box {...props} sx={boxStyles}>
            {children}
        </Box>
    );
};
