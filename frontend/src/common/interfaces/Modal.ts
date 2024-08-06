export interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    closeIcon?: boolean;
    title?: string;
    children?: React.ReactNode;
    zIndex?: number;
    style?: React.CSSProperties;
}