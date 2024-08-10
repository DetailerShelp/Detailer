import styled from "styled-components";
import { clampText, opacityHoverActive, resetButton } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import { useState } from "react";

const MoreWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 25px;

  @media ${device.tablet} {
    padding-inline: 20px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
  }
`;

const MoreButton = styled("button")`
  ${resetButton}
  text-align: start;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.grayAccent};

  ${opacityHoverActive}
`;

export const Description = styled("p")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
`;

const ReduceDescription = styled(Description)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
`;

interface MoreDescriptionButtonProps {
  description?: string;
}

export const MoreDescriptionButton = ({
  description,
}: MoreDescriptionButtonProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <MoreWrapper>
      {!!description &&
        (description.length >= 200 ? (
          <>
            {!isOpen && (
              <>
                <ReduceDescription>{description}</ReduceDescription>
                <MoreButton onClick={() => setOpen(true)}>
                  Показать еще
                </MoreButton>
              </>
            )}
            {isOpen && <Description>{description}</Description>}
          </>
        ) : (
          <Description>{description}</Description>
        ))}
    </MoreWrapper>
  );
};
