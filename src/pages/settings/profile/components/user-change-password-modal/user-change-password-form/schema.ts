import zod from 'zod';

import {MESSAGES} from '~/utils/validation/messages';

export const UserChangePasswordSchema = zod.object({
    currentPassword: zod.string({error: MESSAGES.REQUIRED}).min(1, {error: MESSAGES.REQUIRED}),
    newPassword: zod.string({error: MESSAGES.REQUIRED}).min(1, {error: MESSAGES.REQUIRED}),
    confirmPassword: zod.string({error: MESSAGES.REQUIRED}).min(1, {error: MESSAGES.REQUIRED}),
});

export type UserChangePasswordType = zod.infer<typeof UserChangePasswordSchema>;
