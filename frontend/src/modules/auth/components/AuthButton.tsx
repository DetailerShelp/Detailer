import { ButtonWrapper } from "@/common/styles/tags/button/BlackWhiteButton";
import styled from "styled-components";

interface AuthButtonProps {
    title: string,
    clickFuntion: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

export const AuthButtonWrapper = styled(ButtonWrapper)`
width: 100%;
`;

export default function AuthButton({ title, clickFuntion }: AuthButtonProps) {
    return (
        <AuthButtonWrapper color="black" size={50} onClick={(e) => clickFuntion(e)}>{title}</AuthButtonWrapper>
    )
}
