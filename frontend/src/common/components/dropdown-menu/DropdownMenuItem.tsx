import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { FC } from "react";
import { DropdownButton, DropdownItem, DropdownLink } from "@/common/components/dropdown-menu/styles";

interface DropdownMenuItemProps {
  icon: ImageComponentsTypes;
  title: string;
  isRed?: boolean;
  link: string;
}

interface DropdownMenuItemButtonProps {
  icon: ImageComponentsTypes;
  title: string;
  isRed?: boolean;
  onClick?: ()=>void;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  icon,
  title,
  isRed,
  link,
}) => {
  return (
    <DropdownItem>
      {/* TODO Link */}
      <DropdownLink isRed={isRed} href={link}>
        <SvgHelper iconName={icon} width="22" height="22" />
        {title}
      </DropdownLink>
    </DropdownItem>
  );
};

export const DropdownMenuItemButton: FC<DropdownMenuItemButtonProps> = ({
  icon,
  title,
  isRed,
  onClick,
}) => {
  return (
    <DropdownItem onClick={onClick}>
      <DropdownButton isRed={isRed}>
        <SvgHelper iconName={icon} width="22" height="22" />
        {title}
      </DropdownButton>
    </DropdownItem>
  );
};
