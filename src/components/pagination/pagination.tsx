import {Box, Pagination as MuiPagination, UsePaginationProps} from '@mui/material';
import {useState} from 'react';

interface PaginationProps {
    totalCount: number;
    pageSize?: number;
    onChange?: (pageNum: number) => void;
}

export const Pagination = ({pageSize = 25, totalCount, onChange}: PaginationProps): React.JSX.Element => {
    const [pageNum, setPageNum] = useState<number>(1);

    const pageCount = Math.ceil(totalCount / pageSize);

    const handleChange: UsePaginationProps['onChange'] = (_, pageNum) => {
        setPageNum(pageNum);

        if (onChange) {
            onChange(pageNum);
        }
    };

    return (
        <Box sx={{mt: 2}}>
            <MuiPagination count={pageCount} color="primary" page={pageNum} onChange={handleChange} />
        </Box>
    );
};
