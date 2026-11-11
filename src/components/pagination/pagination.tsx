import {
    MenuItem,
    Pagination as MuiPagination,
    Select,
    SelectChangeEvent,
    Stack,
    UsePaginationProps,
} from '@mui/material';

import {PaginationState} from '~/types';

export interface PaginationProps {
    totalCount: number;
    paginationState: PaginationState;
    onChange?: (paginationState: PaginationState) => void;
}

/**
 * Stateless компонент пагинации. Работает только с внешним состоянием
 */
export const Pagination = ({paginationState, totalCount, onChange}: PaginationProps): React.JSX.Element => {
    const pageCount = totalCount ? Math.ceil(totalCount / paginationState.pageSize) : 2;

    const handleChangeSize = (event: SelectChangeEvent<number>) => {
        if (!onChange) return;

        onChange({
            pageNum: paginationState.pageNum,
            pageSize: event.target.value,
        });
    };

    const handleChangePage: UsePaginationProps['onChange'] = (_, currentPage) => {
        if (!onChange) return;

        onChange({
            pageNum: currentPage,
            pageSize: paginationState.pageSize,
        });
    };

    return (
        <Stack direction="row" spacing={2} sx={{mt: 2}}>
            <Select value={paginationState.pageSize} onChange={handleChangeSize}>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
            <MuiPagination
                count={pageCount}
                color="primary"
                page={paginationState.pageNum}
                onChange={handleChangePage}
            />
        </Stack>
    );
};
