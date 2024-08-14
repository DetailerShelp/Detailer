import styled from "styled-components";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { colors } from "@/common/styles/styleConstants";

const StarRaitingWrapper = styled("div")<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 4px;
  pointer-events: ${(props) => props.$isActive === false && "none"};
`;

const StarIcon = styled(SvgHelper)<{ $color?: string }>`
  width: 24px;
  height: 24px;
  color: ${(props) => (props.$color ? props.$color : "transparent")};
`;

const createArray = (length: number) => [...Array(length)];

interface StarProps {
  selected: boolean;
  halfSelected: boolean;
  onSelect: () => void;
}

const Star = ({
  selected = false,
  halfSelected = false,
  onSelect,
}: StarProps) => {
  const iconName = halfSelected
    ? "starHalf"
    : selected
    ? "starActive"
    : "starDefault";
  return (
    <StarIcon
      iconName={iconName}
      $color={`${colors.yellow}`}
      onClick={onSelect}
    />
  );
};

interface PropsStarRaiting {
  totalStars: number;
  score: number;
  setScore: (score: number) => void;
}

function StarTotalRaiting({
  score,
  setScore,
  totalStars = 5,
}: PropsStarRaiting) {
  return (
    <>
      {createArray(totalStars).map((_, i: number) => {
        const isHalf = score === i + 0.5;
        return (
          <Star
            key={i}
            selected={score > i + 0.5}
            halfSelected={isHalf}
            onSelect={() => {
              isHalf
                ? setScore(i)
                : score === i + 1
                ? setScore(i + 0.5)
                : setScore(i + 1);
            }}
          />
        );
      })}
    </>
  );
}

interface StarsProps {
  stars: number;
  setStars: (stars: number) => void;
  isActive?: boolean;
}

export const StarRaiting = ({ stars, setStars, isActive }: StarsProps) => {
  return (
    <StarRaitingWrapper $isActive={isActive}>
      <StarTotalRaiting totalStars={5} score={stars} setScore={setStars} />
    </StarRaitingWrapper>
  );
};
