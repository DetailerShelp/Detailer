import { useState } from "react";
import { PageWrapper } from "@/modules/user/PageWrapper";
import ShortsInfo from "@/modules/user/shorts/components/ShortsInfo";
import ShortsVideos from "@/modules/user/shorts/components/ShortsVideos";

export default function ShortsPage() {
    const [activeVideo, setActiveVideo] = useState(0);

    return (
        <PageWrapper
            content={<ShortsVideos activeVideo={activeVideo} setActiveVideo={setActiveVideo} />}
            widgetOne={<ShortsInfo activeVideo={activeVideo} />}
            widgetTwo={<></>}
        />
    )
}
