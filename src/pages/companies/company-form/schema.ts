import zod from 'zod';

import {MESSAGES} from '~/utils/validation/messages';
import {REG_EXP} from '~/utils/validation/regexp';

export const CompanyFormSchema = zod.object({
    fullTitle: zod.string({error: MESSAGES.REQUIRED}).min(1, MESSAGES.REQUIRED),
    shortTitle: zod.string({error: MESSAGES.REQUIRED}).min(1, MESSAGES.REQUIRED),
    inn: zod.string({error: MESSAGES.REQUIRED}).min(1, MESSAGES.REQUIRED).regex(REG_EXP.INN, MESSAGES.INN),
});

export type CompanyFormType = zod.infer<typeof CompanyFormSchema>;
