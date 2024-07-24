import { styledWrapper } from "@/common/styles/mixins";
import styled from "styled-components";
import { PageHeaderContent } from "@/modules/user/PageHeaderContent";
import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import { device } from "@/common/styles/styleConstants";

const HelpWrapper = styled("div")`
  ${styledWrapper}
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HelpFormWrapper = styled("div")`
  width: 100%;
  padding: 15px 25px;

  @media ${device.mobileL} {
    padding: 15px;
  }
`;

export const HelpForm = () => {
  return (
    <HelpWrapper>
      <PageHeaderContent title="Поддержка" />
      <HelpFormWrapper>
        <MultipleInput key="help" placeholder="Опишите проблему..." />
      </HelpFormWrapper>
    </HelpWrapper>
  );
};
