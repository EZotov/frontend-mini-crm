import zod from 'zod';

export const LoginSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
});

export type LoginType = zod.infer<typeof LoginSchema>;
