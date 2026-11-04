import {Stack, StackProps, Typography} from '@mui/material';
import React from 'react';

interface Label {
    label: string;
    text: string;
    visible?: boolean;
}

interface LabelListProps {
    items: Label[];
    direction: StackProps['direction'];
    labelDirection?: StackProps['direction'];
    spacing?: StackProps['spacing'];
}

export const LabelList = ({
    items,
    direction = 'column',
    labelDirection = 'column',
    spacing = 2,
}: LabelListProps): React.JSX.Element | null => {
    if (!items.length) return null;

    return (
        <Stack component="ul" direction={direction} spacing={spacing}>
            {items.map(({visible = true, ...item}) =>
                visible ? (
                    <Stack key={`label-list-${item.label}`} component="li" direction={labelDirection} spacing={0.5}>
                        <Typography component="label" sx={{fontWeight: 600}}>
                            {item.label}:
                        </Typography>
                        <Typography component="p">{item.text}</Typography>
                    </Stack>
                ) : null,
            )}
        </Stack>
    );
};
