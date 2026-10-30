import {Box, Pagination as MuiPagination, UsePaginationProps} from '@mui/material';

import {PaginationState} from '~/types';

interface PaginationProps {
    totalCount: number;
    paginationState: PaginationState;
    onChange?: (paginationState: PaginationState) => void;
}

/**
 * Stateless компонент пагинации. Работает только с внешним состоянием
 */
export const Pagination = ({paginationState, totalCount, onChange}: PaginationProps): React.JSX.Element => {
    const pageCount = totalCount ? Math.ceil(totalCount / paginationState.pageSize) : 2;

    const handleChange: UsePaginationProps['onChange'] = (_, currentPage) => {
        if (!onChange) return;

        onChange({
            pageNum: currentPage,
            pageSize: paginationState.pageSize,
        });
    };

    return (
        <Box sx={{mt: 2}}>
            <MuiPagination count={pageCount} color="primary" page={paginationState.pageNum} onChange={handleChange} />
        </Box>
    );
};
