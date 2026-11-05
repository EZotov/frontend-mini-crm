export const ROLES = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER',
} as const;

export const ROLE_TRANSLATE_MAP: Record<string, string> = {
    ADMIN: 'Администратор',
    MANAGER: 'Менеджер',
    USER: 'Пользователь',
};
