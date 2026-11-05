import {Box, BoxProps, SxProps, Typography} from '@mui/material';

import {SxMapProps} from '~/styles/types';

const styles: SxMapProps<'container'> = {
    container: {
        backgroundColor: 'transparentBackground',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: 4,
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
};

interface ContainerProps extends BoxProps {
    sx?: SxProps;
    children?: React.ReactNode;
    isLoading?: boolean;
    isEmptyContent?: boolean;
    emptyListMessage?: string;
    smallPadding?: boolean;
    isTransparent?: boolean;
}

export const Container = ({
    sx,
    children,
    isLoading = false,
    isEmptyContent = false,
    emptyListMessage = 'Список элементов пуст',
    smallPadding = false,
    isTransparent = false,
    ...props
}: ContainerProps) => {
    const boxStyles = {
        ...(isTransparent ? {padding: 4} : styles.container),
        ...(smallPadding && {padding: 2}),
        ...(sx && sx),
    } as SxProps;

    const renderContent = () => {
        if (isLoading) {
            return <>Загрузка...</>;
        }

        if (isEmptyContent) {
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
