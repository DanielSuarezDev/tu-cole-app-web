import { useForm as useFormHook } from 'react-hook-form';

export interface Props {
  defaultValues: { [key: string]: string | any };
  squema?: any;
}

export const useForm = (defaultValues: any, squema?: any, validationContext?: any) => {
  const {
    control,
    reset,
    resetField,
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: { errors, dirtyFields, isDirty },
  } = useFormHook({
    defaultValues,
    resolver: squema
      ? async (data, context) => {
          try {
            const values = await squema.validate(data, {
              abortEarly: false,
              context: validationContext || context,
            });

            return {
              values,
              errors: {},
            };
          } catch (err: any) {
            return {
              values: {},
              errors: err?.inner?.reduce(
                (allErrors: any, currentError: any) => ({
                  ...allErrors,
                  [currentError.path]: {
                    type: currentError.type ?? 'validation',
                    message: currentError.message,
                  },
                }),
                {},
              ),
            };
          }
        }
      : undefined,
  });

  const isComplete = () => {
    const isDirtyFields = Object.keys(defaultValues).filter(
      (key) => dirtyFields[key],
    );
    return isDirtyFields.length === Object.keys(defaultValues).length;
  };

  const getErros = (): any => {
    if (!errors) {
      return {};
    }
    const keys = Object.keys(errors);
    const results: any = {};
    // eslint-disable-next-line no-return-assign
    keys.forEach((key) => (results[key] = errors?.[key]?.message));
    return results;
  };

  const resetFieldIntern = (name: string, value: string | number | null) => {
    resetField(name, {
      defaultValue: value,
    });
  };

  return {
    reset,
    control,
    isDirty,
    setError,
    setValue,
    isComplete,
    handleSubmit,
    errors: getErros(),
    values: getValues(),
    resetField: resetFieldIntern,
  };
};
