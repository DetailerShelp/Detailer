import { useMemo, useState } from "react";
import { ToastContext } from "@/common/toast/toast-contex";
import { ToastsWrapper } from "@/common/toast/style";
import Toast from "@/common/toast/Toast";
import { IToast, ToastInfo, ToastProviderProperties, ToastType } from "@/common/toast/interface";

export const ToastProvider = ({ children }: ToastProviderProperties) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const openInfo = (message?: ToastInfo) => {
        openToast('info', message);
    };

    const openSuccess = (message?: ToastInfo) => {
        openToast('success', message);
    };

    const openError = (message?: ToastInfo) => {
        openToast('error', message);
    };

    const openWarning = (message?: ToastInfo) => {
        openToast('warning', message);
    };

    const openToast = (type: ToastType, message?: ToastInfo) => {
        const newToast = {
            id: Date.now(),
            message: message,
            type: type,
        };
        setToasts((prev) => [...prev.slice(-4), newToast]);
    };

    const closeToast = (id: number) => {
        setToasts((prev) => prev.filter(toast => toast.id !== id));
    };

    const contextValue = useMemo(() => ({
        info: openInfo,
        success: openSuccess,
        error: openError,
        warning: openWarning,
        close: closeToast,
    }), []);

    return (
        <>
            <ToastContext.Provider value={contextValue}>
                {children}
                <ToastsWrapper>
                    {toasts && toasts.map((toast) => {
                        return (
                            <Toast
                                key={toast.id}
                                message={toast.message}
                                close={() => closeToast(toast.id)}
                                type={toast.type}
                            />
                        )
                    })}
                </ToastsWrapper>
            </ToastContext.Provider>
        </>
    )
}