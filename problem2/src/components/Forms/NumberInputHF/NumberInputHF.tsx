import { Box, TextFieldProps, inputLabelClasses } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { NumericFormatProps } from 'react-number-format';

import ErrorMessage from 'components/Forms/CustomInputs/Base/ErrorMessage';
import FilledInput from 'components/Forms/CustomInputs/Base/Input/';
import NumericFormatCustom from 'components/Forms/CustomInputs/Base/NumericFormatCustom';
import { composeSx } from 'utils/style';

interface NumberInputHFProps extends Omit<TextFieldProps<'filled'>, 'variant'> {
  name: string;
  label: string;
  format?: NumericFormatProps;
}

function NumberInputHF({ name, format, sx, ...rest }: NumberInputHFProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];

  return (
    <Box>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FilledInput
            {...field}
            id={name}
            fullWidth
            margin="none"
            size="medium"
            {...rest}
            variant="filled"
            InputLabelProps={{
              shrink: true,
              sx: {
                [`& .${inputLabelClasses.asterisk}`]: {
                  color: 'error.main',
                },
              },
            }}
            error={hasError}
            InputProps={{
              ...rest.InputProps,
              inputComponent: NumericFormatCustom as any,
              inputProps: {
                format,
              },
            }}
            sx={composeSx(
              {
                '&:hover .input-arrow, &:focus-within .input-arrow': {
                  display: 'flex',
                },
              },
              sx
            )}
          />
        )}
      />

      <ErrorMessage errors={errors} name={name} />
    </Box>
  );
}

export default NumberInputHF;
