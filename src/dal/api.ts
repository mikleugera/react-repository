type TrackDetailsAttributes = {
    title: string
    lirycs: string | null
}

export type TrackDetailsResource = {
    id: string
    attributes: TrackDetailsAttributes 
}

type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: { 
                //'api-key': '05eed76f-c832-438e-ad78-47e88144b487' 
            }
        }).then(res => res.json())
    
    return promise    
} 

type TrackAttachment = {
    url: string
}

type TrackListItemAttributes = {
    title: string
    attachments: Array<TrackAttachment>
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemAttributes
} 

type GetTrackListOutput = {
    data: Array<TrackListItemResource>
}

export const getTracksList = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            //'api-key': '05eed76f-c832-438e-ad78-47e88144b487'
        }
    }).then(res => res.json())

    return promise
}


