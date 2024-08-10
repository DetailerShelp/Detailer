
interface EditMessageProps {
    mediaInfo: string;
}

const TypeMedia = ({ mediaInfo }: EditMessageProps) => {
    const renderComponents: { [key: string]: JSX.Element } = {
        'image': (
            <>Изображение</>
        ),

        'video': (
            <>Видео</>
        ),

        'application': (
            <>Файл</>
        ),
    };

    return renderComponents[mediaInfo] || null;
}

export default TypeMedia;