import { NavigationList } from "@/common/styles/tags/button/NavProfileButton";
import {
  LoadingCircle,
  LoadingNavigationButton,
  LoadingNavigationItem,
} from "@/common/components/loading/styles";

export const NavigationPublicationLoading = ({ count }: { count?: number}) => {

  return (
    <NavigationList>
      {Array.from({ length: count || 3 }).map((_, index) => (
        <LoadingNavigationItem key={index}>
          <LoadingCircle $size={30} />
          <LoadingNavigationButton />
        </LoadingNavigationItem>
      ))}
    </NavigationList>
  );
};
