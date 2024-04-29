import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CurencyData from "../../../type/types";

interface SelectProps {
  name: string;
  options: CurencyData[];
  placeholder?: string;
}

const Select: FC<SelectProps> = ({
  name,
  options,
  placeholder = "Please Select",
}: SelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <select
            key={name}
            {...field}
            className={` bg-transparent outline-none   focus:ring-0  w-20 text-2xl `}
          >
            <option key="default">{placeholder}</option>
            {options?.map((op) => (
              <option key={op.currency + op.price} value={op.price}>
                {op.currency}
              </option>
            ))}
          </select>
        </>
      )}
    />
  );
};

export default Select;
