import {
  PostBottomWrapper,
  PostMenuSubsribeWrapper,
  PostMenuWrapper,
  PostTopBarWrapper,
  PostWrapper,
} from "@/common/components/post/styles";
import { ShortProfileInfoLoading } from "@/common/components/loading/ShortProfileInfoLoading";
import {
  LoadingCircle,
  LoadingDescription,
  LoadingPublication,
  LoadingTime,
  LoadingWhiteBlackButton,
} from "@/common/components/loading/styles";
import { PostButtonFunctionsLoading } from "@/common/styles/tags/button/PostButtonFunctionsLoading";
import { GarageContentWrapper } from "@/common/components/garage/styles";

export const PostLoading = () => {
  return (
    <PostWrapper>
      <PostTopBarWrapper>
        <ShortProfileInfoLoading />
        <PostMenuWrapper>
          <PostMenuSubsribeWrapper>
            <LoadingWhiteBlackButton $size={30} />
          </PostMenuSubsribeWrapper>

          <LoadingCircle $size={30} />
        </PostMenuWrapper>
      </PostTopBarWrapper>

      <LoadingPublication />

      <PostBottomWrapper>
        <PostButtonFunctionsLoading />
      </PostBottomWrapper>

      <GarageContentWrapper>
        <LoadingDescription />
        <LoadingDescription />
        <LoadingDescription />
      </GarageContentWrapper>

      <LoadingTime />
      <div />
    </PostWrapper>
  );
};
