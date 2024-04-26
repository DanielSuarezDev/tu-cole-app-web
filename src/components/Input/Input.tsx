'use client';
import React, { FC, useState } from 'react';
import he from 'he';

import { OnlyInput } from './onlyInput';
import { getIconByName } from '../../../utils';
import { FormFieldContainer } from '../FormFieldContainer/FormFieldContainer';
import { formatPhoneNumber } from '../../../../../commons/utils/formatNumber';

export interface InputBaseProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: 'text' | 'number' | 'password' | 'email';
  label: string;
  startIcon?: string;
  endIcon?: string;
  error?: string;
  height?: string;
  required?: boolean;
  isPhoneField?: boolean;
  otherClasses?: string;
  width?: string;
  isTextarea?: boolean;
  helpText?: string;
  appendInner?: React.ReactNode;
  placeholderDefault?: boolean;
  max?: number;
  min?: number;
  inputClasses?: string;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  isNumber?: boolean;
}

export const MyInputBase: FC<InputBaseProps> = ({
  label,
  value = '',
  endIcon,
  disabled,
  startIcon,
  placeholder,
  placeholderDefault,
  required,
  height = 'h-[44px]',
  width = 'w-full',
  type = 'text',
  error,
  isPhoneField,
  otherClasses,
  isTextarea = false,
  helpText,
  appendInner,
  inputClasses,
  onChange,
  min,
  max,
  onFocus,
  onBlur,
  isNumber = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: any) => {
    if (isPhoneField) {
      const formattedValue = formatPhoneNumber(event.target.value);
      //@ts-ignore
      onChange({
        ...event,
        target: { ...event.target, value: formattedValue },
      });
    } else if (isNumber) {
      //@ts-ignore
      onChange({
        ...event,
        target: {
          ...event.target,
          value: event.target.value
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*)\./g, '$1')
            .replace(/(\.\d{2})\d+/, '$1')
        },
      });
    } else {
      //@ts-ignore
      onChange(event);
    }
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const errorClass = !!error ? '!border-error-main' : 'border-grey-300';
  const heightClass = height ? height : 'h-auto';
  const widthClass = width ? width : 'w-full';
  const disabledClasses = disabled ? '!bg-gray-200 cursor-not-allowed' : '';
  const decodedValue = value ? he?.decode(String(value)) : '';

  return (
    <FormFieldContainer
      appendInner={appendInner}
      error={error}
      label={label}
      helpText={helpText}
      required={required}
      otherClasses={otherClasses}
    >
      <div
        className={`flex border-[1px] items-center relative border-grey-300 rounded-[6px] bg-white ${heightClass} ${disabledClasses} ${errorClass} ${widthClass}`}
      >
        {startIcon && (
          <div className="inline-flex items-center px-2 cursor-pointer">
            {getIconByName(startIcon)}
          </div>
        )}
        <OnlyInput
          placeholder={placeholderDefault ? `Enter your ${label}` : placeholder}
          value={decodedValue}
          max={max}
          min={min}
          onChange={handleChange}
          showPassword={showPassword}
          disabled={disabled}
          type={inputType}
          isTextarea={isTextarea}
          otherClasses={inputClasses}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {endIcon && (
          <div className="inline-flex items-center px-2 cursor-pointer">
            {getIconByName(endIcon)}
          </div>
        )}
        {type === 'password' && (
          <div
            className="inline-flex items-center px-2 cursor-pointer"
            onClick={handleClickShowPassword}
          >
            {showPassword ? getIconByName('Eye') : getIconByName('EyeClose')}
          </div>
        )}
      </div>
    </FormFieldContainer>
  );
};
