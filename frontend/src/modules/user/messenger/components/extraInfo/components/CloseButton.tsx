import SvgHelper from "@/common/svg-helper/SvgHelper";
import { CloseButtonStyled } from "@/modules/user/messenger/components/extraInfo/style";

interface CloseButtonProps {
    onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <CloseButtonStyled onClick={onClose}>
            <SvgHelper iconName="close" height="25px" width="25px" />
        </CloseButtonStyled>
    )
};

export default CloseButton;