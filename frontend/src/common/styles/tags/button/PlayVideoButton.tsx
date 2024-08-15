import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";
import { borders, colors } from "@/common/styles/styleConstants";
import { absCenter, flexCenter, square } from "@/common/styles/mixins";

const ControlsVideo = styled('button')`
${square(100)}
pointer-events: none;
background-color: ${colors.blackTransparent};
border: none;
border-radius: ${borders.circleBorderRadius};
${flexCenter}
${absCenter}
`;

export default function PlayVideoButton() {
    return (
        <ControlsVideo >
            <SvgHelper width="30px" height="30px" iconName="shorts" color="white" />
        </ControlsVideo>
    )
}
