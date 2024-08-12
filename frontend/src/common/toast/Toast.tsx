import { useMemo, useState } from "react";
import { 
    ToastStyled, 
    ToastContent, 
    ToastHeader, 
    ToastMessage, 
    ButtonWrapper 
} from "@/common/toast/style";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { ToastProps } from "@/common/toast/interface";
import { 
    defaultError, 
    defaultInfo, 
    defaultSuccess, 
    defaultWarning 
} from "@/common/toast/toastsMessages/defaultToasts";

const Toast = ({ message, close, type }: ToastProps) => {
    const [isRemove, setIsRemove] = useState(false);

    setTimeout(() => {
        setIsRemove(true);

        setTimeout(() => {
            close();
        }, 200);
    }, 4000);

    const handleClose = () => {
        setIsRemove(true);

        setTimeout(() => {
            close();
        }, 200);
    };

    const toastContent = useMemo(() => ({
        info: (
            <>
                <SvgHelper iconName="infoToast" />
                <ToastContent>
                    <ToastHeader>{message?.message ?? defaultInfo.message}</ToastHeader>
                    <ToastMessage>{message?.description ?? defaultInfo.description}</ToastMessage>
                </ToastContent>
            </>
        ),
        success: (
            <>
                <SvgHelper iconName="success" color="green"/>
                <ToastContent>
                    <ToastHeader>{message?.message ?? defaultSuccess.message}</ToastHeader>
                    <ToastMessage>{message?.description ?? defaultSuccess.description}</ToastMessage>
                </ToastContent>
            </>
        ),
        warning: (
            <>
                <SvgHelper iconName="warning"/>
                <ToastContent>
                    <ToastHeader>{message?.message ?? defaultWarning.message}</ToastHeader>
                    <ToastMessage>{message?.description ?? defaultWarning.description}</ToastMessage>
                </ToastContent>
            </>
        ),
        error: (
            <>
                <SvgHelper iconName="error" color="red"/>
                <ToastContent>
                    <ToastHeader>{message?.message ?? defaultError.message}</ToastHeader>
                    <ToastMessage>{message?.description ?? defaultError.description}</ToastMessage>
                </ToastContent>
            </>
        ),
    }), [message]);

    return (
        <ToastStyled $isRemove={isRemove}>
            {toastContent[type]}
            <ButtonWrapper>
                <ButtonWithIcon click={handleClose} icon="close" size={30} />
            </ButtonWrapper>
        </ToastStyled>
    )
};

export default Toast;




