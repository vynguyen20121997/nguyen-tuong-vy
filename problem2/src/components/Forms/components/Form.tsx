import { DispatchWithoutAction, PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  methods: UseFormReturn<T, Record<string, unknown>>;
  onSubmit: DispatchWithoutAction;
}

const Form = ({
  children,
  methods,
  onSubmit,
}: PropsWithChildren<FormProps<T>>) => {
  return (
    <FormProvider {...methods}>
      <div onSubmit={onSubmit}>{children}</div>
    </FormProvider>
  );
};

export default Form;
