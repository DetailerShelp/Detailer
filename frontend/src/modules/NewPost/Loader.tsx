import SvgHelper from "@/common/svg-helper/SvgHelper";
import { LoaderWrapper } from "./style";
import { colors } from "@/common/styles/styleConstants";

const Loader = () => {
    return(
        <>
            <LoaderWrapper>
                <SvgHelper 
                    iconName="plus" 
                    height="56px" 
                    width="56px"
                    color={colors.grayAccent}
                />
            </LoaderWrapper>
        </>
)}

export default Loader;