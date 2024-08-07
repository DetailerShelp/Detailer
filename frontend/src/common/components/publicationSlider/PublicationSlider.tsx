import { clampText } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { PublicationArrowButton } from "@/common/styles/tags/button/PublicationArrowButton";
import { useState } from "react";
import styled from "styled-components";

const PublicationWrapper = styled("ul")`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

const PublicationImg = styled("img")`
  width: 100%;
  aspect-ratio: 1;

  object-fit: cover;
  object-position: center;
`;

const PublicationArrowWrapper = styled("div")<{ arrow: string }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.arrow === "left" && 0};
  right: ${(props) => props.arrow === "right" && 0};
  z-index: 1;
  width: 50px;
  height: 100%;

  transform: ${(props) => props.arrow === "right" && "rotate(180deg)"};
`;

const PublicationCount = styled("span")`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  z-index: 1;

  padding: 2px 7px;
  color: ${colors.white};
  background-color: ${colors.blackTransparent};
  border-radius: ${borders.defaultBorderRadius};
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  user-select: none;
`;

interface PublicationSliderProps {
  imageVideo?: string[];
  description?: string;
}

export const PublicationSlider = ({
  imageVideo,
  description,
}: PublicationSliderProps) => {
  const [currentCount, setCurrentCount] = useState(0);
  const count = imageVideo.length || 0;
  return (
    <PublicationWrapper>
      {count !== 0 && (
        <PublicationCount>{`${currentCount + 1}/${count}`}</PublicationCount>
      )}

      {currentCount !== 0 && (
        <PublicationArrowWrapper arrow="left">
          <PublicationArrowButton
            title="Предыдущее"
            click={() => setCurrentCount(currentCount - 1)}
          />
        </PublicationArrowWrapper>
      )}

      {currentCount !== count - 1 && (
        <PublicationArrowWrapper arrow="right">
          <PublicationArrowButton
            title="Следущее"
            click={() => setCurrentCount(currentCount + 1)}
          />
        </PublicationArrowWrapper>
      )}

      <PublicationImg src={imageVideo[currentCount]} alt={description} />
    </PublicationWrapper>
  );
};
