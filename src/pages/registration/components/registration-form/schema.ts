import zod from 'zod';

export const RegistrationSchema = zod.object({
    email: zod
        .string({
            error: 'Email обязателен для заполнения',
        })
        .min(1, {message: 'Поле не может быть пустым'})
        .email({message: 'Некорректный формат email адреса'}),
    lastName: zod.string().min(1, {message: 'Поле не может быть пустым'}),
    firstName: zod.string().min(1, {message: 'Поле не может быть пустым'}),
    patronymic: zod.string().optional(),
    password: zod.string({error: 'Email обязателен для заполнения'}).min(1, {message: 'Поле не может быть пустым'}),
    confirmPassword: zod
        .string({error: 'Email обязателен для заполнения'})
        .min(1, {message: 'Поле не может быть пустым'}),
});

export type RegistrationType = zod.infer<typeof RegistrationSchema>;
