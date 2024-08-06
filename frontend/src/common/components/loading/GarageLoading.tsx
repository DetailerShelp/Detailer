import {
  GarageBottomWrapper,
  GarageButtonWrpper,
  GarageContentWrapper,
  GarageMarkItem,
  GarageMarkList,
  GarageMarkSubtitle,
  GarageMarkWrapper,
  GarageMenuSubsribeWrapper,
  GarageMenuWrapper,
  GarageTopBarWrapper,
  GarageWrapper,
  GarageCharcteristicList,
  GarageCharcteristicItem,
} from "@/common/components/garage/styles";
import styled from "styled-components";
import { loadingGradient } from "@/common/styles/mixins";
import { PostButtonFunctionsLoading } from "@/common/styles/tags/button/PostButtonFunctionsLoading";
import { borders } from "@/common/styles/styleConstants";
import {
  LoadingCircle,
  LoadingDescription,
  LoadingPublication,
  LoadingSubtitle,
  LoadingTime,
  LoadingTitle,
  LoadingWhiteBlackButton,
} from "@/common/components/loading/styles";
import { ShortProfileInfoLoading } from "@/common/components/loading/ShortProfileInfoLoading";

const List = styled(GarageCharcteristicList)`
  column-gap: 150px;
`;

const Item = styled(GarageCharcteristicItem)``;

const ItemWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const ItemTitle = styled("p")`
  width: 30px;
  height: 12px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}
`;

const ItemDescription = styled("p")`
  width: 60px;
  height: 15px;
  border-radius: ${borders.mediaBorderRadius};
  ${loadingGradient}
`;

const Stars = styled("div")`
  width: 100px;
  height: 25px;
  margin-left: 10px;
  border-radius: ${borders.defaultBorderRadius};
  ${loadingGradient}
`;

export const GarageLoading = () => {
  return (
    <GarageWrapper>
      <GarageTopBarWrapper>
        <ShortProfileInfoLoading />
        <GarageMenuWrapper>
          <GarageMenuSubsribeWrapper>
            <LoadingWhiteBlackButton size={30} />
          </GarageMenuSubsribeWrapper>

          <LoadingCircle size={30} />
        </GarageMenuWrapper>
      </GarageTopBarWrapper>

      <LoadingPublication />

      <GarageBottomWrapper>
        <PostButtonFunctionsLoading />
      </GarageBottomWrapper>

      <GarageContentWrapper>
        <LoadingTitle />
        <List>
          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>
        </List>
      </GarageContentWrapper>

      <GarageContentWrapper>
        <LoadingTitle /> <LoadingDescription />
        <LoadingDescription />
        <LoadingDescription />
      </GarageContentWrapper>

      <GarageContentWrapper>
        <LoadingTitle />
        <GarageMarkWrapper>
          <GarageMarkSubtitle>
            <LoadingSubtitle /> <Stars />
          </GarageMarkSubtitle>
        </GarageMarkWrapper>

        <GarageMarkList>
          <GarageMarkItem color="green">
            <LoadingCircle size={30} />
            <LoadingDescription />
          </GarageMarkItem>

          <GarageMarkItem color="red">
            <LoadingCircle size={30} />
            <LoadingDescription />
          </GarageMarkItem>
        </GarageMarkList>
      </GarageContentWrapper>

      <GarageContentWrapper>
        <LoadingTitle />
        <List>
          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>

          <Item>
            <LoadingCircle size={30} />
            <ItemWrapper>
              <ItemTitle />
              <ItemDescription />
            </ItemWrapper>
          </Item>
        </List>
      </GarageContentWrapper>

      <LoadingTime />

      <GarageButtonWrpper>
        <LoadingWhiteBlackButton size={40} />
      </GarageButtonWrpper>
    </GarageWrapper>
  );
};
