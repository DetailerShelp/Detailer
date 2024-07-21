import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";
import { colors } from "@/common/styles/styleConstants";

const ControlsVideo = styled('button')`
position: absolute;
width: 100px;
height: 100px;
background-color: ${colors.blackTransparent};
border: none;
border-radius: 50%;
top: calc(50% - 50px);
left: calc(50% - 50px);
`;

export default function PlayVideoButton() {
    return (
        <ControlsVideo >
            <SvgHelper width="30px" height="30px" iconName="play" color="white" />
        </ControlsVideo>
    )
}
