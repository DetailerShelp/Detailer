import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { FC } from "react";
import { DropdownItem, DropdownLink } from "@/common/components/dropdown-menu/styles";

interface DropdownMenuItemProps {
  icon: ImageComponentsTypes;
  title: string;
  isRed?: boolean;
  link: string;
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
