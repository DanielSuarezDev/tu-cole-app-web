import React from 'react';

import MemoSvgAdd from '../../../../../lib/ui/assets/icons/Add';

export const DropdownIndicator = (props: any) => {
  const { selectProps } = props;
  return (
    <div {...props.innerProps}>
      {selectProps.isMulti ? (
        <span className="bg-red-500 w-6 h-6">
          <MemoSvgAdd fill="#666666" />
        </span>
      ) : (
        <span className="text-grey-600">⌄</span>
      )}
    </div>
  );
};
