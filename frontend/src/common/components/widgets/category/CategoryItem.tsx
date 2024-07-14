import { ImageComponentsTypes } from "@/common/svg-helper";
import { FC } from "react";
import {
  CategoryLink,
  CategoryLinkIconWrapper,
  CategoryLinkTitle,
  CategoryListItem,
} from "@/common/components/widgets/category/styles";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";
import { absCenter } from "@/common/styles/mixins";

const CategoryIcon = styled(SvgHelper)`
  ${absCenter}
  z-index: 1;
`;

interface CategoryItemProps {
  icon: ImageComponentsTypes;
  title: string;
  link: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ icon, title, link }) => {
  return (
    <CategoryListItem>
      <CategoryLink to={link}>
        <CategoryLinkIconWrapper>
          <CategoryIcon iconName={icon} width="35" height="35" />
        </CategoryLinkIconWrapper>
        <CategoryLinkTitle>{title}</CategoryLinkTitle>
      </CategoryLink>
    </CategoryListItem>
  );
};
