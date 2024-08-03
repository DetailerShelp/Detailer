import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { FC } from "react";
import { DropdownButton, DropdownItem } from "@/common/components/dropdown-menu/styles";
import { useNavigate } from "react-router-dom";

interface DropdownMenuItemProps {
  icon: ImageComponentsTypes;
  title: string;
  isRed?: boolean;
  link?: string;
  onClick?: () => void;
}


export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  icon,
  title,
  isRed,
  link,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    if (link)
      navigate(link);
  };

  return (
    <DropdownItem>
      <DropdownButton isRed={isRed} onClick={handleClick}>
        <SvgHelper iconName={icon} width="22" height="22" />
        {title}
      </DropdownButton>
    </DropdownItem>
  );
};
