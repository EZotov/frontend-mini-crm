import UserPlaceholder from '~/assets/user_placeholder.webp';

export const onErrorUserAvatarHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = UserPlaceholder;
};

export const getFullName = (data: {
    lastName?: string | null;
    firstName?: string | null;
    patronymic?: string | null;
}) => {
    let result = '';

    for (const key in data) {
        const value = data[key as keyof typeof data]?.trim();
        if (value) {
            result += (result ? ' ' : '') + value;
        }
    }

    return result;
};
