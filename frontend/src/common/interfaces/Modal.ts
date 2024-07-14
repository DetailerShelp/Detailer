export interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    closeIcon?: boolean;
    children?: React.ReactNode;
    zIndex?: number;
    style?: React.CSSProperties;
}