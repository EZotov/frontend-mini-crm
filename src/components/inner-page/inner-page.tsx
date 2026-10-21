import {Box, Button, Stack, Typography} from '@mui/material';
import React, {ReactNode} from 'react';
import {Link, To} from 'react-router-dom';

import {Action, SxMapProps} from '~/types';

const getLinkOrClickButton = (title: string, options: {to?: To; onClick?: React.MouseEventHandler}) => {
    const {to, onClick} = options;

    return to ? (
        <Button component={Link} to={to} variant="contained">
            {title}
        </Button>
    ) : (
        <Button onClick={onClick} variant="contained">
            {title}
        </Button>
    );
};

const styles: SxMapProps<'wrapper' | 'pageHeader' | 'pageHeaderHeadline'> = {
    wrapper: {paddingBottom: 2, marginBottom: 2, borderBottom: '1px solid #585555'},
    pageHeader: {display: 'flex', justifyContent: 'space-between', padding: '4px 8px', alignItems: 'center'},
    pageHeaderHeadline: {fontSize: 24, fontWeight: 500},
};

interface InnerPageProps {
    pageTitle: string;
    children: ReactNode;
    createButtonTitle?: string;
    to?: To;
    onCreateClick?: React.MouseEventHandler;
    otherActions?: Action[];
}

/**
 * Компонент-обёртка страницы с функциональным баром
 * @returns
 */
export const InnerPage = ({
    pageTitle = 'Название страницы',
    createButtonTitle = '',
    to,
    onCreateClick,
    otherActions,
    children,
}: InnerPageProps): React.JSX.Element => {
    const createButton = getLinkOrClickButton(createButtonTitle, {
        to,
        onClick: onCreateClick,
    });

    const isEnabledActions = otherActions ? otherActions.length <= 3 : false;

    return (
        <>
            <Box sx={styles.wrapper}>
                <Stack direction="row" sx={styles.pageHeader} spacing={2}>
                    <Typography component="h2" sx={styles.pageHeaderHeadline}>
                        {pageTitle}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {createButtonTitle && createButton}
                        {isEnabledActions
                            ? otherActions?.map((action) => (
                                  <React.Fragment key={`adv-menu-${action.title}`}>
                                      {getLinkOrClickButton(action.title, {
                                          to: action?.to,
                                          onClick: action?.onClick,
                                      })}
                                  </React.Fragment>
                              ))
                            : null}
                    </Stack>
                </Stack>
            </Box>
            {children}
        </>
    );
};
