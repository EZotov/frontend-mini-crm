import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect} from 'react';
import {FieldValues, useForm, UseFormProps, UseFormReturn} from 'react-hook-form';
import type {ZodObject} from 'zod';

import {FORM_ACTION} from './const';
import {FormAction} from './types';

interface UseCommonFormOptions<FV extends FieldValues> extends Omit<UseFormProps<FV>, 'resolver'> {
    /**
     * Режим формы
     */
    action: FormAction;
    /**
     * Деактивации валидации при открытии формы с непустыми defaultValues
     */
    disableInitValidation?: boolean;
    /**
     * Выключить дизейбл сабмита по состоянию isDirty формы
     */
    disableIsDirty?: boolean;
}

/**
 * Хук поверх основного хука `useForm` из пакета `react-hook-form`, форсирующий использование zod-резолвера
 * @param schema - Zod-schema
 * @param props - параметры `useForm` + параметры резолвера
 */
export const useFormController = <FV extends FieldValues, ZodSchema extends ZodObject = ZodObject>(
    schema: ZodSchema,
    props?: UseCommonFormOptions<FV>,
): UseFormReturn<FV> & {disableIsDirty: boolean} => {
    const disableInitValidation = props?.disableInitValidation ?? false;
    const disableIsDirty = props?.disableIsDirty ?? false;

    const form = useForm<FV>({
        resolver: zodResolver(schema) as UseFormProps<FV>['resolver'],
        mode: 'onTouched',
        reValidateMode: 'onChange',
        ...props,
    });

    // Триггер валидации при инициализации формы
    useEffect(() => {
        if (props?.action === FORM_ACTION.EDIT && props?.defaultValues && !disableInitValidation) {
            form.trigger();
        }
    }, []);

    return {...form, disableIsDirty};
};
