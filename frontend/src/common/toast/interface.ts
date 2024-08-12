export interface ToastInfo {
    message?: string;
    description?: string;
};

export type ToastType = 'success' | 'info' | 'error' | 'warning';

export interface ToastProviderProperties {
    children: React.ReactElement;
};

export interface IToast {
    message?: ToastInfo;
    id: number;
    type: ToastType;
};

export interface ToastProps {
    message?: ToastInfo;
    close: () => void;
    type: ToastType;
};
