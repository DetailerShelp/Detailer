import { useState } from "react";
import ShortsInfo from "@/modules/user/shorts/components/ShortsInfo";
import ShortsVideos from "@/modules/user/shorts/components/ShortsVideos";
import { PageContent } from "@/modules/user/PageContent";
import ShortComments from "@/modules/user/shorts/components/ShortComments";

export default function ShortsPage() {
    const [activeVideo, setActiveVideo] = useState(0);

    return (
        <PageContent height={847}
            content={<ShortsVideos activeVideo={activeVideo} setActiveVideo={setActiveVideo} />}
            widgetOne={<ShortsInfo activeVideo={activeVideo} />}
            widgetTwo={<ShortComments />}
        />
    )
}
