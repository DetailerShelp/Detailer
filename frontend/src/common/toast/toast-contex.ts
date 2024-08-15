import { createContext, useContext } from "react";
import { ToastInfo } from "@/common/toast/interface";

type ToastArg = (message?: ToastInfo) => void;

interface ToastContexValue {
    info: ToastArg;
    success: ToastArg;
    error: ToastArg;
    warning: ToastArg;
    close: (id: number) => void;
}

export const ToastContext = createContext<ToastContexValue | null>(null);

export const useToast = () => useContext(ToastContext);