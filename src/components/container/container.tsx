import {Box, BoxProps, SxProps, Typography} from '@mui/material';

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
    isLoading?: boolean;
    isContentContainer?: boolean;
    isEmptyList?: boolean;
    emptyListMessage?: string;
}

export const Container = ({
    sx,
    children,
    isLoading = false,
    isEmptyList = false,
    emptyListMessage = 'Список элементов пуст',
    ...props
}: ContainerProps) => {
    const boxStyles = {
        ...styles.container,
        ...(sx && sx),
    };

    const renderContent = () => {
        if (isLoading) {
            return <>Загрузка...</>;
        }

        if (isEmptyList) {
            return (
                <Typography align="center" color="primary">
                    {emptyListMessage}
                </Typography>
            );
        }

        return children;
    };

    return (
        <Box {...props} sx={boxStyles}>
            {renderContent()}
        </Box>
    );
};
