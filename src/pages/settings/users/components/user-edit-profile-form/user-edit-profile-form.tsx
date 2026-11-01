import {SubmitHandler} from 'react-hook-form';

import {FORM_ACTION, FormController, useFormController} from '~/form/form-controller';
import {TextFieldController} from '~/form/input-controllers';

import {UserFormSchema, UserFormType} from './schema';

interface UserEditProfileFormProps {
    onSubmit: SubmitHandler<UserFormType>;
    defaultValues?: UserFormType;
    isSubmitting?: boolean;
}

export const UserEditProfileForm = ({
    onSubmit,
    defaultValues,
    isSubmitting,
}: UserEditProfileFormProps): React.JSX.Element => {
    const form = useFormController<UserFormType>(UserFormSchema, {
        action: FORM_ACTION.EDIT,
        defaultValues: defaultValues ?? {
            name: '',
        },
    });

    return (
        <FormController<UserFormType> {...form} onSubmit={onSubmit} hideCancelButton isSubmitting={isSubmitting}>
            <TextFieldController<UserFormType> name="name" label="Какой-то текст" fullWidth />
        </FormController>
    );
};
