import {
  GarageCharcteristicAboutWrapper,
  GarageCharcteristicDescription,
  GarageCharcteristicItem,
  GarageCharcteristicSubtitle,
} from "@/common/components/garage/styles";
import { colors } from "@/common/styles/styleConstants";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";

const GarageCharcteristicIcon = styled(SvgHelper)`
  width: 30px;
  height: 30px;
  color: ${colors.grayAccent};
`;

interface CharacteristicsItemProps {
  icon: ImageComponentsTypes;
  title: string;
  description: string;
}

export const CharacteristicsItem = ({
  icon,
  title,
  description,
}: CharacteristicsItemProps) => {
  return (
    <GarageCharcteristicItem>
      <GarageCharcteristicIcon iconName={icon} />
      <GarageCharcteristicAboutWrapper>
        <GarageCharcteristicSubtitle>{title}</GarageCharcteristicSubtitle>
        <GarageCharcteristicDescription>
          {description}
        </GarageCharcteristicDescription>
      </GarageCharcteristicAboutWrapper>
    </GarageCharcteristicItem>
  );
};
