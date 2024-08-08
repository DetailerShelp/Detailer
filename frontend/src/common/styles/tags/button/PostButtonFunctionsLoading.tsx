import { PostBottomList } from "@/common/components/post/styles";
import styled from "styled-components";
import { flexCenter, loadingGradient, square } from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";

const Item = styled("li")`
  ${flexCenter}
  column-gap: 5px;
`;

const Icon = styled("div")`
  ${square(35)}
  border-radius: ${borders.circleBorderRadius};
  ${loadingGradient}
`;

const Text = styled("p")`
  width: 35px;
  height: 18px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}
`;

export const PostButtonFunctionsLoading = () => {
  return (
    <>
      <PostBottomList>
        <Item>
          <Icon />
          <Text />
        </Item>

        <Item>
          <Icon />
          <Text />
        </Item>

        <Item>
          <Icon />
        </Item>
      </PostBottomList>
      <Icon />
    </>
  );
};
