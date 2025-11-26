import { useState, useEffect } from "react";
import { type TrackDetailsResource, getTrack } from "../dal/api";


export function useTrackDetail(trackId: string | null) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        getTrack(trackId)
            .then(json => setSelectedTrack(json.data));

    }, [trackId]);

    return { selectedTrack };
}
