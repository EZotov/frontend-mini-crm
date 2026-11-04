import {Box, Button, Stack, Typography} from '@mui/material';
import React, {ReactNode} from 'react';
import {Link, To} from 'react-router-dom';

import {SxMapProps} from '~/styles/types';

import type {Action} from './types';

const getLinkOrClickButton = (action: Action) => {
    const {title, to, onClick, variant} = action;

    return to ? (
        <Button component={Link} to={to} variant={variant}>
            {title}
        </Button>
    ) : (
        <Button onClick={onClick} variant={variant}>
            {title}
        </Button>
    );
};

const styles: SxMapProps<'wrapper' | 'pageHeader' | 'pageContentWrapper'> = {
    wrapper: {paddingBottom: 2, marginBottom: 2, borderBottom: '1px solid #585555'},
    pageHeader: {display: 'flex', justifyContent: 'space-between', padding: '4px 8px', alignItems: 'center'},
    pageContentWrapper: {
        height: '100%',
        overflowY: 'auto',
    },
};

interface InnerPageProps {
    pageTitle: string;
    children: ReactNode;
    createButtonTitle?: string;
    createButtonTo?: To;
    onCreateClick?: React.MouseEventHandler;
    otherActions?: Action[];
    isScrollablePage?: boolean;
}

/**
 * Компонент-обёртка страницы с функциональным баром с возможностью включить внутренний скролл контента
 * @returns
 */
export const PageLayout = ({
    pageTitle = 'Название страницы',
    createButtonTitle = '',
    createButtonTo,
    onCreateClick,
    otherActions,
    children,
    isScrollablePage = false,
}: InnerPageProps): React.JSX.Element => {
    const createButton = getLinkOrClickButton({
        title: createButtonTitle,
        to: createButtonTo,
        onClick: onCreateClick,
    });

    const isEnabledActions = otherActions ? otherActions.length <= 3 : false;
    const pageContainerStyle = isScrollablePage ? {height: 'calc(100vh - 134px)'} : undefined;

    return (
        <Stack direction="column" sx={pageContainerStyle}>
            <Box sx={styles.wrapper}>
                <Stack direction="row" sx={styles.pageHeader} spacing={2}>
                    <Typography component="h2" variant="h2">
                        {pageTitle}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        {createButtonTitle && createButton}
                        {isEnabledActions
                            ? otherActions?.map((action) => (
                                  <React.Fragment key={`adv-menu-${action.title}`}>
                                      {getLinkOrClickButton(action)}
                                  </React.Fragment>
                              ))
                            : null}
                    </Stack>
                </Stack>
            </Box>
            {isScrollablePage ? <Box sx={styles.pageContentWrapper}>{children}</Box> : children}
        </Stack>
    );
};
