import {
  NavigationItem,
  NavigationLink,
} from "@/common/components/navpanel/styles";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";

interface NavPanelProps {
  linkTo: string;
  name: string;
  icon: ImageComponentsTypes;
}

export const NavItem = ({ linkTo, name, icon }: NavPanelProps) => {
  return (
    <NavigationItem>
      <NavigationLink to={linkTo}>
        <SvgHelper iconName={icon} />
        {name}
      </NavigationLink>
    </NavigationItem>
  );
};
