import {Stack} from '@mui/material';
import React from 'react';

import {Pagination, PaginationProps} from '../pagination';

interface ListItem {
    id: string;
}

interface ListProps<T extends ListItem> extends PaginationProps {
    items: T[];
    cardComponent: React.ComponentType<T>;
    spacing?: number;
}

export const List = <T extends ListItem>({
    spacing = 3,
    cardComponent: CardComponent,
    items,
    ...paginationProps
}: ListProps<T>): React.JSX.Element | null => {
    if (!items?.length) {
        return null;
    }

    return (
        <Stack>
            <Stack component="ul" spacing={spacing}>
                {items.map((item) => (
                    <CardComponent key={item.id} {...item} />
                ))}
            </Stack>
            <Pagination {...paginationProps} />
        </Stack>
    );
};
