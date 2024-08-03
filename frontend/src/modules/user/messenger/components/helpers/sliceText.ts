interface SliceTextProps {
    text?: string;
    len?: number;
}

export const sliceText = ({text, len = 25}: SliceTextProps) => {
    if(!text) {
        return null
    }
    return text.length > len ? text.slice(0, len) + '...' : text;
};