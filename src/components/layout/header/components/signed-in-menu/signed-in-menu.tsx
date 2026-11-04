import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton, Menu, MenuItem, Stack} from '@mui/material';
import {useUnit} from 'effector-react';
import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import {$isLogoutSubmitting, $myProfile, logoutEvent} from '~/models/auth';
import type {SxMapProps} from '~/styles/types';

import {getSettingsMenu} from '../../consts';

const styles: SxMapProps<'iconButton'> = {
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 0,
        '& svg': {
            color: '#fff',
        },
        '&:hover': {
            backgroundColor: '#fff',
            '& > svg': {
                color: '#000',
            },
        },
    },
};

export const SignedInMenu = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);

    const [logout, isLogoutSubmitting, myProfile] = useUnit([logoutEvent, $isLogoutSubmitting, $myProfile]);

    const settingsMenu = getSettingsMenu(myProfile?.role);

    return (
        <Stack direction="row">
            <IconButton ref={buttonRef} onClick={() => setIsOpen(true)} sx={styles.iconButton}>
                <SettingsIcon />
            </IconButton>
            {!!settingsMenu.length && (
                <Menu anchorEl={buttonRef.current} open={isOpen} onClose={() => setIsOpen(false)}>
                    {settingsMenu
                        .filter(({isHidden}) => !isHidden)
                        .map((item) => (
                            <MenuItem key={item.id} component={Link} to={item.to}>
                                {item.title}
                            </MenuItem>
                        ))}
                </Menu>
            )}
            <IconButton onClick={logout} loading={isLogoutSubmitting} sx={styles.iconButton}>
                <LogoutIcon />
            </IconButton>
        </Stack>
    );
};
