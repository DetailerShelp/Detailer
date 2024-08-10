import { clampText } from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { PublicationArrowButton } from "@/common/styles/tags/button/PublicationArrowButton";
import { TouchEvent, useState } from "react";
import styled from "styled-components";

const PublicationWrapper = styled("div")`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

const PublicationImagesWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const PublicationImg = styled("img")`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  display: block;
  flex-shrink: 0;
  flex-grow: 0;

  transition: ${transitions.mediumTransition};
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
  const count = imageVideo?.length || 1;

  const handlePrevCount = () => {
    setCurrentCount((index) => (index === 0 ? 0 : index - 1));
  };

  const handleNextCount = () => {
    setCurrentCount((index) => (index === count - 1 ? count - 1 : index + 1));
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    touchEndX = event.changedTouches[0].clientX;

    if (touchStartX > touchEndX + 40) {
      handleNextCount();
    } else if (touchStartX < touchEndX - 40) {
      handlePrevCount();
    }
  };

  return (
    <PublicationWrapper>
      <PublicationImagesWrapper
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imageVideo?.map((item, index) => (
          <PublicationImg
            key={index}
            src={item}
            alt={description}
            style={{ translate: `${-100 * currentCount}%` }}
          />
        ))}
      </PublicationImagesWrapper>

      {count !== 1 && (
        <PublicationCount>{`${currentCount + 1}/${count}`}</PublicationCount>
      )}

      {currentCount !== 0 && (
        <PublicationArrowWrapper arrow="left">
          <PublicationArrowButton title="Предыдущее" click={handlePrevCount} />
        </PublicationArrowWrapper>
      )}

      {currentCount !== count - 1 && (
        <PublicationArrowWrapper arrow="right">
          <PublicationArrowButton title="Следущее" click={handleNextCount} />
        </PublicationArrowWrapper>
      )}
    </PublicationWrapper>
  );
};
