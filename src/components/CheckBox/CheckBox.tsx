import { FC, useMemo } from 'react';

import { Typography } from '../Typography/Typography';
import { FormFieldContainer } from '../FormFieldContainer/FormFieldContainer';

interface CheckBoxProps {
  label: string;
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  outlined?: boolean;
  error?: string;
  size?: 'auto' | 'small' | 'large';
  classNames?: string;
  height?: string;
  required?: boolean;
  appendInner?: React.ReactNode;
  helpText?: string;
  withLabel?: boolean;
}

const SIZES = {
  auto: 'min-w-[163px]',
  small: 'w-[145px]',
  large: 'w-full',
};

export const CheckBox: FC<CheckBoxProps> = ({
  label,
  size = 'small',
  outlined = false,
  disabled = false,
  error,
  onChange,
  value,
  classNames = '',
  height = 'h-[44px]',
  required = false,
  appendInner,
  helpText,
  withLabel = false,
}) => {
  const baseStyles =
    'flex items-center space-x-2 border border-grey-400 px-[24px] rounded-md hover:border-[1.75px] hover:border-grey-900 hover:shadow-button bg-white shadow-button ';
  const checkboxBaseStyles = 'form-checkbox h-5 w-5';
  const errorTextStyles = 'text-red-500 text-xs italic mt-1';

  let checkboxStyles = `${checkboxBaseStyles} ${disabled ? 'bg-grey-300' : 'bg-white'
    } ${outlined ? 'border-grey-500 border-2' : 'border'} ${error ? 'border-red-500' : 'border-grey-300'
    }`;

  checkboxStyles += disabled
    ? ' cursor-not-allowed'
    : ' cursor-pointer bg-red-500';

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const sizeClass = useMemo(() => {
    return SIZES[size] || 'min-w-[163px]';
  }, [size]);

  const renderCheckbox = (
    <label
      className={`${baseStyles} ${height} ${disabled ? 'opacity-50' : ''} ${sizeClass} cursor-pointer ${value ? ' border-grey-900 shadow-button ' : ' border-grey-400'
        } ${classNames} `}
    >
      <input
        type="checkbox"
        className={`${checkboxStyles} hidden`}
        disabled={disabled}
        onChange={handleOnChange}
      />

      <div
        className={`relative ${value ? 'bg-grey-900' : 'bg-white'} ${disabled ? 'bg-grey-300' : ''
          } border w-[18px] h-[18px]`}
      >
        {value && (
          <svg
            width={16}
            height={16}
            className="absolute top-0 left-0  text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.7,5.3a1,1,0,0,1,0,1.4l-8,8a1,1,0,0,1-1.4,0l-4-4a1,1,0,1,1,1.4-1.4L8,12.3l7.3-7.3A1,1,0,0,1,16.7,5.3Z" />
          </svg>
        )}
      </div>

      <Typography
        type="b3"
        otherClasses="ml-[8px] !mb-0 !mr-0 !mt-0 text-grey-900"
        gutterBottom={false}
      >
        {label}
      </Typography>

      {!withLabel && error && <p className={errorTextStyles}>{error}</p>}
    </label>
  )

  return (

    withLabel ? (
      <FormFieldContainer
        appendInner={appendInner}
        error={error}
        label={label}
        helpText={helpText}
        required={required}
      >

        {renderCheckbox}

      </FormFieldContainer>

    ) : renderCheckbox)
};
