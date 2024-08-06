import { WidgetsWrapper } from "@/common/components/widgets/WidgetsWrapper";
import { AccountsList } from "@/common/components/widgets/accounts/styles";
import styled from "styled-components";
import { flexCenter, loadingGradient, square } from "@/common/styles/mixins";
import { borders, device } from "@/common/styles/styleConstants";

const AccountsItem = styled("li")`
  ${flexCenter}
  flex-direction: column;
  row-gap: 5px;
  text-align: center;
`;

const Avatar = styled("div")`
  ${square(40)}
  border-radius: ${borders.circleBorderRadius};
  ${loadingGradient}
`;

const Name = styled("div")`
  width: 50px;
  height: 12px;
  ${loadingGradient};
  border-radius: ${borders.mediaBorderRadius};

  @media ${device.mobileM} {
    height: 10px;
  }
`;

interface AccountsLoadingProps {
  title: string;
}

export const AccountsLoading = ({ title }: AccountsLoadingProps) => {
  return (
    <WidgetsWrapper title={title}>
      <AccountsList>
        <AccountsItem>
          <Avatar />
          <Name />
        </AccountsItem>

        <AccountsItem>
          <Avatar />
          <Name />
        </AccountsItem>

        <AccountsItem>
          <Avatar />
          <Name />
        </AccountsItem>
      </AccountsList>
    </WidgetsWrapper>
  );
};
