import SvgHelper from "@/common/svg-helper/SvgHelper";
import { LoaderWrapper } from "@/modules/NewPost/components/style";
import { colors } from "@/common/styles/styleConstants";

interface LoaderProps {
    styleWrapper?: React.CSSProperties,
    sizeIcon?: number,
}

const Loader = ({styleWrapper, sizeIcon} : LoaderProps) => {
    return(
        <>
            <LoaderWrapper style={styleWrapper}>
                <SvgHelper 
                    iconName="adder" 
                    height={sizeIcon + 'px'}
                    width={sizeIcon + 'px'}  
                    color={colors.grayAccent}
                />
            </LoaderWrapper>
        </>
)}

export default Loader;