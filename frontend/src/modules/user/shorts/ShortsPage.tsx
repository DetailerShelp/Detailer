import { useState } from "react";
import ShortsInfo from "@/modules/user/shorts/components/ShortsInfo";
import ShortsVideos from "@/modules/user/shorts/components/ShortsVideos";
import { PageContent } from "@/modules/user/PageContent";

export default function ShortsPage() {
    const [activeVideo, setActiveVideo] = useState(0);

    return (
        <PageContent
            content={<ShortsVideos activeVideo={activeVideo} setActiveVideo={setActiveVideo} />}
            widgetOne={<ShortsInfo activeVideo={activeVideo} />}
            widgetTwo={<></>}
        />
    )
}
