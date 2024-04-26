import { FC } from 'react';

import { Typography } from '../Typography/Typography';
import { getIconByName } from '../../utils/iconSelector';

const variants = {
  filled:
    'bg-primary hover:bg-error-500 !text-white active:bg-grey-800 disabled:bg-disabled',
  ghost:
    'bg-transparent border-[1.25px] border-grey-900 !text-grey-900 hover:border-[3px] active:border-grey-700 active:text-grey-700 disabled:border-disabled disabled:text-disabled',
  gray: 'bg-gray-200 font-bold leading-none text-[14px] text-grey-700',
  menu: 'text-grey-800 hover:text-grey-900 hover:bg-white active:bg-grey-200 active:text-gray-a100 disabled:bg-disabled disabled:text-disabled',
  text: 'text-grey-800 hover:text-grey-900 disabled:text-disabled',
};

const variantsIcon = {
  filled: '!text-white',
  ghost:
    '!text-grey-900 hover:border-[3px] active:text-grey-700 disabled:border-disabled disabled:text-disabled',
  menu: 'text-grey-800 hover:text-grey-900 active:text-gray-a100 disabled:text-disabled',
  text: 'text-grey-800 hover:text-grey-900 disabled:text-disabled',
} as any

export interface ButtonProps {
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  testId?: string;
  icon?: string;
  fullWidth?: boolean;
  width?: string;
  height?: string;
  borderBold?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: keyof typeof variants;
  disabled?: boolean;
  onClick?: () => void;
  otherClass?: string;
  children?: React.ReactNode;
  padding?: string;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  label,
  iconLeft,
  iconRight,
  testId,
  icon,
  width = 'w-[187px]',
  height = 'h-[44px]',
  disabled,
  variant = 'filled',
  fullWidth = false,
  padding = 'py-[16px] px-[24px]',
  borderBold,
  otherClass,
  children,
  loading,
  onClick,
  ...rest
}) => {
  const baseStyle = `focus:outline-none transition-all duration-150 ease-in-out flex items-center rounded-[6px] ${padding} text-center`;
  const className = `
  ${baseStyle}
  ${variants[variant]}
  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  ${loading ? 'opacity-60 cursor-not-allowed' : ''}
  ${width}
  ${height}
  ${fullWidth ? 'w-full' : ''}
  ${borderBold ? 'border-[3px] border-grey-a100' : ''}
  ${otherClass ? otherClass : ''}
  button-style
  `.trim();
  return (
    <button
      {...rest}
      data-testid={testId}
      disabled={disabled}
      className={className}
      type={rest.type}
      onClick={() => {
        if (onClick && !disabled && !loading) {
          onClick();
        }
      }}
    >
      {loading && (
        <div className="text-center w-full">
          <svg
            role="status"
            className="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      {!loading && iconLeft && (
        <div className={variantsIcon[variant]} data-testid={iconLeft}>
          {iconLeft && getIconByName(iconLeft)}
        </div>
      )}
      {label && !loading && (
        <Typography
          type="l2"
          bold
          otherClasses="!leading-none pointer-events-none p-0 m-0 !mb-[0px] overflow-hidden uppercase text-center w-full"
          gutterBottom={false}
        >
          {label}
        </Typography>
      )}
      {children}
      {!loading && iconRight && (
        <div
          className={`${variantsIcon[variant]} mb-1 ml-2`}
          data-testid={iconRight}
        >
          {iconRight && getIconByName(iconRight)}
        </div>
      )}
    </button>
  );
};
