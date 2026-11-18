import zod from 'zod';

type SelectOption<V = string | number> = {value: V; label: string};

export function createSelectSchema(options: {
    valueType: 'NUMBER';
    isOptional: true;
}): zod.ZodType<SelectOption<number> | null | undefined>;
export function createSelectSchema(options: {
    valueType: 'NUMBER';
    isOptional?: false;
}): zod.ZodType<SelectOption<number>>;
export function createSelectSchema(options: {
    valueType: 'STRING';
    isOptional: true;
}): zod.ZodType<SelectOption<string> | null | undefined>;
export function createSelectSchema(options: {
    valueType: 'STRING';
    isOptional?: false;
}): zod.ZodType<SelectOption<string>>;
export function createSelectSchema(options: {
    valueType?: undefined;
    isOptional: true;
}): zod.ZodType<SelectOption | null | undefined>;
export function createSelectSchema(options?: {valueType?: undefined; isOptional?: false}): zod.ZodType<SelectOption>;

export function createSelectSchema(options?: {
    valueType?: 'NUMBER' | 'STRING';
    isOptional?: boolean;
}): zod.ZodType<unknown> {
    const value =
        options?.valueType === 'NUMBER'
            ? zod.number()
            : options?.valueType === 'STRING'
              ? zod.string()
              : zod.union([zod.string(), zod.number()]);

    const schema = zod.object({value, label: zod.string()});
    return options?.isOptional ? schema.nullable().optional() : schema;
}
