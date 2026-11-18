import zod from 'zod';

import {MESSAGES} from '~/utils/validation/messages';
import {createSelectSchema} from '~/utils/validation/schemas-factories/select';

export const UserFormSchema = zod.object({
    email: zod.email({message: MESSAGES.EMAIL}).min(1, MESSAGES.EMAIL),
    lastName: zod.string({message: MESSAGES.EMAIL}).min(1, MESSAGES.EMAIL),
    firstName: zod.string({message: MESSAGES.EMAIL}).min(1, MESSAGES.EMAIL),
    patronymic: zod.string().optional(),
    role: createSelectSchema({isOptional: true, valueType: 'STRING'}),
});

export type UserFormType = zod.infer<typeof UserFormSchema>;
