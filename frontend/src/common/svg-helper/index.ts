import profile from '@/common/svg-helper/icons/nav-icons/profile.svg?react';
import home from '@/common/svg-helper/icons/nav-icons/home.svg?react';
import saved from '@/common/svg-helper/icons/nav-icons/saved.svg?react';
import messenger from '@/common/svg-helper/icons/nav-icons/messenger.svg?react';
import shorts from '@/common/svg-helper/icons/nav-icons/shorts.svg?react';
import qrcode from '@/common/svg-helper/icons/nav-icons/qrcode.svg?react';
import settings from '@/common/svg-helper/icons/nav-icons/settings.svg?react';
import help from '@/common/svg-helper/icons/nav-icons/help.svg?react';
import close from '@/common/svg-helper/icons/close.svg?react';
import trash from '@/common/svg-helper/icons/trash.svg?react';


export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

// type here name of icon.
// in SvgHelper iconType prop you can see ts help with names from this union type
export type ImageComponentsTypes =
  | 'profile'
  | 'home'
  | 'saved'
  | 'messenger'
  | 'shorts'
  | 'qrcode'
  |'settings'
  | 'help'
  | 'close'
  | 'trash';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
  profile,
  home,
  saved,
  messenger,
  shorts,
  qrcode,
  settings,
  help,
  close,
  trash,
};
