import { FC, useMemo, memo } from 'react';
import { ImageComponents, ImageComponentsTypes } from '@/common/svg-helper/index';

interface SvgHelperProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  iconName: ImageComponentsTypes;
}

export const SvgHelper: FC<SvgHelperProps> = memo(
  ({ iconName, ...props }) => {
    const CurrentIcon = useMemo(() => ImageComponents[iconName], [iconName]);

    return CurrentIcon ? (
      <CurrentIcon
        {...props}
      />
    ) : null;
  },
);

export default SvgHelper;
