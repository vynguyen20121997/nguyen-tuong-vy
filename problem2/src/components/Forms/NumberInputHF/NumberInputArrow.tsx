import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface NumberInputArrowProps {
  name: string;
  step?: number;
  min?: number;
  max?: number;
  decimalScale?: number;
}

function NumberInputArrow({
  name,
  step = 1,
  min = -Number.MAX_VALUE,
  max = Number.MAX_VALUE,
  decimalScale = 0,
}: NumberInputArrowProps) {
  const { setValue, watch } = useFormContext();
  const value = watch(name);

  const handleClickUpArrow = () => {
    if (value < max) {
      setValue(name, Number(Number(value) + step).toFixed(decimalScale));
    }
  };

  const handleClickDownArrow = () => {
    if (value > min) {
      setValue(name, Number(Number(value) - step).toFixed(decimalScale));
    }
  };

  return (
    <Stack
      className="input-arrow"
      sx={{
        display: 'none',
        alignSelf: 'flex-end',
        mb: 0.5,
      }}
    >
      <Button
        color="inherit"
        disableElevation
        disableRipple
        onClick={handleClickUpArrow}
        sx={{
          minWidth: 0,
          p: 0,
        }}
        data-testid="NumberInputArrow__increaseBtn"
      >
        <KeyboardArrowUp fontSize="inherit" />
      </Button>
      <Button
        color="inherit"
        disableElevation
        disableRipple
        onClick={handleClickDownArrow}
        sx={{
          minWidth: 0,
          p: 0,
        }}
        data-testid="NumberInputArrow__decreaseBtn"
      >
        <KeyboardArrowDown fontSize="inherit" />
      </Button>
    </Stack>
  );
}

export default NumberInputArrow;
