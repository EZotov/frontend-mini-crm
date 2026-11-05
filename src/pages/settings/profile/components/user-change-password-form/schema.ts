import zod from 'zod';

export const UserChangePasswordSchema = zod.object({
    currentPassword: zod.string({error: 'Обязательное поле'}).min(1, {error: 'Обязательное поле'}),
    newPassWord: zod.string({error: 'Обязательное поле'}).min(1, {error: 'Обязательное поле'}),
    confirmPassword: zod.string({error: 'Обязательное поле'}).min(1, {error: 'Обязательное поле'}),
});

export type UserChangePasswordType = zod.infer<typeof UserChangePasswordSchema>;
