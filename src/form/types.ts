import {FieldValues, SubmitHandler} from 'react-hook-form';

import {FormAction} from './form-controller';

export interface FormBaseProps<FV extends FieldValues> {
    onSubmit: SubmitHandler<FV>;
    defaultValues?: FV;
    cancelLink?: string;
    onCancelClick?: () => void;
    submitButtonName?: string;
    cancelButtonName?: string;
    buttonsFullWidth?: boolean;
    isSubmitting?: boolean;
    action?: FormAction;
}
