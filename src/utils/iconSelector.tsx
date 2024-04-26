import { FC } from 'react';

import RecicleSvg from '../assets/icons/Recicle';
import MemoSvgEyeClose from '../assets/icons/EyeClose';
import MemoSvgEye from '../assets/icons/Eye';
import MemoSvgArrowRigth from '../assets/icons/ArrowRigth';
import MemoSvgArrowLeft from '../assets/icons/ArrowLeft';

import { Add, Save, SvgKey, Check, EyePreview } from '../assets/icons';

const icons: { [key: string]: FC } = {
  Recicle: RecicleSvg,
  EyeClose: MemoSvgEyeClose,
  Eye: MemoSvgEye,
  ArrowRigth: MemoSvgArrowRigth,
  ArrowLeft: MemoSvgArrowLeft,
  Add: Add,
  Save: Save,
  Key: SvgKey,
  Check,
  CheckBlack: () => <Check fill="#000" />,
  EyePreview,
};

export const getIconByName = (name: string) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent /> : null;
};
