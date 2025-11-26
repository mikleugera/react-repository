import { useTracks } from "../bil/useTracks";
import { TrackItem} from "./TrackItem";
import styles from "./TracksList.module.css";

type Props = {
    selectedTrackId: string | null
    onTrackSelected: (id: string | null) => void
}

export function TracksList({onTrackSelected, selectedTrackId}: Props) {
    const {tracks} = useTracks();

    if(tracks === null) {
        return <span>Loading...</span>  
    }

    if(tracks.length === 0) {
        return <span>No tracks</span>
    }

    const handleResetClick = () => {onTrackSelected?.(null)}

    const handleClick = (trackId: string) => {onTrackSelected?.(trackId)} 

    return <div> 
        <button onClick={handleResetClick}>Reset</button>
        <hr />
        <ul className={styles.tracks}>
            {
                tracks.map((track) => {
                    return (
                        <TrackItem key={track.id}
                                track={track}
                                isSelected={track.id === selectedTrackId}
                                onSelect={handleClick} 
                        />
                    )
                })
            }
        </ul> 
    </div>      
}


