import zod from 'zod';

import {createSelectSchema} from '~/utils/validation/schemas-factories/select';

export const CustomerFormSchema = zod.object({
    lastName: zod.string(),
    patronymic: zod.string().optional(),
    firstName: zod.string(),
    phone: zod.string(),
    company: createSelectSchema({isOptional: true}),
});

export type CustomerFormType = zod.infer<typeof CustomerFormSchema>;
