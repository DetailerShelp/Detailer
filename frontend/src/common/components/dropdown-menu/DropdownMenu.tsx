import { DropdownList } from "@/common/components/dropdown-menu/styles";

export const DropdownMenu = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <>
      <DropdownList>{children}</DropdownList>
    </>
  );
};
