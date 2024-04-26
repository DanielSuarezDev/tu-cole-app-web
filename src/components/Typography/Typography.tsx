import React, { FC } from 'react';
import he from 'he';

import { Required } from '../../assets/icons';
import { TypeTypography, tagsByType } from './utils.typography';

type Props = {
  children: React.ReactNode;
  type: keyof typeof TypeTypography;
  gutterBottom?: boolean;
  noWrap?: boolean;
  bold?: boolean;
  required?: boolean;
  color?: string;
  otherClasses?: string;
};

export const Typography: FC<Props> = ({
  children,
  type = TypeTypography.b1,
  gutterBottom = true,
  noWrap = false,
  bold = false,
  required = false,
  color,
  otherClasses,
}) => {
  const Parent = tagsByType(type, {
    bold,
    noWrap,
    gutterBottom,
    color,
    otherClasses,
  });

  const renderChildren = (children: React.ReactNode) => {
    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        return he.decode(child);
      }
      return child;
    });
  };

  return (
    <Parent>
      {renderChildren(children)}
      {required && (
        <span className="inline-block">
          <Required style={{ marginLeft: '4px' }} />
        </span>
      )}
    </Parent>
  );
};
