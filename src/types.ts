import type {FieldValues, SubmitHandler} from 'react-hook-form';

export type PaginationState = {
    pageNum: number;
    pageSize: number;
};

type Params = Record<string, unknown>;

type ParamsType<TParams extends Params> = {
    params?: TParams;
};

export type GateWithParams<
    TParams extends Params,
    TExpandParams extends Params = Record<string, unknown>,
> = TExpandParams extends Params ? ParamsType<TParams> & TExpandParams : ParamsType<TParams>;

export interface FormBaseProps<FV extends FieldValues> {
    onSubmit: SubmitHandler<FV>;
    defaultValues?: FV;
    cancelLink?: string;
    onCancelClick?: () => void;
    submitButtonName?: string;
    cancelButtonName?: string;
    buttonsFullWidth?: boolean;
    isSubmitting?: boolean;
}
