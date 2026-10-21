import zod from 'zod';

export const LoginSchema = zod.object({
    email: zod
        .string({
            error: 'Email обязателен для заполнения',
        })
        .min(1, {message: 'Поле не может быть пустым'})
        .email({message: 'Некорректный формат email адреса'}),
    password: zod.string({error: 'Email обязателен для заполнения'}).min(1, {message: 'Поле не может быть пустым'}),
});

export type LoginType = zod.infer<typeof LoginSchema>;
