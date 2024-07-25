import { DropdownList } from "@/common/components/dropdown-menu/styles";
import { CSSProperties } from "styled-components";

interface DropdownMenuProps {
  children: React.ReactNode[];
  style?: CSSProperties;
}

export const DropdownMenu = ({ children, style }:DropdownMenuProps ) => {
  return (
    <>
      <DropdownList style={style}>{children}</DropdownList>
    </>
  );
};
