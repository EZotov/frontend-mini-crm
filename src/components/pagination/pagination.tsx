import {Box, Pagination as MuiPagination, UsePaginationProps} from '@mui/material';
import {useState} from 'react';

import {PaginationState} from '~/types';

interface PaginationProps {
    totalCount: number;
    paginationState: PaginationState;
    onChange?: (paginationState: PaginationState) => void;
}

export const Pagination = ({paginationState, totalCount, onChange}: PaginationProps): React.JSX.Element => {
    const [pageNum, setPageNum] = useState<number>(1);
    const [pageSize] = useState<number>(25);

    const pageCount = Math.ceil(totalCount / pageSize);

    const handleChange: UsePaginationProps['onChange'] = (_, pageNum) => {
        // Апдейтим внутренне состояние если нет
        if (!paginationState) {
            setPageNum(pageNum);
        }

        if (onChange) {
            onChange({pageNum, pageSize});
        }
    };

    return (
        <Box sx={{mt: 2}}>
            <MuiPagination count={pageCount} color="primary" page={pageNum} onChange={handleChange} />
        </Box>
    );
};
