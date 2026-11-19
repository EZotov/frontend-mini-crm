import UserPlaceholder from '~/assets/user_placeholder.webp';

export const onErrorUserAvatarHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = UserPlaceholder;
};

const NAME_KEYS = ['lastName', 'firstName', 'patronymic'] as const;

export const getFullName = (data: Record<string, unknown>): string => {
    let fullName = '';

    for (const key of NAME_KEYS) {
        const value = data[key];

        if (typeof value === 'string' && value.trim()) {
            fullName += fullName ? ` ${value.trim()}` : value.trim();
        }
    }

    return fullName;
};
