import zod from 'zod';

export const CompanyFormSchema = zod.object({
    name: zod.string(),
});

export type CompanyFormType = zod.infer<typeof CompanyFormSchema>;
