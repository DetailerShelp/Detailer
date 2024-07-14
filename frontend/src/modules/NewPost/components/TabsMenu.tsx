import { Tabs } from "@/modules/NewPost/utils/Enums";
import { useState } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { TabButton, TabsWrapper } from "@/modules/NewPost/components/style";

interface TabsMenuProps {
    onSwap: (tabNum: Tabs) => void;
}

const TabsMenu = ({ onSwap }: TabsMenuProps) => {
    const [activeTab, setActiveTab] = useState(Tabs.POST);

    const setActiveTabs = (tab: Tabs) => {
        onSwap(tab);
        setActiveTab(tab);
    };

    return (
        <TabsWrapper>
            <TabButton onClick={() => setActiveTabs(Tabs.POST)} isActive={activeTab === Tabs.POST}>
                <SvgHelper iconName="post" />
                Пост
            </TabButton>
            <TabButton onClick={() => setActiveTabs(Tabs.SHORTS)} isActive={activeTab === Tabs.SHORTS}>
                <SvgHelper iconName="shorts" />
                Шортс
            </TabButton>
            <TabButton onClick={() => setActiveTabs(Tabs.GARAGE)} isActive={activeTab === Tabs.GARAGE}>
                <SvgHelper iconName="auto"/>
                Гараж
            </TabButton>
        </TabsWrapper>
    )
};

export default TabsMenu;