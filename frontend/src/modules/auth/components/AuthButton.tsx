import { ButtonWrapper } from "@/common/styles/tags/button/BlackWhiteButton";

interface AuthButtonProps {
    title: string,
    clickFuntion: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function AuthButton({ title, clickFuntion }: AuthButtonProps) {
    return (
        <ButtonWrapper color="black" size={50} onClick={(e) => clickFuntion(e)}>{title}</ButtonWrapper>
    )
}
