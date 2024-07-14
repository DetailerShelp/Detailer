import { clampHeight, clampWidth } from "@/common/styles/mixins";
import SvgHelper from "@/common/svg-helper/SvgHelper"
import styled from "styled-components"


const AuthLogoWrapper = styled(SvgHelper)`
${clampWidth(150, 360)};
${clampHeight(30, 70)};
margin-bottom: 10px;
`;

export default function AuthLogo() {
    return (
        <AuthLogoWrapper iconName="logo" />
    )
}
