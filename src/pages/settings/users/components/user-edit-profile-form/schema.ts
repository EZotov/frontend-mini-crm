import zod from 'zod';

export const UserFormSchema = zod.object({
    name: zod.string(),
});

export type UserFormType = zod.infer<typeof UserFormSchema>;
