import { useState } from "react";
import ShortsInfo from "@/modules/user/shorts/components/ShortsInfo";
import ShortsVideos from "@/modules/user/shorts/components/ShortsVideos";
import { PageContent } from "@/modules/user/PageContent";
import ShortComments from "@/modules/user/shorts/components/ShortComments";
import { videoLinks } from "./videos";

export default function ShortsPage() {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isVideos, setIsVideos] = useState(videoLinks.length)

    // ToDo
    return (
        <PageContent height={847}
            content={isVideos && <ShortsVideos activeVideo={activeVideo} setActiveVideo={setActiveVideo} />}
            widgetOne={isVideos && <ShortsInfo activeVideo={activeVideo} />}
            widgetTwo={isVideos && <ShortComments />}
        />
    )
}
