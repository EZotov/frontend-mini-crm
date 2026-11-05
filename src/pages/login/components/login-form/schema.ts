import zod from 'zod';

export const LoginSchema = zod.object({
    email: zod.email({message: 'Некорректный формат email адреса'}).min(1, {message: 'Поле не может быть пустым'}),
    password: zod.string({error: 'Email обязателен для заполнения'}).min(1, {message: 'Поле не может быть пустым'}),
});

export type LoginType = zod.infer<typeof LoginSchema>;
