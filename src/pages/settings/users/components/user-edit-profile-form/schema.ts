import zod from 'zod';

export const UserFormSchema = zod.object({
    email: zod.email({message: 'Некорректный формат email адреса'}),
    lastName: zod.string(),
    firstName: zod.string(),
    patronymic: zod.string(),
    role: zod.object({
        value: zod.string(),
        label: zod.string().optional(),
    }),
});

export type UserFormType = zod.infer<typeof UserFormSchema>;
