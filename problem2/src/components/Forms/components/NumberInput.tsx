import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";

const NumberFormatField = ({ name = "name", disabled = false }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <NumericFormat
          disabled={disabled}
          className={` shadow-input rounded-md w-[95%] focus:outline-none  text-black px-5`}
          id={name}
          inputMode="numeric"
          thousandSeparator
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale
          value={value}
          onValueChange={(v) => onChange(v.value)}
        />
      )}
    />
  );
};

export default NumberFormatField;
