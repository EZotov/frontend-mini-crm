export interface paths {
    '/v1/companies': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список компаний */
        get: operations['CompanyController_getAll'];
        put?: never;
        /** Создать новую компанию */
        post: operations['CompanyController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/companies/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить компанию */
        get: operations['CompanyController_get'];
        /** Обновить информацию о компании */
        put: operations['CompanyController_update'];
        post?: never;
        /** Удалить компанию */
        delete: operations['CompanyController_delete'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/customers': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить всех заказчиков */
        get: operations['CustomerController_getAll'];
        put?: never;
        /** Создать нового заказчика */
        post: operations['CustomerController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/customers/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить заказчика */
        get: operations['CustomerController_get'];
        /** Изменить данные заказчика */
        put: operations['CustomerController_update'];
        post?: never;
        /** Удалить заказчика */
        delete: operations['CustomerController_delete'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/roles': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список ролей */
        get: operations['RoleController_getAll'];
        put?: never;
        /** Создать роль */
        post: operations['RoleController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/roles/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Изменить роль */
        put: operations['RoleController_update'];
        post?: never;
        /** Удалить роль */
        delete: operations['RoleController_delete'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/users/me': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить свой профиль по токену */
        get: operations['MeUserController_me'];
        /** Изменить данные своего профиля */
        put: operations['MeUserController_updateMyProfile'];
        /** Изменить пароль своего профиля */
        post: operations['MeUserController_updateMyProfilePassword'];
        /** Удалить свой аккаунт */
        delete: operations['MeUserController_deleteMyAccount'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/users': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить всех пользователей (для админа) */
        get: operations['UserController_getAll'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/users/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить профиль пользователя (для админа) */
        get: operations['UserController_getUser'];
        /** Изменить данные чужого профиля (для админа) */
        put: operations['UserController_updateUserProfile'];
        post?: never;
        /** Удалить пользователя (для админа) */
        delete: operations['UserController_deleteUser'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/auth/sign-up': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Зарегистрировать нового пользователя */
        post: operations['AuthController_registration'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/auth/sign-in': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Войти в систему */
        post: operations['AuthController_login'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/auth/refresh': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Обновить токен аутентификации */
        post: operations['AuthController_refresh'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/auth/logout': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Выйти из системы */
        post: operations['AuthController_logout'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/activities': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список задач */
        get: operations['ActivityController_getAllByDeal'];
        put?: never;
        /** Создать новую задачу */
        post: operations['ActivityController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/activities/grouped-by-status': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список задач с группировкой по статусу */
        get: operations['ActivityController_getAllByDealInStatus'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/activities/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Обновить задачу */
        put: operations['ActivityController_update'];
        post?: never;
        /** Удалить задачу */
        delete: operations['ActivityController_delete'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/deals': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить все сделки */
        get: operations['DealController_getAll'];
        put?: never;
        /** Создать сделку */
        post: operations['DealController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/deals/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить сделку */
        get: operations['DealController_get'];
        /** Изменить сделку */
        put: operations['DealController_update'];
        post?: never;
        /** Удалить сделку */
        delete: operations['DealController_delete'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/deals/{id}/status': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить статус сделки */
        patch: operations['DealController_changeStatus'];
        trace?: never;
    };
    '/v1/deals/{id}/funnel-stage': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменить этап воронки сделки */
        patch: operations['DealController_changeFunnelStage'];
        trace?: never;
    };
    '/v1/deals/{id}/history': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить историю по сделке */
        get: operations['DealController_getDealHistory'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/analytics/summary': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить сводку аналитики */
        get: operations['AnalyticsController_getSummary'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/funnels': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить все воронки */
        get: operations['FunnelController_findAll'];
        put?: never;
        /** Создать воронку */
        post: operations['FunnelController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/funnels/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить воронку по id */
        get: operations['FunnelController_findOne'];
        /** Редактировать сведения о воронке */
        put: operations['FunnelController_update'];
        post?: never;
        /** Удалить воронку */
        delete: operations['FunnelController_remove'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/funnels/{funnelId}/stages': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список этапов по воронке */
        get: operations['FunnelStagesController_getList'];
        put?: never;
        /** Создать этап воронки */
        post: operations['FunnelStagesController_create'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/funnel-stages/{stageId}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить этап воронки по id */
        get: operations['FunnelStagesController_get'];
        /** Редактировать сведения об этапе воронки */
        put: operations['FunnelStagesController_update'];
        post?: never;
        /** Удалить этап воронки */
        delete: operations['FunnelStagesController_remove'];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/v1/funnels/{funnelId}/stages/{stageId}/order': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Изменение порядка этапа воронки */
        patch: operations['FunnelStagesController_reorder'];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ErrorResponseDto: {
            code: Record<string, never>;
            message: Record<string, never>;
        };
        Company: {
            /** Format: uuid */
            id: string;
            fullTitle: string;
            shortTitle: string;
            inn: string;
        };
        CreateResponseDto: {
            id: string;
        };
        CreateOrUpdateCompanyDto: {
            fullTitle: string;
            shortTitle: string;
            inn: string;
        };
        CustomerDto: {
            /** Format: uuid */
            id: string;
            lastName: string;
            patronymic: Record<string, never> | null;
            firstName: string;
            phone: string;
            company: components['schemas']['Company'];
        };
        CreateCustomerDto: {
            lastName: string;
            patronymic?: string | null;
            firstName: string;
            phone: string;
            companyId: string;
        };
        UpdateCustomerDto: {
            lastName: string;
            patronymic: string | null;
            firstName: string;
            phone: string;
            companyId: string;
        };
        Role: {
            /** Format: uuid */
            id: string;
            title: string;
            /**
             * @description Список прав доступа
             * @example [
             *       "user:write",
             *       "user:read"
             *     ]
             */
            access: string[];
        };
        CreateOrUpdateRoleDto: {
            title: string;
            /**
             * @description Список прав доступа
             * @example [
             *       "user:write",
             *       "user:read"
             *     ]
             */
            access: string[];
        };
        UserDto: {
            /** Format: uuid */
            id: string;
            email: string;
            firstName: string;
            patronymic?: string | null;
            lastName: string;
            isBlocked: boolean;
            role?: string | null;
        };
        UpdateUserDto: {
            email: string;
            firstName: string;
            patronymic: string | null;
            lastName: string;
            roleId: string;
        };
        UpdatePasswordDto: {
            /** @description Новый пароль */
            currentPassword: string;
            /** @description Новый пароль */
            newPassword: string;
            /** @description Подтвердить пароль */
            confirmPassword: string;
        };
        TokensDto: {
            accessToken: string;
            refreshToken: string;
        };
        CreateUserDto: {
            email: string;
            firstName: string;
            lastName: string;
            patronymic?: string;
            password: string;
            confirmPassword: string;
        };
        LoginRequestDto: {
            email: string;
            password: string;
        };
        RefreshAccessTokenDto: {
            accessToken: string;
        };
        FunnelStagesDto: {
            /** Format: uuid */
            id: string;
            title: string;
            order: number;
            /** @enum {string} */
            type: 'IN_PROGRESS' | 'WON' | 'LOST';
            funnelTitle: string | null;
        };
        DealShortDto: {
            /**
             * Format: uuid
             * @description ID сделки
             * @example d3b07384-d113-4956-a5e2-aa59df3a8d9a
             */
            id: string;
            /**
             * @description Название сделки
             * @example Контракт на поставку
             */
            title: string;
            /**
             * @description Бюджет сделки
             * @example 150000
             */
            budget: number;
            /**
             * @description Статус сделки
             * @enum {string}
             */
            status: 'NEW' | 'IN_PROGRESS' | 'CLOSE' | 'REOPEN';
            /**
             * Format: date-time
             * @description Дедлайн SLA
             * @example 2026-10-15T12:00:00.000Z
             */
            slaDeadline?: string;
            /**
             * @description Нарушен ли SLA
             * @example false
             */
            isSlaViolated: boolean;
            /** @description Менеджер сделки */
            manager: components['schemas']['UserDto'];
            /** @description Клиент сделки */
            customer: components['schemas']['CustomerDto'];
            /** @description Этап воронки */
            currentFunnelStage: components['schemas']['FunnelStagesDto'];
        };
        ActivityDto: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            type: 'CALL' | 'EMAIL' | 'MEETING' | 'TELEGRAM';
            title: string;
            description: string;
            /** Format: date-time */
            dueDate: string;
            deal: components['schemas']['DealShortDto'] | null;
            assigned: components['schemas']['UserDto'] | null;
            createdBy: components['schemas']['UserDto'];
        };
        GroupedActivityByStatusDto: {
            /** @enum {string} */
            status: 'NEW' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';
            count: number;
            activities: components['schemas']['ActivityDto'][];
        };
        CreateActivityDto: {
            /** @enum {string} */
            type: 'CALL' | 'EMAIL' | 'MEETING' | 'TELEGRAM';
            title: string;
            description: string;
            /** Format: date-time */
            dueDate: string;
            /** @enum {string} */
            status?: 'NEW' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';
            dealId?: string | null;
            assignedId: string;
        };
        UpdateActivityDto: {
            /** @enum {string} */
            type: 'CALL' | 'EMAIL' | 'MEETING' | 'TELEGRAM';
            title: string;
            description: string;
            /** Format: date-time */
            dueDate: string;
            /** @enum {string} */
            status: 'NEW' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';
            dealId: string | null;
            assignedId: string;
        };
        DealDto: {
            /**
             * Format: uuid
             * @description ID сделки
             * @example d3b07384-d113-4956-a5e2-aa59df3a8d9a
             */
            id: string;
            /**
             * @description Название сделки
             * @example Контракт на поставку
             */
            title: string;
            /**
             * @description Бюджет сделки
             * @example 150000
             */
            budget: number;
            /**
             * @description Статус сделки
             * @enum {string}
             */
            status: 'NEW' | 'IN_PROGRESS' | 'CLOSE' | 'REOPEN';
            /**
             * Format: date-time
             * @description Дедлайн SLA
             * @example 2026-10-15T12:00:00.000Z
             */
            slaDeadline?: string;
            /**
             * @description Нарушен ли SLA
             * @example false
             */
            isSlaViolated: boolean;
            /** @description Менеджер сделки */
            manager: components['schemas']['UserDto'];
            /** @description Автор сделки */
            createdBy: components['schemas']['UserDto'];
            /** @description Клиент сделки */
            customer: components['schemas']['CustomerDto'];
            /** @description Этап воронки */
            currentFunnelStage: components['schemas']['FunnelStagesDto'];
        };
        CreateOrUpdateDealDto: {
            /**
             * @description UUID менеджера (User)
             * @example d3b07384-d113-4956-a5e2-aa59df3a8d9a
             */
            managerId: string;
            /**
             * @description UUID клиента (Customer)
             * @example a1b07384-f334-4956-c7d4-cc59df3a8d9c
             */
            customerId: string;
            title: string;
            budget: number;
        };
        ChangeStatusDealDto: {
            /**
             * @description Новый статус сделки
             * @example IN_PROGRESS
             * @enum {string}
             */
            status: 'NEW' | 'IN_PROGRESS' | 'CLOSE' | 'REOPEN';
        };
        ChangeDealFunnelStage: {
            /**
             * @description UUID этапа воронки
             * @example a1b07384-f334-4956-c7d4-cc59df3a8d9c
             */
            currentFunnelStage: string;
        };
        DealHistoryDto: {
            /** Format: uuid */
            id: string;
            actionDescription: string;
            changedById: string | null;
            changedByFullname: string | null;
            /** Format: date-time */
            createdAt: string;
            /**
             * Format: uuid
             * @example UUID сделки
             */
            dealId: string;
        };
        Funnel: {
            /** Format: uuid */
            id: string;
            title: string;
            isActive: boolean;
        };
        CreateFunnelDto: {
            title: string;
            isActive?: boolean;
        };
        UpdateFunnelDto: {
            title: string;
            isActive: boolean;
        };
        CreateFunnelStagesDto: {
            title: string;
            /** @enum {string} */
            type: 'IN_PROGRESS' | 'WON' | 'LOST';
        };
        UpdateFunnelStagesDto: {
            title: string;
            /** @enum {string} */
            type: 'IN_PROGRESS' | 'WON' | 'LOST';
            /** Format: uuid */
            funnelId: string;
        };
        ChangeOrderFunnelStagesDto: {
            sourceIndex: number;
            targetIndex: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    CompanyController_getAll: {
        parameters: {
            query: {
                pageNum: number;
                pageSize: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['Company'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    CompanyController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateCompanyDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    CompanyController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['Company'];
                    };
                };
            };
        };
    };
    CompanyController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateCompanyDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    CompanyController_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CustomerController_getAll: {
        parameters: {
            query: {
                pageNum: number;
                pageSize: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CustomerDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    CustomerController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateCustomerDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    CustomerController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CustomerDto'];
                    };
                };
            };
        };
    };
    CustomerController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateCustomerDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    CustomerController_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RoleController_getAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['Role'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    RoleController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateRoleDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    RoleController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateRoleDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    RoleController_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MeUserController_me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['UserDto'];
                    };
                };
            };
        };
    };
    MeUserController_updateMyProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateUserDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    MeUserController_updateMyProfilePassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdatePasswordDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    MeUserController_deleteMyAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_getAll: {
        parameters: {
            query: {
                pageNum: number;
                pageSize: number;
                role?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['UserDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    UserController_getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['UserDto'];
                    };
                };
            };
        };
    };
    UserController_updateUserProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateUserDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    UserController_deleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_registration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateUserDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['TokensDto'];
                    };
                };
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['LoginRequestDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['TokensDto'];
                    };
                };
            };
        };
    };
    AuthController_refresh: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['RefreshAccessTokenDto'];
                    };
                };
            };
        };
    };
    AuthController_logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ActivityController_getAllByDeal: {
        parameters: {
            query?: {
                dealId?: string;
                createdById?: string;
                assignedId?: string;
                status?: 'NEW' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['ActivityDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    ActivityController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateActivityDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    ActivityController_getAllByDealInStatus: {
        parameters: {
            query?: {
                dealId?: unknown;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['GroupedActivityByStatusDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    ActivityController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateActivityDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    ActivityController_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DealController_getAll: {
        parameters: {
            query: {
                pageNum: number;
                pageSize: number;
                managerId?: string;
                createdById?: string;
                customerId?: string;
                status?: 'NEW' | 'IN_PROGRESS' | 'CLOSE' | 'REOPEN';
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['DealDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    DealController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateDealDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    DealController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['DealDto'];
                    };
                };
            };
        };
    };
    DealController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateOrUpdateDealDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    DealController_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DealController_changeStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['ChangeStatusDealDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    DealController_changeFunnelStage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['ChangeDealFunnelStage'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    DealController_getDealHistory: {
        parameters: {
            query: {
                pageNum: number;
                pageSize: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['DealHistoryDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    AnalyticsController_getSummary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FunnelController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['Funnel'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    FunnelController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateFunnelDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    FunnelController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['Funnel'];
                    };
                };
            };
        };
    };
    FunnelController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateFunnelDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    FunnelController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FunnelStagesController_getList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                funnelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['FunnelStagesDto'][];
                        /**
                         * @description Общее количество записей
                         * @example 0
                         */
                        total: number;
                    };
                };
            };
        };
    };
    FunnelStagesController_create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                funnelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateFunnelStagesDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    FunnelStagesController_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                stageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['FunnelStagesDto'];
                    };
                };
            };
        };
    };
    FunnelStagesController_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                stageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateFunnelStagesDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': {
                        data: components['schemas']['CreateResponseDto'];
                    };
                };
            };
        };
    };
    FunnelStagesController_remove: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                stageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FunnelStagesController_reorder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                funnelId: string;
                stageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['ChangeOrderFunnelStagesDto'];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
