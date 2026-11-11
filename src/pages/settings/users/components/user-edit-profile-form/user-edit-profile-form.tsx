import {Stack} from '@mui/material';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import type {FormBaseProps} from '~/form/types';

import {UserFormSchema, UserFormType} from './schema';

export const UserEditProfileForm = ({
    onSubmit,
    defaultValues,
    hasUserId,
}: FormBaseProps<UserFormType> & {hasUserId?: boolean}): React.JSX.Element => {
    const form = useFormController<UserFormType>(UserFormSchema, {
        action: FORM_ACTION.EDIT,
        defaultValues: defaultValues ?? {
            email: '',
            lastName: '',
            firstName: '',
            patronymic: '',
        },
    });

    return (
        <FormController<UserFormType> {...form} onSubmit={onSubmit} hideCancelButton>
            <Stack direction="column" spacing={1}>
                <TextFieldController<UserFormType> name="email" label="email" fullWidth />
                <TextFieldController<UserFormType> name="lastName" label="Фамилия" fullWidth />
                <TextFieldController<UserFormType> name="firstName" label="Имя" fullWidth />
                <TextFieldController<UserFormType> name="patronymic" label="Отчество" fullWidth />
                {hasUserId && <TextFieldController<UserFormType> name="role.value" label="Роль" fullWidth />}
            </Stack>
        </FormController>
    );
};
