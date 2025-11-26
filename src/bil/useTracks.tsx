import { useState, useEffect } from "react";
import { type TrackListItemResource, getTracksList } from "../dal/api";


export function useTracks() {
    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

    useEffect(() => {
        getTracksList().then(json => setTracks(json.data));
    }, []);

    return {tracks}
}