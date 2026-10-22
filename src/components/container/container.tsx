import {Box, BoxProps, SxProps} from '@mui/material';

import {SxMapProps} from '~/types';

const styles: SxMapProps<'container'> = {
    container: {
        backgroundColor: 'transparentBackground',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '42px 32px 32px 32px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
};

interface ContainerProps extends BoxProps {
    sx?: SxProps;
    children?: React.ReactNode;
    isContentContainer?: boolean;
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
