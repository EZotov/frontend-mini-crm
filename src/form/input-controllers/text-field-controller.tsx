import {TextField, TextFieldProps} from '@mui/material';
import {useCallback} from 'react';
import {FieldValues, Path, useController} from 'react-hook-form';

interface TextFieldController<FV extends FieldValues> extends Omit<TextFieldProps, 'name'> {
    name: Path<FV>;
}

export const TextFieldController = <FV extends FieldValues>({
    name,
    onChange,
    onBlur,
    ...props
}: TextFieldController<FV>) => {
    const {
        field,
        fieldState: {error},
    } = useController<FV>({name});

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            field.onChange(event);

            if (typeof onChange === 'function') {
                onChange(event);
            }
        },
        [onChange, field.onChange],
    );

    const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        field.onBlur();

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }, []);

    return (
        <TextField
            error={!!error}
            {...props}
            {...field}
            value={field.value ?? ''}
            helperText={error?.message ?? props.helperText ?? ' '}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};
