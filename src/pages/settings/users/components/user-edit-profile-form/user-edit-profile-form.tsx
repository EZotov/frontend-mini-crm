import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';
import type {FormBaseProps} from '~/types';

import {UserFormSchema, UserFormType} from './schema';

export const UserEditProfileForm = ({onSubmit, defaultValues}: FormBaseProps<UserFormType>): React.JSX.Element => {
    const form = useFormController<UserFormType>(UserFormSchema, {
        action: FORM_ACTION.EDIT,
        defaultValues: defaultValues ?? {
            name: '',
        },
    });

    return (
        <FormController<UserFormType> {...form} onSubmit={onSubmit} hideCancelButton>
            <TextFieldController<UserFormType> name="name" label="Какой-то текст" fullWidth />
        </FormController>
    );
};
