import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton, Menu, MenuItem, Stack, Typography} from '@mui/material';
import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import type {SxMapProps} from '~/styles/types';

import type {BaseCardProps} from './types';

const styles: SxMapProps<'card'> = {
    card: {
        px: 2,
        py: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 1,
        borderColor: 'primary.main',
        '&:last-child': {
            borderBottom: 'none',
        },
    },
};

export const BaseListCard = (props: BaseCardProps): React.JSX.Element => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Stack component="li" sx={styles.card} direction="row" spacing={1}>
            <Typography component="h4" variant="h3" sx={{flexGrow: 1}}>
                {props.title}
            </Typography>
            {!!props?.actions?.length && (
                <>
                    <IconButton ref={anchorEl} onClick={() => setOpen(true)} size="small" sx={{flexShrink: 0}}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl.current}
                        open={open}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {props.actions.map((action) =>
                            action?.to ? (
                                <MenuItem key={`${props.id}-${action.actionTitle}`} component={Link} to={action.to}>
                                    {action.actionTitle}
                                </MenuItem>
                            ) : (
                                <MenuItem key={`${props.id}-${action.actionTitle}`} onClick={action?.onClick}>
                                    {action.actionTitle}
                                </MenuItem>
                            ),
                        )}
                    </Menu>
                </>
            )}
        </Stack>
    );
};
