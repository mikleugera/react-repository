import { useTrackDetail } from "../bil/useTrackDetail";
import styles from "./TrackDetail.module.css";

type Props = {
    trackId: string | null;
}

export function TrackDetail({trackId}: Props) {
    const {selectedTrack} = useTrackDetail(trackId)

    return <div className={styles.track}>              
        <h2>Details</h2>
        {!selectedTrack && !trackId && 'Track is not selected'}
        {!selectedTrack && trackId && <span>Loading...</span>}
        {selectedTrack && trackId && selectedTrack.id !== trackId && <span>Loading...</span>}
        {selectedTrack &&
        <div>
            <h3>{selectedTrack.attributes.title}</h3>
            <h4>Lirics</h4>
            <p>{selectedTrack.attributes.lirycs ?? 'no lyrics'}</p>
        </div>
        }
    </div>
}