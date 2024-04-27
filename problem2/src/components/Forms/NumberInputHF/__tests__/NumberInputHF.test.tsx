import { screen } from '@testing-library/react';

import NumberInputHF from 'components/Forms/CustomInputs/NumberInputHF';
import NumberInputArrow from 'components/Forms/CustomInputs/NumberInputHF/NumberInputArrow';
import { WrapperWithHookForm, retype, setupWithUE } from 'tests/utils';

const setup = () => {
  return setupWithUE(
    <NumberInputHF
      label="test"
      name="test"
      InputProps={{
        endAdornment: <NumberInputArrow name="test" decimalScale={1} />,
      }}
    />,
    {
      wrapper(props) {
        return (
          <WrapperWithHookForm
            defaultValues={{
              test: 0,
            }}
          >
            {props.children}
          </WrapperWithHookForm>
        );
      },
    }
  );
};

describe('NumberInputHF', () => {
  it('should render correctly', async () => {
    const { user } = setup();

    const input = screen.getByLabelText('test');

    await user.type(input, '2');

    await user.click(screen.getByTestId('NumberInputArrow__increaseBtn'));

    expect(input).toHaveValue('3.0');

    await retype(input, '2.3');

    await user.click(screen.getByTestId('NumberInputArrow__decreaseBtn'));

    expect(input).toHaveValue('1.3');
  });
});
