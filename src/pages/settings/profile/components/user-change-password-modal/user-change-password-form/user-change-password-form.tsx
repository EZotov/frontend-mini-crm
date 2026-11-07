import {Stack} from '@mui/material';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import {FormBaseProps} from '~/types';

import {UserChangePasswordSchema, UserChangePasswordType} from './schema';

export const UserChangePasswordForm = ({
    defaultValues,
    onSubmit,
    onCancelClick,
}: FormBaseProps<UserChangePasswordType>) => {
    const form = useFormController<UserChangePasswordType>(UserChangePasswordSchema, {
        action: FORM_ACTION.CREATE,
        defaultValues: defaultValues ?? {
            currentPassword: '',
            newPassWord: '',
            confirmPassword: '',
        },
    });

    return (
        <FormController<UserChangePasswordType> {...form} onSubmit={onSubmit} cancelOnClick={onCancelClick}>
            <Stack direction="column" spacing={1}>
                <TextFieldController<UserChangePasswordType>
                    fullWidth
                    name="currentPassword"
                    type="password"
                    label="Текущий пароль"
                />
                <TextFieldController<UserChangePasswordType>
                    fullWidth
                    name="newPassWord"
                    type="password"
                    label="Новый пароль"
                />
                <TextFieldController<UserChangePasswordType>
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    label="Подтвердите пароль"
                />
            </Stack>
        </FormController>
    );
};
