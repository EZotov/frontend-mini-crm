import React from 'react';

import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {List} from '~/components/list';
import {BaseCardProps, BaseListCard} from '~/components/list/base-list-card';
import {ROUTE_PATHS} from '~/router/paths';

const items: BaseCardProps[] = [{id: '', title: '', actions: []}];

const CompaniesPage = (): React.JSX.Element => {
    return (
        <PageLayout
            pageTitle="Компании"
            createButtonTitle="Создать компанию"
            createButtonTo={ROUTE_PATHS.CREATE_COMPANY_PAGE}
        >
            <Container isEmptyContent={false} isLoading={false}>
                <List<BaseCardProps>
                    cardComponent={BaseListCard}
                    items={items}
                    paginationState={{pageNum: 1, pageSize: 25}}
                    totalCount={0}
                />
            </Container>
        </PageLayout>
    );
};

export default CompaniesPage;
